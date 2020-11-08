import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { InitialType } from './types/InitialType';

type Query = {
  [key: string] : string;
};

const queries = window.location.search.slice(1).split('&').reduce((o, kv) => {
  const [key, val] = kv.split('=');
  o[key] = val;
  return o;
}, {} as Query);

function toInitialType(initType?: string): InitialType {
  switch (initType) {
    case 'blank':
    case 'left':
    case 'center':
    case 'right':
    case 'random':
    case 'all':
      return initType;
    default:
      return 'center';
  }
}

const init = toInitialType(queries['init']);
const rule = parseInt(queries['rule'] ?? '90');
const length = parseInt(queries['length'] ?? '200');
const batch = parseInt(queries['batch'] ?? '1');
const max = parseInt(queries['max'] ?? '200');
const interval = parseInt(queries['interval'] ?? '50');

console.log("cell-automata", {rule, init, length});

ReactDOM.render(
  <React.StrictMode>
    <App
      initType={init}
      rule={rule}
      length={length}
      interval={interval}
      batch={batch}
      max={max}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
