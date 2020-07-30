import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class CartMini extends Component {
    render(){
        return(
            <div>
                {/* <!-- Modal --> */}
                <div className="modal fade navbar-content--header_main__features___control-cart--storage" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
             <div className="modal-dialog modal-dialog-scrollable" role="document">
             <div className="modal-content navbar-content--header_main__features___control-cart--storage_container">
                 <div className="modal-header navbar-content--header_main__features___control-cart--storage_container__header">
                     <div className="navbar-content--header_main__features___control-cart--storage_container__header-box">
                         <h5 className="modal-title navbar-content--header_main__features___control-cart--storage_container__header-box--details" id="exampleModalScrollableTitle ">Giỏ Hàng</h5>
                         <span className="navbar-content--header_main__features___control-cart--storage_container__header-box--numbers">(1 sản phẩm )</span>
                     </div>
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                     </button>
                 </div>
                 <div className="modal-body navbar-content--header_main__features___control-cart--storage_container__content">
                     <div className="navbar-content--header_main__features___control-cart--storage_container__content-box">
                         <div className="navbar-content--header_main__features___control-cart--storage_container__content-box--pic">
                             <img src="img/mouse2A.png" alt="" className="navbar-content--header_main__features___control-cart--storage_container__content-box--pic_details"/>
                         </div>
                         <div className="navbar-content--header_main__features___control-cart--storage_container__content-box--description">
                             <h6 className="navbar-content--header_main__features___control-cart--storage_container__content-box--description_name">
                                 Axtrix 2.0
                             </h6>
                             <span className="navbar-content--header_main__features___control-cart--storage_container__content-box--description_price">
                                 $1.800.000VND
                             </span>
                             <span className="navbar-content--header_main__features___control-cart--storage_container__content-box--description_numbers">
                                 SL : <span className="navbar-content--header_main__features___control-cart--storage_container__content-box--description_numbers__details ">1</span>
                             </span>
                         </div>
                         <div className="navbar-content--header_main__features___control-cart--storage_container__content-box--control">
                             <span className="navbar-content--header_main__features___control-cart--storage_container__content-box--control_setting">
                                 <i className="fas fa-cog avbar-content--header_main__features___control-cart--storage_container__content-box--control_setting__details"></i>
                             </span>
                             <span className="navbar-content--header_main__features___control-cart--storage_container__content-box--control_delete">
                                 <i className="far fa-trash-alt avbar-content--header_main__features___control-cart--storage_container__content-box--control_delete__details"></i>
                             </span>
                             
                         </div>
                     </div>
                 </div>
                 <div className="modal-footer navbar-content--header_main__features___control-cart--storage_container__control">
                     <div className="navbar-content--header_main__features___control-cart--storage_container__control-price">
                         <h5 className="navbar-content--header_main__features___control-cart--storage_container__control-price--tittle">
                             Total :
                         </h5>
                         <span className="navbar-content--header_main__features___control-cart--storage_container__control-price--value">
                             $1.800.000VND
                         </span>
                     </div>
                     <button className="product-tab--container_content__category___product-button--card left-0 mb-2">Thanh Toán</button>
                     <button className="product-tab--container_content__category___product-button--card bg-divider left-0 "> Chỉnh sửa</button>
                 </div>
             </div>
             </div>
         </div>
            </div>
        );
    }
}