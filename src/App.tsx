import React from 'react';
import { CellAutomata } from './components/CellAutomata';
import { InitialType } from './types/InitialType';

const cellSize = 6;

function toStateMachine(rule: number) {
  const rules = [];
  for (const i of [...new Array(8).keys()]) {
    const bit = 1 << i;
    rules.push((rule & bit) !== 0);
  }
  return rules;
}

function nextState(stateMachine: boolean[], states: boolean[], i: number): boolean {
  const i0 = i - 1;
  const i2 = i + 1;
  const b0 = (i0 >= 0 && states[i0]) ? 4 : 0;
  const b1 = states[i] ? 2 : 0;
  const b2 = (i2 < states.length && states[i2]) ? 1 : 0;
  return stateMachine[b0 | b1 | b2];
}

function initialState(type: InitialType, batch: number, length: number) {
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
}

type State = {
  cells: boolean[];
  comps: JSX.Element[];
};

function App(props: Props) {
  const { initType,
    rule,
    length,
    batch,
    max,
    interval
  } = props;

  const maxSeq = max < 1000 ? max : 1000;

  const [ stateMachines ] = React.useState(toStateMachine(rule));
  const [ state, setState ] = React.useState<State>({
    cells: initialState(initType, batch, length),
    comps: [],
  });

  React.useEffect(() => {
    console.log("effect");
    const id = setInterval(() => {
      setState(prev => {
        const { cells, comps } = prev;
        const newCells = [...cells.keys()]
          .map(i => nextState(stateMachines, cells, i));
        const i = comps.length;
        return {
          comps:[...comps,
          <CellAutomata
            y={cellSize * i}
            size={cellSize}
            state={newCells}
            key={i}
          />],
          cells: newCells,
        };
      });
    }, interval);
    return () => clearInterval(id);
  }, [stateMachines, maxSeq, interval]);

  return (
    <svg>
      { state.comps }
    </svg>
  );
}

export default App;
