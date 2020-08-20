import React, { Component }from 'react';
 export default class CartStateStorage extends Component {
    render(){
        return ( 
            <div >
                <div className="cart-container--storage_title">
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
                <div className="cart-container--storage_products">
                    <div className="cart-container--storage_products__name">
                        <img className="cart-container--storage_products__name___picture" src="../img/HeadphoneAcer1A.png" alt ="Headphone"/>
                        <span className="cart-container--storage_products__name___text">Tai Nghe Acer Alpha 2</span>
                    </div> 
                    <div className="cart-container--storage_products__price">
                        $1.800.000Vnd
                    </div>
                    <div className="cart-container--storage_products__quanlity">
                        1
                    </div>
                    <div className="cart-container--storage_products__total">
                        $1.800.000Vnd
                    </div>
                </div>
            </div>
        );
    }
}