import React, { Component }from 'react';
export default class CartStateStorage extends Component {
   
    onDelete = () =>{
        this.props.onDelete (this.props.task.id);
    }
    render(){
        var { task } = this.props;
       
        var total = (price,quanlity) => {
           return price * quanlity;
        }
        return (    
                <tr>                  
                    <td className="cart-container--storage_products__name">
                        <img className="cart-container--storage_products__name___picture" src="../img/HeadphoneAcer1A.png" alt ="Headphone"/>
                        <span className="cart-container--storage_products__name___text">{task.name}</span>
                    </td>
                    <td className="cart-container--storage_products__sign">
                        <div className="cart-container--storage_products__sign___text">   {task.price}    </div>
                     </td>
                    <td  className="cart-container--storage_products__sign">
                        <div className="cart-container--storage_products__sign___text">{task.quanlity} </div>
                    </td >
                    <td  className="cart-container--storage_products__sign">
                        <div className="cart-container--storage_products__sign___text">{total(task.price,task.quanlity)}</div>
                    </td>
                    <td  className="cart-container--storage_edit"> 
                        <button onClick={this.onDelete} className="btn btn-primary contact-container--submit_box__details  mr-2"> Xóa </button>
                    </td>
                </tr>
            
        );
    }
}