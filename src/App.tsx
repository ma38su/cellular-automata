import React from 'react';
import { CellAutomata } from './components/CellAutomata';
import { InitialType } from './types/InitialType';

const cellSize = 10;
const maxSeq = 200;

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

function initialState(type: InitialType, length: number) {
  const states = [...new Array(length).keys()].map(i => false);
  switch (type) {
    case 'left':
      states[0] = true;
      break;
    case 'center':
      states[Math.floor(length / 2)] = true;
      break;
    case 'right':
      states[states.length - 1] = true;
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
  rule: number;
  length: number;
}

function App(props: Props) {
  const { initType, rule, length } = props;
  const [ stateMachines ] = React.useState(toStateMachine(rule));
  const [ cellTable, setCellTable ] = React.useState<boolean[][]>([initialState(initType, length)]);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCellTable(table => {
        if (table.length > maxSeq) {
          clearInterval(id);
        }

        const lastStates = table[table.length - 1];
        const newStates = [...lastStates.keys()].map(i => {
          return nextState(stateMachines, lastStates, i);
        });
        return [...table, newStates];
      });
    }, 500);
    return () => clearInterval(id);
  }, [stateMachines]);
  return (
    <svg>
      {
        cellTable.map((stateArray, i) => {
          return <CellAutomata y={cellSize * i} size={cellSize} state={stateArray} key={i} />;
        })
      }
    </svg>
  );
}

export default App;
