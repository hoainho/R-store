import React, { Component } from 'react';

export default class ProductDetails extends Component{
    render(){
        return(
            // <!-- PRODUCT-DETAILS  -->
                <div className="wrapper">
                    <div className="slim_modal" id="examplePlain">
                    <div className="sm_content">
                        <div className="sm_content_inner_wrap">
                        <div className="">
                            {/* <!-- className=sm_area_top (padding=4rem)--> */}
                            <h3>    
                                <img src="./img/HeadphoneAcer1A.png" alt="Headphone" className="sm_pic"/>
                            </h3>
                        </div>
                        <div className="sm_area_bottom">
                            
                        </div>
                        <a className="sm_close sm_close_button"></a>
                        </div>
                    </div>
                    </div>
                    <div className="slim_modal" id="exampleAdvanced">
                    <div className="sm_content">
                        <div className="sm_header">Chi tiết sản phẩm</div>
                        <div className="sm_icon_menu">
                        <ul>
                            <li className="sm_close"><i className="fa fa-times fa-fw "></i></li>
                            <li className="sm-icon--item"><i className="sm-icon--link far fa-user"></i></li>
                            <li className="sm-icon--item"><i className="sm-icon--link fas fa-heartbeat"></i></li>
                            <li className="sm-icon--item"><i className="sm-icon--link fas fa-not-equal"></i></li>
                            <li className="sm-icon--item"><i className="sm-icon--link far fa-share-square"></i></li>
                        </ul>
                        </div>
                        
                        
                        <div className="sm_content_inner_wrap row">
                        <div className="sm_box col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="sm_box_pic">
                                {/* <!-- className=sm_area_top (padding=4rem)--> */}
                                    <img src="./img/HeadphoneAcer1A.png" alt="Headphone" className="sm_box_pic_details"/>
                            </div>
                            <div className="sm_box_list">
                                    <div className="sm_box_item">
                                        <img src="/img/HeadphoneAsus1A.png" alt="HeadphoneAfter" className="sm_box_link"/>
                                    </div>
                                    <div className="sm_box_item">
                                        <img src="/img/HeadphoneAsus3.png" alt="HeadphoneAfter" className="sm_box_link"/>
                                    </div>  
                                    <div className="sm_box_item">
                                        <img src="/img/HeadphoneAsus5.png" alt="HeadphoneAfter" className="sm_box_link"/>
                                    </div>
                                    <div className="sm_box_item">
                                        <img src="/img/HeadphoneAsus4B.png" alt="HeadphoneAfter" className="sm_box_link"/>
                                    </div>
                                
                            </div>
                        </div>
                        <div className="sm_area_bottom col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="sm-right">
                                <div className="sm-right--content">
                                    <h1 className="sm-right--content_name">
                                        Comming Soon
                                    </h1>
                                    <ul className="sm-right--content_list">
                                        <li className="sm-right--content_item">
                                            <p className="sm-right--content_introduce">Hiệu năng cao</p>
                                        </li>
                                        <li className="sm-right--content_item">
                                            <p className="sm-right--content_introduce">Giá thành thấp</p>
                                        </li>
                                        <li className="sm-right--content_item">
                                            <p className="sm-right--content_introduce">Chip thế hệ mới</p>
                                        </li>
                                        <li className="sm-right--content_item">
                                            <p className="sm-right--content_introduce">Bảo hành 1 năm</p>
                                        </li>
                                    </ul>
                                    <div className="sm-right--content_ability">
                                        <span className="sm-right--content_ability__status">Tình Trạng : <strong className="special">Còn Hàng</strong></span>
                                        <span className="sm-right--content_ability__code">Mã sản phẩm : <strong className="special">TN001</strong></span>
                                    </div>
                                    <div className="sm-right--rating">
                                        <div className="sm-right--rating_result">
                                            <span className="product-tab--container_content__category___product-vote sm-right--rating_result__summary">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </span>
                                            <span className="sm-right--rating_review">68 Reviews</span>
                                        </div>
                                    </div>
                                    
                                    <span className="product-tab--container_content__category___product-price sm-right--price">
                                        <span className="product-tab--container_content__category___product-price--present sm-right--price_present">1.800.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old sm-right--price_old">2.000.000vnd</span>
                                    </span>
                                </div>
                                <div className="sm-right--control">
                                    <div className="sm-right--control_box">
                                        <span className="sm-right--control_reduction">
                                            <i className="fa fa-minus"></i>
                                        </span>
                                        <span className="sm-right--control_number">
                                            1
                                        </span>
                                        <span className="sm-right--control_increase">
                                            <i className="fa fa-plus"></i>
                                        </span>
                                    </div>
                                    <button className="product-tab--container_content__category___product-button--card sm-right--control_add">Thêm Sản Phẩm</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- <div className="sm_close sm_close_button">Đóng</div> --> */}
                        </div>
                    </div>
                    </div>
                    <div className="slim_modal" id="exampleData">
                    <div className="sm_content">
                        <div className="sm_header"></div>
                        <div className="sm_icon_menu is_right">
                        <ul>
                            <li className="sm_close"><i className="fa fa-times fa-fw "></i></li>
                        </ul>
                        </div>
                        <div className="sm_content_inner_wrap">
                        <div className="sm_area_all"></div>
                        <a className="sm_close sm_close_button">Đóng</a>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}