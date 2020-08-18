import * as types from "./../const/Config";
export const Status = () =>{
 return{
    type : types.TOGGLE_STATUS
    }
};
export const Sort = (sort) =>{
    return  {
        type : types.SORT,
        sort 
    }   
}
