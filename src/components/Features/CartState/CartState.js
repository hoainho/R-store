import React, { Component }from 'react';
import CartStateControl from './CartStateControl';
import CartStateStorage from './CartStateStorage';
 export default class CartState extends Component {
    render(){
        var { tasks } = this.props;
        var elmTasks = tasks.map((task,index) => {
            return <CartStateStorage key={task.id} index={index} task ={task}/> 
        })
        return ( 
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 cart-container--storage">
                {/* <div className="cart-container--storage_title">
                    <div className="cart-container--storage_title__name">
                        Sản phẩm
                    </div>
                    <div className="cart-container--storage_title__price">
                        Giá
                    </div>
                    <div className="cart-container--storage_title__quanlity">
                        Số Lượng
                    </div>
                    <div className="cart-container--storage_title__total">
                        Tổng cộng
                    </div>
                </div>
                 */}
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
                
                <CartStateControl />
            </div>
        );
    }
}