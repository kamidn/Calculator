//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
*/

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);