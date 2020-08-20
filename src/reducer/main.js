import  {createStore } from 'redux';
import {Status,Sort} from './../action/index';
import myReducer from './index';

const store = createStore(myReducer);
console.log('Default : ', store.getState());
store.dispatch(Status());
console.log('TOGGLE_STATUS : ',store.getState());
store.dispatch(Sort({
    by : 'name',
    value : -1
}));
console.log('Sort : ', store.getState());