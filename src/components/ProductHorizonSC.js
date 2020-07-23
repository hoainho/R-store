import React, { Component } from "react";

class ProductHorizonSC extends Component {
    
    render(){
        const settings = {
            dots: false,
            accessibility:true,
            slidesToShow: 5,
            slidesToScroll: 33,
            autoplay:true,
            autoplaySpeed: 1500,
            centerMode:true,  
            initialSlide: 2,
            lazyLoad:'ondemand',
            pauseOnHover:true,
            swipe:true,
            touchMove:true,
            useCSS:true,
            useCSS3:true, 
            useTransform:true,
        }
        return (
            <div className="product-tab product-tab--categorySC">
                    <div className="product-tab--container">
                        <div className="product-tab--container_tittle-category  product-tab--container_tittle-category-SC">
                            <ul  role="tablist" id="nav-tab" className="product-tab--container_tittle-category__list nav nav-tabs">
                                <h4 className="product-tab--container_tittle-category__tittle-keyboard">Màn Hình</h4>
                                <li  id="tab-item " className="product-tab--container_tittle-category__item active-tab--item nav-item">
                                    <a href="#tab_screenasus" id="nav-screenasus" role="tab" aria-controls="nav-screenasus" aria-selected="true" data-toggle="tab" id="tab-link" className="product-tab--container_tittle-category__link  nav-link active">Asus</a>
                                </li>
                                
                                <li  id="tab-item " className="product-tab--container_tittle-category__item active-tab--item nav-item">
                                    <a href="#tab_screenacer" id="nav-screenacer" role="tab" aria-controls="nav-screenacer" aria-selected="true" data-toggle="tab" id="tab-link" className="product-tab--container_tittle-category__link  nav-link ">Acer</a>
                                </li>
                                
                                <li  id="tab-item " className="product-tab--container_tittle-category__item active-tab--item nav-item">
                                    <a href="#tab_screenlogitech" id="nav-screenlogitech" role="tab" aria-controls="nav-screenlogitech" aria-selected="true" data-toggle="tab" id="tab-link" className="product-tab--container_tittle-category__link  nav-link ">Logitech</a>
                                </li>
                                
                                <li  id="tab-item " className="product-tab--container_tittle-category__item active-tab--item nav-item">
                                    <a href="#tab_screensony" id="nav-screensony" role="tab" aria-controls="nav-screensony" aria-selected="true" data-toggle="tab" id="tab-link" className="product-tab--container_tittle-category__link  nav-link ">Sony</a>
                                </li>
                            </ul>
                        </div>
                        <div id="nav-tabContent" className="product-tab--container_content product-tab--container_content-category product-tab--container_content-category-SC tab-content">
                            <div id="tab_screenasus" role="tabpanel" aria-labelledby="nav-screenasus" className="product-tab--container_content__category product-tab--container_content__category tab-pane fade show active">
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/KBAsus1A.png" alt="ROG Strix Flar"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/KBAsus1B.jpg" alt="ROG Strix Flar"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name"> Bàn phím ASUS ROG Strix</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">1.800.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">2.000.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div>  
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/KBAsus2A.png" alt="Sagaris GK1100"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/KBAsus2B.png" alt="Sagaris GK1100"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name"> ASUS Sagaris GK1100</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">900.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">1.000.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/KBAsus3.png" alt="ASUS Cerberus Arctic"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/KBAsus3.png" alt="ASUS Cerberus Arctic"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name"> ASUS Cerberus Arctic</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">750.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">675.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/KBAsus4.png" alt="Cerberus Keyboard MKII"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/KBAsus4.png" alt="Cerberus Keyboard MKII"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Cerberus Keyboard MKII </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">450.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/KBAsus5A.png" alt="GK2000"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/KBAsus5B.png" alt="GK2000"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Asus ROG HORUS GK2000</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">5.000.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">4.500.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/KBAsus6A.png" alt="KBAsus6A"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/KBAsus6B.jpg" alt="KBAsus6A"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">
                                        ASUS ROG Claymore</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">1.990.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">2.100.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                
                            </div>
                            <div id="tab_screenacer" role="tabpanel" aria-labelledby="nav-screenacer" className=" product-tab--container_content__category product-tab--container_content__category tab-pane fade ">
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/mouse1A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/mouse1B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Chuột Gaming A2F66</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">450.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/mouse2A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/mouse2B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Chuột Gaming 9SAK</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">1.080.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">1.200.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/Razer1A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/Razer1B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Lót Chuột Razer</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">90.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">100.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/Razer2A.png" alt="Razer2A"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/Razer2B.jpg" alt="Razer2A"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Lót Chuột Gaming </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">150.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">135.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/usb1A.png" alt="usb"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/usb1B.jpg" alt="usb"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">USB Gaming 128GB</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">450.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">500.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/product-headphoneB.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/product-headphoneA.jpg" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Tai nghe Asus AF298</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">450.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div>  
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/headphone2A.png" alt="taingheV"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/headphone2B.jpg" alt="taingheV"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name"> Tai nghe Rapoo VH510 Gaming</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">410.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">900.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/keyboard1A.png" alt="keyboard"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/keyboard1B.png" alt="keyboard"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Bàn Phím MSI A2G</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">750.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">675.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/keyboard2A.png" alt="keyboard2A"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/keyboard2B.png" alt="keyboard2B"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Bàn Phím Luxury B2A93 </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">450.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div id="tab_screenlogitech" role="tabpanel" aria-labelledby="nav-screenlogitech" className=" product-tab--container_content__category product-tab--container_content__category tab-pane fade ">
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/keyboard1A.png" alt="keyboard"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/keyboard1B.png" alt="keyboard"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Bàn Phím MSI A2G</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">750.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">675.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/keyboard2A.png" alt="keyboard2A"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/keyboard2B.png" alt="keyboard2B"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Bàn Phím Luxury B2A93 </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">450.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/mouse1A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/mouse1B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Chuột Gaming A2F66</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">450.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/product-headphoneB.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/product-headphoneA.jpg" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Tai nghe Asus AF298</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">450.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div>  
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/headphone2A.png" alt="taingheV"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/headphone2B.jpg" alt="taingheV"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name"> Tai nghe Rapoo VH510 Gaming</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">410.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">900.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/mouse2A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/mouse2B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Chuột Gaming 9SAK</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">1.080.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">1.200.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/Razer1A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/Razer1B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Lót Chuột Razer</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">90.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">100.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/Razer2A.png" alt="Razer2A"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/Razer2B.jpg" alt="Razer2A"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Lót Chuột Gaming </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">150.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">135.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/usb1A.png" alt="usb"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/usb1B.jpg" alt="usb"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">USB Gaming 128GB</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">450.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">500.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab_screensony" role="tabpanel" aria-labelledby="nav-screensony" className="product-tab--container_content__category product-tab--container_content__category tab-pane fade ">
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/product-headphoneB.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/product-headphoneA.jpg" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Tai nghe Asus AF298</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">450.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div>  
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/headphone2A.png" alt="taingheV"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/headphone2B.jpg" alt="taingheV"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name"> Tai nghe Rapoo VH510 Gaming</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">410.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">900.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/keyboard1A.png" alt="keyboard"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/keyboard1B.png" alt="keyboard"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Bàn Phím MSI A2G</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">750.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">675.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/keyboard2A.png" alt="keyboard2A"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/keyboard2B.png" alt="keyboard2B"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Bàn Phím Luxury B2A93 </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">450.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/mouse1A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/mouse1B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Chuột Gaming A2F66</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">450.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/mouse2A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/mouse2B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Chuột Gaming 9SAK</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">1.080.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">1.200.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/Razer1A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/Razer1B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Lót Chuột Razer</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">90.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">100.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/Razer2A.png" alt="Razer2A"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/Razer2B.jpg" alt="Razer2A"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Lót Chuột Gaming </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">150.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">135.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/usb1A.png" alt="usb"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/usb1B.jpg" alt="usb"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">USB Gaming 128GB</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">450.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">500.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__category___product-button">
                                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__category___product-button--control">
                                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default ProductHorizonSC;