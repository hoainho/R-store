import * as types from './../const/Config';
var initialState = [{
    name : "",
    value : 0,
    type: ""
}];


var myReducer =( state = initialState, action  )=> {
    switch(action.type){
        case types.LIST_ALL :
        return state;
        default : return state;
    }
};
export default myReducer;