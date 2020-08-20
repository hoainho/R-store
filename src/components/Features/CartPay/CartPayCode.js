import React, { Component }from 'react';
export default class CartPayCode extends Component {
    render(){
        return (
        
        <div className="cart-container--payment_box__code">
            <input type="checkbox" className="cart-container--payment_box__code___checkbox" />
            <span className="cart-container--payment_box__code___button-On">&#11033;</span>
            <span className="cart-container--payment_box__code___button-Off">&#11032;</span>
            <button className="cart-container--payment_box__code___button">Mã giảm giá</button>
            <div className="cart-container--payment_box__code___placeholder">
                <h5 className="cart-container--payment_box__code___placeholder-title">Nhập giảm giá</h5>
                <input className="cart-container--payment_box__code___placeholder-enter " type="text" placeholder="Nhập mã ở đây"/>
            </div>
            
        </div>
             
        );
    }
}
