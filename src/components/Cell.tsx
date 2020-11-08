import React from 'react';

type Props = {
  x: number;
  y: number;
  size: number;
  state: boolean;
};

function Cell(props: Props) {
  const { x, y, size, state} = props;

  const stroke = '#222';
  const color = state ? '#777' : '#EEE';

  return (<rect x={x} y={y} width={size} height={size} fill={color} stroke={stroke} />);
}
export { Cell };