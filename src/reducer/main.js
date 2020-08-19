import  {createStore } from 'redux';
import {Status,Sort} from './../action/index';

var initialState = {
    status : false ,
    sort : {
        by  : 'name',
        value  : 1
    }
}

var myReducers = (state = initialState , action) => {
    if(action.type === 'TOGGLE_STATUS'){
        state.status = !state.status
        return state;
    }
    if(action.type === 'SORT'){
        var {by,value} = action.sort;
        var {status} = state;
        return {
            status : status,
            sort : {
                by :by,
                value : value
            }
        }

    
    }
    return state;
}
const store = createStore(myReducers);
console.log('Default : ', store.getState());
store.dispatch(Status());
console.log('TOGGLE_STATUS : ',store.getState());
store.dispatch(Sort());
console.log('Sort : ', store.getState());
export default myReducers;
