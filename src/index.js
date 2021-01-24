import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <HashRouter basename={'/'}>
    <App />
  </HashRouter>,
  rootElement);
registerServiceWorker();

