import  { combineReducers,createStore } from 'redux';

// const myReducer = combineReducers({

// });
var initialState = {
    status : false ,
    sort : {
        by  : 'name',
        value  : 1
    }
}
var myReducers = (state = initialState , action) => {
    return state;
}
const store = createStore(myReducers);

console.log('Default : ', store.getState());
export default myReducer;
