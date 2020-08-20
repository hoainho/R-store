import React, { Component }from 'react';
import CartPayInformation from './CartPayInformation';
import CartPayBill from './CartPayBill';
import CartPayCode from './CartPayCode';
export default class CartPay extends Component {
    render(){
        return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 cart-container--payment">
                <div className="cart-container--payment_box">
                <div className="cart-container--payment_box__title">Tổng cộng</div>
               <CartPayInformation />
               <CartPayBill />
               <CartPayCode />
                <button className="btn btn-primary contact-container--submit_box__details circle cart-container--storage_control__box___reaction cart-container--payment_box__payment"> Thanh Toán </button>
            </div>
        </div>
        );
    }
}
