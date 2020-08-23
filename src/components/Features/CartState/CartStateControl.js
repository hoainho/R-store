import React, { Component }from 'react';
import {Link} from 'react-router-dom';
import {findIndex} from 'lodash'
 export default class CartStateControl extends Component {
    

    // onDeletee = (id) =>{
    //     var {tasks} = this.props;
    //     console.log(id);
    //     if(confirm('Are you sure delete cart ?')){ //eslint-disable-line
           
    //     var index = findIndex(tasks, (item)=>{
    //         return item.id === id
    //     })
    //     if(index !== -1){
    //         tasks.splice(index,1);
    //         this.setState({
    //             tasks  : tasks
    //         });
    //     }
    //     localStorage.setItem('tasks',JSON.stringify(tasks));
    //     }
      
        
    // }
    render(){
        
        return ( 
            <div>
                {/* <div className="cart-container--storage_edit">
                    <Link to="" className="btn btn-primary contact-container--submit_box__details  mr-2"> Sửa </Link>
                    <button onClick={() => this.onDeletee(this.props.id)} className="btn btn-primary contact-container--submit_box__details  mr-2"> Xóa </button>
                </div> */}
                <div className="cart-container--storage_control">
                    <Link to="" className="btn btn-primary contact-container--submit_box__details circle cart-container--storage_control__home"> Trang Chủ </Link>
                    <div className="cart-container--storage_control__box">
                        <Link to="" className="btn btn-primary contact-container--submit_box__details circle cart-container--storage_control__box___reaction"> Xóa Tất Cả</Link>
                        <Link to="" className="btn btn-primary contact-container--submit_box__details circle cart-container--storage_control__box___reaction"> Cập Nhật </Link>
                    </div>
                </div>
            </div>
        );
    }
}