import './index.css';
import ReactDOM from "react-dom";
import React from "react";

import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro'

ReactDOM.render(
  <div id='app'>
    <Primeiro></Primeiro>
    <ComParametro
      nome="Rafael Castro" nota={9}
    />
    <ComParametro
      nome="Maria Castro" nota={5}
    />
  </div>,
  document.querySelector('#root')
)