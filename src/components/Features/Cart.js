import React, { Component } from 'react';

export default class Cart extends Component {
    render(){
        return (
            <div>
                <div className="store-tittle news-tittle">
                    <div className="store-tittle--container">
                        <a href="#home" className="store-tittle--container_home">Trang chủ</a>
                        <span className="store-tittle--container_iconpresent special">
                            {'>'}
                        </span>
                        <span className="store-tittle--container_present special">
                             Giỏ Hàng
                        </span>
                    </div>
                </div>
                <div className="cart"> 
                    <div className="row cart-container">  
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 cart-container--storage">
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
                                    <img className="cart-container--storage_products__name___picture" src="../img/HeadphoneAcer1A.png"/>
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
                             <div className="cart-container--storage_edit">
                                 <a className="btn btn-primary contact-container--submit_box__details  mr-2"> Sửa </a>
                                 <a className="btn btn-primary contact-container--submit_box__details  mr-2"> Xóa </a>
                             </div>
                             <div className="cart-container--storage_control">
                                <a className="btn btn-primary contact-container--submit_box__details circle cart-container--storage_control__home"> Trang Chủ </a>
                                <div className="cart-container--storage_control__box">
                                    <a className="btn btn-primary contact-container--submit_box__details circle cart-container--storage_control__box___reaction"> Xóa Tất Cả</a>
                                    <a className="btn btn-primary contact-container--submit_box__details circle cart-container--storage_control__box___reaction"> Cập Nhật </a>
                                </div>
                             </div>
                        </div>  
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 cart-container--payment">
                             
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}