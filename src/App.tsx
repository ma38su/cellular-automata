import React from 'react';
import { CellAutomata } from './components/CellAutomata';
import { BoundaryType } from './types/BoundaryType';
import { InitialType } from './types/InitialType';

function toStateMachine(rule: number) {
  const rules = [];
  for (const i of [...new Array(8).keys()]) {
    const bit = 1 << i;
    rules.push((rule & bit) !== 0);
  }
  return rules;
}

function stateLeft(boundary: BoundaryType, states: boolean[], i: number): boolean {
  if (i < 0) {
    switch (boundary) {
      case 'true':
        return true;
      case 'false':
        return false;
      case 'periodic':
        return states[states.length - 1];
      case 'reflective':
        return states[0];
    }
  }
  return states[i];
}

function stateRight(boundary: BoundaryType, states: boolean[], i: number): boolean {
  if (i >= states.length) {
    switch (boundary) {
      case 'true':
        return true;
      case 'false':
        return false;
      case 'periodic':
        return states[0];
      case 'reflective':
        return states[states.length - 1];
    }
  }
  return states[i];
}

function nextState(stateMachine: boolean[], boundary: BoundaryType, states: boolean[], i: number): boolean {
  const b0 = stateLeft(boundary, states, i - 1) ? 4 : 0;
  const b1 = states[i] ? 2 : 0;
  const b2 = stateRight(boundary, states, i + 1) ? 1 : 0;
  return stateMachine[b0 | b1 | b2];
}

function initCells(type: InitialType, batch: number, length: number) {
  const states = [...new Array(length).keys()].map(i => false);
  switch (type) {
    case 'left':
      for (let i = 0; i < batch; ++i) {
        states[i] = true;
      }
      break;
    case 'center':
      for (let i = 0; i < batch; ++i) {
        states[Math.floor(i + (length - batch) / 2)] = true;
      }
      break;
    case 'right':
      for (let i = 0; i < batch; ++i) {
        states[states.length - 1 - i] = true;
      }
      break;
    case 'all':
      return states.map(_ => true);
    case 'random':
      return states.map(_ => Math.random() > 0.5 ? true : false);
  }
  return states;
}

type Props = {
  initType: InitialType,
  batch: number;
  rule: number;
  length: number;
  max: number;
  interval: number;
  size: number;
  boundary: BoundaryType;
}

type State = {
  cells: boolean[];
  comps: JSX.Element[];
};

function initState(type: InitialType, batch: number, length: number, cellSize: number) {
  const cells = initCells(type, batch, length);
  return {
    cells,
    comps: [
      <CellAutomata
        y={0}
        size={cellSize}
        state={cells}
        key={0}
      />
    ],
  }
}

function App(props: Props) {
  const {
    initType,
    rule,
    length,
    batch,
    max,
    interval,
    size: cellSize,
    boundary,
  } = props;

  const maxSeq = max < 1000 ? max : 1000;

  const stateMachines = React.useMemo(() => {
    return toStateMachine(rule);
  }, [rule]);

  const [ state, setState ] = React.useState<State>(initState(initType, batch, length, cellSize));

  React.useEffect(() => {
    const id = setInterval(() => {
      setState(prev => {
        const { cells, comps } = prev;
        if (comps.length >= maxSeq) return prev;

        const newCells = [...cells.keys()]
          .map(i => nextState(stateMachines, boundary, cells, i));
        const i = comps.length;
        const newComps = [
          ...comps,
          <CellAutomata
            y={cellSize * i}
            size={cellSize}
            state={newCells}
            key={i}
          />
        ];
        return {
          comps: newComps,
          cells: newCells,
        };
      });
    }, interval);
    return () => {
      clearInterval(id);
    };
  }, [stateMachines, boundary, maxSeq, interval, cellSize]);

  return (
    <svg>
      { state.comps }
    </svg>
  );
}

export { App };
