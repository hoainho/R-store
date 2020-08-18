import  {createStore } from 'redux';

// const myReducer = combineReducers({

// });
var initialState = {
    status : false ,
    sort : {
        by  : 'name',
        value  : 1
    }
}
var action = {type : 'TOGGLE_STATUS'};
var sortAction  = {
    type : 'Sort',
    sort :{
        by : 'name',
        value : -1
    }
}
var myReducers = (state = initialState , action) => {
    if(action.type === 'TOGGLE_STATUS'){
        state.status = !state.status
        return state;
    }
    if(action.type === 'Sort'){
        var {by,value} = sortAction.sort;
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
store.dispatch(action);
console.log('TOGGLE_STATUS : ',store.getState());
store.dispatch(sortAction);
console.log('Sort : ', store.getState());
export default myReducers;
