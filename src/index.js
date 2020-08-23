import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// //Store 
import  {createStore } from 'redux';
import myReducer from './reducer/index';
import { Provider } from 'react-redux';
const store = createStore(myReducer);

ReactDOM.render(
  <Provider store = { store }>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
