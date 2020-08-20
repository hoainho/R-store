import React, { Component }from 'react';
import {Link} from 'react-router-dom';
 export default class CartStateControl extends Component {
    render(){
        return ( 
            <div>
                <div className="cart-container--storage_edit">
                    <Link to="" className="btn btn-primary contact-container--submit_box__details  mr-2"> Sửa </Link>
                    <Link to="" className="btn btn-primary contact-container--submit_box__details  mr-2"> Xóa </Link>
                </div>
                <div className="cart-container--storage_control">
                    <Link to="" className="btn btn-primary contact-container--submit_box__details circle cart-container--storage_control__home"> Trang Chủ </Link>
                    <div className="cart-container--storage_control__box">
                        <Link to="" className="btn btn-primary contact-container--submit_box__details circle cart-container--storage_control__box___reaction"> Xóa Tất Cả</Link>
                        <Link to="" className="btn btn-primary contact-container--submit_box__details circle cart-container--storage_control__box___reaction"> Cập Nhật </Link>
                    </div>
                </div>
            </div>
        );
    }
}