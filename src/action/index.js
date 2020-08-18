export const Status = () =>{
 return{
    type : 'TOGGLE_STATUS'
    }
};
export const Sort = () =>{
    return  {
        type : 'Sort',
        sort :{
            by : 'name',
            value : -1
        }
}   
