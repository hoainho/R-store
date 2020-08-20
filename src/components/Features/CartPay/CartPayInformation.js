import React, { Component }from 'react';
export default class CartPayInformation extends Component {
    render(){
        return (
                <div className="cart-container--payment_box__information">
                    <input type="checkbox" className="cart-container--payment_box__information___checkbox" />
                    <button className=" cart-container--payment_box__information___button">Thông tin giao hàng </button>
                    <span className="cart-container--payment_box__information___button-On">&#11033;</span>
                    <span className="cart-container--payment_box__information___button-Off">&#11032;</span>
                    <div className="cart-container--payment_box__information___toggle">
                        <div className="cart-container--payment_box__information___placeholder">
                            <h5 className="cart-container--payment_box__information___placeholder-title">Địa chỉ</h5>
                            <input className="cart-container--payment_box__information___placeholder-enter" type="text" placeholder="Địa chỉ nhận hàng..."/>
                        </div>
                        <div className="cart-container--payment_box__information___placeholder">
                            <h5 className="cart-container--payment_box__information___placeholder-title">Số điện thoại</h5>
                            <input className="cart-container--payment_box__information___placeholder-enter" type="tel" placeholder="Chúng tôi sẽ liên lạc sau vài phút..."/>
                        </div>
                    </div>
                </div>  
        );
    }
}
