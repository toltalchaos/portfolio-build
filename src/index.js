import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import 'normalize.css';
import './reset.css';
import {Colors} from './components/constValues';
import styled from 'styled-components';

const INDEX = styled.div`
background-color: ${Colors.slateGrey};
min-height: 100vh;
`


ReactDOM.render(
  <React.StrictMode>
  <INDEX>
     <App />
  </INDEX>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
