import React , { Component } from "react";
import Slider from "react-slick";





export default class ProArr extends Component {
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

            <Slider { ...settings } id="tab_new-arrival"   role="tabpanel" aria-labelledby="nav-new-arrival"   className=" product-tab--container_content__box ">
                                <div className="product-tab--container_content__box___product">
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/product-headphoneB.png" alt=""/>
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/product-headphoneA.jpg" alt=""/>
                                    <span  className="product-tab--container_content__box___product-details">
                                        <a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a>
                                    </span>
                                    
                                    <h4 className="product-tab--container_content__box___product-name">Tai nghe Asus AF298</h4>
                                    <span className="product-tab--container_content__box___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__box___product-price">
                                        <span className="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span className="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__box___product-button">
                                        <button className="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__box___product-button--control">
                                            <span className="product-tab--container_content__box___product-button--control_heard"><i className="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__box___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div>  
                                <div className="product-tab--container_content__box___product">
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/headphone2A.png" alt="taingheV"/>
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/headphone2B.jpg" alt="taingheV"/>
                                    <span className="product-tab--container_content__box___product-details">
                                        <a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a>
                                    </span>
                                    <h4 className="product-tab--container_content__box___product-name"> Tai nghe Rapoo VH510 Gaming</h4>
                                    <span className="product-tab--container_content__box___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__box___product-price">
                                        <span className="product-tab--container_content__box___product-price--present">410.000vnd</span>
                                        <span className="product-tab--container_content__box___product-price--old">900.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__box___product-button">
                                        <button className="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__box___product-button--control">
                                            <span className="product-tab--container_content__box___product-button--control_heard"><i className="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__box___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__box___product">
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/keyboard1A.png" alt="keyboard"/>
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/keyboard1B.png" alt="keyboard"/>
                                    <span className="product-tab--container_content__box___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__box___product-name">Bàn Phím MSI A2G</h4>
                                    <span className="product-tab--container_content__box___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__box___product-price">
                                        <span className="product-tab--container_content__box___product-price--present">750.000vnd</span>
                                        <span className="product-tab--container_content__box___product-price--old">675.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__box___product-button">
                                        <button className="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__box___product-button--control">
                                            <span className="product-tab--container_content__box___product-button--control_heard"><i className="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__box___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__box___product">
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/keyboard2A.png" alt="keyboard2A"/>
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/keyboard2B.png" alt="keyboard2B"/>
                                    <span className="product-tab--container_content__box___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__box___product-name">Bàn Phím Luxury B2A93 </h4>
                                    <span className="product-tab--container_content__box___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__box___product-price">
                                        <span className="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span className="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__box___product-button">
                                        <button className="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__box___product-button--control">
                                            <span className="product-tab--container_content__box___product-button--control_heard"><i className="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__box___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__box___product">
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/mouse1A.png" alt=""/>
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/mouse1B.png" alt=""/>
                                    <span className="product-tab--container_content__box___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__box___product-name">Chuột Gaming A2F66</h4>
                                    <span className="product-tab--container_content__box___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__box___product-price">
                                        <span className="product-tab--container_content__box___product-price--present">405.000vnd</span>
                                        <span className="product-tab--container_content__box___product-price--old">450.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__box___product-button">
                                        <button className="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__box___product-button--control">
                                            <span className="product-tab--container_content__box___product-button--control_heard"><i className="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__box___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__box___product">
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/mouse2A.png" alt=""/>
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/mouse2B.png" alt=""/>
                                    <span className="product-tab--container_content__box___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__box___product-name">Chuột Gaming 9SAK</h4>
                                    <span className="product-tab--container_content__box___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__box___product-price">
                                        <span className="product-tab--container_content__box___product-price--present">1.080.000vnd</span>
                                        <span className="product-tab--container_content__box___product-price--old">1.200.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__box___product-button">
                                        <button className="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__box___product-button--control">
                                            <span className="product-tab--container_content__box___product-button--control_heard"><i className="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__box___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__box___product">
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/Razer1A.png" alt=""/>
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/Razer1B.png" alt=""/>
                                    <span className="product-tab--container_content__box___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__box___product-name">Lót Chuột Razer</h4>
                                    <span className="product-tab--container_content__box___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__box___product-price">
                                        <span className="product-tab--container_content__box___product-price--present">90.000vnd</span>
                                        <span className="product-tab--container_content__box___product-price--old">100.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__box___product-button">
                                        <button className="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__box___product-button--control">
                                            <span className="product-tab--container_content__box___product-button--control_heard"><i className="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__box___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__box___product">
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/Razer2A.png" alt="Razer2A"/>
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/Razer2B.jpg" alt="Razer2A"/>
                                    <span className="product-tab--container_content__box___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__box___product-name">Lót Chuột Gaming </h4>
                                    <span className="product-tab--container_content__box___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__box___product-price">
                                        <span className="product-tab--container_content__box___product-price--present">150.000vnd</span>
                                        <span className="product-tab--container_content__box___product-price--old">135.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__box___product-button">
                                        <button className="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__box___product-button--control">
                                            <span className="product-tab--container_content__box___product-button--control_heard"><i className="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__box___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className="product-tab--container_content__box___product">
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/usb1A.png" alt="usb"/>
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/usb1B.jpg" alt="usb"/>
                                    <span className="product-tab--container_content__box___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__box___product-name">USB Gaming 128GB</h4>
                                    <span className="product-tab--container_content__box___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__box___product-price">
                                        <span className="product-tab--container_content__box___product-price--present">450.000vnd</span>
                                        <span className="product-tab--container_content__box___product-price--old">500.000vnd</span>
                                    </span>
                                    <span className="product-tab--container_content__box___product-sale">
                                        -10%
                                    </span>
                                    <div className="product-tab--container_content__box___product-button">
                                        <button className="product-tab--container_content__box___product-button--card">Thêm Sản Phẩm</button>
                                        <div className="product-tab--container_content__box___product-button--control">
                                            <span className="product-tab--container_content__box___product-button--control_heard"><i className="product-tab--container_content__box___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span className="product-tab--container_content__box___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__box___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                
            </Slider>
        )
    }
}



