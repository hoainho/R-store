import React, {Component} from "react";
import Slider from "react-slick";

class productTop extends Component {
    render() {
        const settings = {
            dots: false,
            accessibility:true,
            slidesToShow: 5,
            slidesToScroll: 3,
            autoplay:true,
            autoplaySpeed: 2000,
            centerMode:true,  
            initialSlide: 1 ,
            lazyLoad:'ondemand',
            pauseOnHover:true,
            swipe:true,
            touchMove:true,
            useCSS:true,
            useCSS3:true, 
            useTransform:true,
        };
        return (
            // <!-- PRODUCT-TAB  -->
                <div class="product-tab">
                    <div class="product-tab--container product-tab--container_hero">
                        <div class="product-tab--container_tittle">
                            <ul  role="tablist"  class="product-tab--container_tittle__list nav nav-tabs">
                                <li   id="tab-item " class="product-tab--container_tittle__item active-tab--item nav-item">
                                    <a href="#tab_new-arrival" id="nav-new-arrival" role="tab" aria-controls="nav-new-arrival" aria-selected="true" data-toggle="pill" id="tab-link" class="product-tab--container_tittle__link  nav-link active">Hàng mới về</a>
                                </li>
                                
                                <li   id="tab-item "  class="product-tab--container_tittle__item active-tab--item nav-item">
                                    <a href="#tab_best-seller" id="nav-best-seller" role="tab" aria-controls="nav-best-seller" aria-selected="true" data-toggle="tab" id="tab-link" class="product-tab--container_tittle__link  nav-link ">Bán chạy</a>
                                </li>
                                
                                <li  id="tab-item " class="product-tab--container_tittle__item active-tab--item nav-item">
                                    <a href="#tab_featured" id="nav-featured" role="tab" aria-controls="nav-featured" aria-selected="true" data-toggle="tab"id="tab-link" class="product-tab--container_tittle__link  nav-link ">Đề xuất</a>
                                </li>
                                
                                <li  id="tab-item " class="product-tab--container_tittle__item active-tab--item nav-item">
                                    <a href="#tab_hot-sell" id="nav-hot-sell" role="tab" aria-controls="nav-hot-sell" aria-selected="true" data-toggle="tab" id="tab-link" class="product-tab--container_tittle__link  nav-link ">Giảm giá</a>
                                </li>
                            </ul>
                        </div>
                        <div id="nav-tabContent" class="product-tab--container_content tab-content ">
                            
                            <Slider { ...settings } id="tab_new-arrival"   role="tabpanel" aria-labelledby="nav-new-arrival"   class=" product-tab--container_content__box tab-pane fade show active">
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/product-headphoneB.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/product-headphoneA.jpg" alt=""/>
                                    <span  class="product-tab--container_content__box___product-details">
                                        <a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a>
                                    </span>
                                    
                                    <h4 class="product-tab--container_content__box___product-name">Tai nghe Asus AF298</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div>  
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/headphone2A.png" alt="taingheV"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/headphone2B.jpg" alt="taingheV"/>
                                    <span class="product-tab--container_content__box___product-details">
                                        <a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a>
                                    </span>
                                    <h4 class="product-tab--container_content__box___product-name"> Tai nghe Rapoo VH510 Gaming</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">410.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">900.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/keyboard1A.png" alt="keyboard"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/keyboard1B.png" alt="keyboard"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Bàn Phím MSI A2G</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">750.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">675.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/keyboard2A.png" alt="keyboard2A"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/keyboard2B.png" alt="keyboard2B"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Bàn Phím Luxury B2A93 </h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/mouse1A.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/mouse1B.png" alt=""/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Chuột Gaming A2F66</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/mouse2A.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/mouse2B.png" alt=""/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Chuột Gaming 9SAK</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">1.080.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">1.200.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/Razer1A.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/Razer1B.png" alt=""/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Lót Chuột Razer</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">90.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">100.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/Razer2A.png" alt="Razer2A"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/Razer2B.jpg" alt="Razer2A"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Lót Chuột Gaming </h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">150.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">135.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/usb1A.png" alt="usb"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/usb1B.jpg" alt="usb"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">USB Gaming 128GB</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">450.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">500.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                
                            </Slider>
                            <Slider { ...settings } id="tab_best-seller"   role="tabpanel" aria-labelledby="nav-best-seller"   class=" product-tab--container_content__box tab-pane fade ">
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/mouse1A.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/mouse1B.png" alt=""/>
                                    <span class="product-tab--container_content__box___product-details">
                                        <a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a>
                                    </span>
                                    <h4 class="product-tab--container_content__box___product-name">Chuột Gaming A2F66</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/mouse2A.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/mouse2B.png" alt=""/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Chuột Gaming 9SAK</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">1.080.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">1.200.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/Razer1A.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/Razer1B.png" alt=""/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Lót Chuột Razer</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">90.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">100.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/Razer2A.png" alt="Razer2A"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/Razer2B.jpg" alt="Razer2A"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Lót Chuột Gaming </h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">150.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">135.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/usb1A.png" alt="usb"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/usb1B.jpg" alt="usb"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">USB Gaming 128GB</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">450.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">500.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/product-headphoneB.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/product-headphoneA.jpg" alt=""/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Tai nghe Asus AF298</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div>  
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/headphone2A.png" alt="taingheV"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/headphone2B.jpg" alt="taingheV"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name"> Tai nghe Rapoo VH510 Gaming</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">410.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">900.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/keyboard1A.png" alt="keyboard"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/keyboard1B.png" alt="keyboard"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Bàn Phím MSI A2G</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">750.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">675.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/keyboard2A.png" alt="keyboard2A"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/keyboard2B.png" alt="keyboard2B"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Bàn Phím Luxury B2A93 </h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                            </Slider>
                            <Slider { ...settings } id="tab_featured"      role="tabpanel" aria-labelledby="nav-featured"      class=" product-tab--container_content__box tab-pane fade  ">
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/keyboard1A.png" alt="keyboard" />
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/keyboard1B.png" alt="keyboard" />
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Bàn Phím MSI A2G</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">750.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">675.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/keyboard2A.png" alt="keyboard2A"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/keyboard2B.png" alt="keyboard2B"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Bàn Phím Luxury B2A93 </h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/mouse1A.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/mouse1B.png" alt=""/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Chuột Gaming A2F66</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/product-headphoneB.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/product-headphoneA.jpg" alt=""/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Tai nghe Asus AF298</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div>  
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/headphone2A.png" alt="taingheV"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/headphone2B.jpg" alt="taingheV"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name"> Tai nghe Rapoo VH510 Gaming</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">410.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">900.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/mouse2A.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/mouse2B.png" alt=""/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Chuột Gaming 9SAK</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">1.080.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">1.200.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/Razer1A.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/Razer1B.png" alt=""/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Lót Chuột Razer</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">90.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">100.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/Razer2A.png" alt="Razer2A"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/Razer2B.jpg" alt="Razer2A"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Lót Chuột Gaming </h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">150.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">135.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/usb1A.png" alt="usb"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/usb1B.jpg" alt="usb"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">USB Gaming 128GB</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">450.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">500.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <Slider { ...settings } id="tab_hot-sell"      role="tabpanel" aria-labelledby="nav-hot-sell"      class=" product-tab--container_content__box tab-pane fade  ">
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/product-headphoneB.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/product-headphoneA.jpg" alt=""/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Tai nghe Asus AF298</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div>  
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/headphone2A.png" alt="taingheV"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/headphone2B.jpg" alt="taingheV"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name"> Tai nghe Rapoo VH510 Gaming</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">410.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">900.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/keyboard1A.png" alt="keyboard"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/keyboard1B.png" alt="keyboard"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Bàn Phím MSI A2G</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">750.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">675.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/keyboard2A.png" alt="keyboard2A"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/keyboard2B.png" alt="keyboard2B"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Bàn Phím Luxury B2A93 </h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/mouse1A.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/mouse1B.png" alt=""/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Chuột Gaming A2F66</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/mouse2A.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/mouse2B.png" alt=""/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Chuột Gaming 9SAK</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">1.080.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">1.200.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/Razer1A.png" alt=""/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/Razer1B.png" alt=""/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Lót Chuột Razer</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">90.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">100.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/Razer2A.png" alt="Razer2A"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/Razer2B.jpg" alt="Razer2A"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">Lót Chuột Gaming </h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">150.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">135.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__box___product">
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/usb1A.png" alt="usb"/>
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/usb1B.jpg" alt="usb"/>
                                    <span class="product-tab--container_content__box___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__box___product-name">USB Gaming 128GB</h4>
                                    <span class="product-tab--container_content__box___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__box___product-price">
                                        <span class="product-tab--container_content__box___product-price--present">450.000vnd</span>
                                        <span class="product-tab--container_content__box___product-price--old">500.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__box___product-button">
                                        <button class="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__box___product-button--control">
                                            <span class="product-tab--container_content__box___product-button--control_heard"><i class="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__box___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                            </Slider>
                            
                        </div>
                    </div>
                </div>
        );
    }
}
export default productTop;