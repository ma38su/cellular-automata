import React from 'react';
import { Cell } from './Cell';

type Props = {
  y: number;
  size: number;
  state: boolean[];
};

function CellAutomata(props: Props) {
  const {
    y,
    size,
    state: stateArray
  } = props;

  return (
    <>
    {
      stateArray.map((state, i) => {
        return <Cell x={i * size} y={y} size={size} state={state} key={i} />
      })
    }
    </>
  );
}

export { CellAutomata };