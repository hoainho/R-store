import React, { Component }from 'react';
export default class CartPayBill extends Component {
    render(){
        return (
        
            <div className="cart-container--payment_box__bill">
                <div className="cart-container--payment_box__bill___content" >
                    <span className="basic-text">Giá sản phẩm</span>
                    <span className="basic-text">$1.800.000vnd</span>
                </div>
                <div className="cart-container--payment_box__bill___content" >
                    <span className="basic-text">Phụ Phí</span>
                    <span className="basic-text">$0</span>
                </div>
                <div className="cart-container--payment_box__bill___content" >
                    <span className="basic-text">Tổng hóa đơn</span>
                    <span className="special-text">$1.800.000vnd</span>
                </div>
            </div>
            
        );
    }
}
