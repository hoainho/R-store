import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// //Store 
import  {createStore } from 'redux';
import {listAll} from './action/index';
import myReducer from './reducer/index';
import { Provider } from 'react-redux';
const store = createStore(myReducer);
console.log('Default : ', store.getState());
store.dispatch(listAll({
  name : 'hoainho',
  value :'1',
  type : "deptrai"
}));
console.log('LIST ALL : ', store.getState());
// store.dispatch(Status());
// console.log('TOGGLE_STATUS : ',store.getState());
// store.dispatch(Sort({
//     by : 'name',
//     value : -1
// }));
// console.log('Sort : ', store.getState());

ReactDOM.render(
  <Provider store = { store }>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
