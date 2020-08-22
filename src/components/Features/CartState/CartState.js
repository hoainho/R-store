import React, { Component }from 'react';
import CartStateControl from './CartStateControl';
import CartStateStorage from './CartStateStorage';

 export default class CartState extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id : 0
        }
    }
    onDeletee = (id) =>{
        this.setState({id: id})
        
    }
    
    render(){
        var { tasks } = this.props;
     
        
        var total = (price,quanlity) => {
            return price * quanlity;
         }
        
        var elmTasks = tasks.map((task,index) => {
            // return <CartStateStorage key={task.id} 
            //                         index={index} 
            //                         task ={task}
            //                         findIndex = {this.props.findIndex}
            //                         onDelete ={this.props.onDelete}
            //                         /> 
            return (
                <tr onClick={() => this.onDeletee(task.id) }>                  
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
            )
        });
        
        return ( 
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 cart-container--storage">
                <table class="table table-hover ">
                    <thead>
                        <tr>
                            <th className="center-text">Sản phẩm</th>
                            <th className="center-text">Giá</th>
                            <th className="center-text">Số Lượng</th>
                            <th className="center-text">Tổng cộng</th>
                        </tr>
                    </thead>
                    <tbody>
                     {elmTasks} 
                    </tbody>
                    
                </table>
                
                <CartStateControl id={this.state.id} tasks={tasks}/>
            </div>
        );
    }
}