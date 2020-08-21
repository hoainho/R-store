import React, { Component }from 'react';
export default class CartStateStorage extends Component {
    
  

    
    render(){
        var { task } = this.props;
       
        var total = (price,quanlity) => {
           return price * quanlity;
        }
       
        return (    
                <tr onClick={ this.onDelete(task) }>                  
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
                </tr>
            
        );
    }
}