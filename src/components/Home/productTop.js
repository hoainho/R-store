import React, { Component } from "react";
import Slider from "react-slick";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import ProductItem from "./ProductItem";
class productTop extends Component {
    render() {
        const settings = {
            dots: false,
            accessibility: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
            initialSlide: 1,
            lazyLoad: 'ondemand',
            pauseOnHover: true,
            swipe: true,
            touchMove: true,
            useCSS: true,
            useCSS3: true,
            useTransform: true,
        };
        return (
            // <!-- PRODUCT-TAB  -->
            <div className="product-tab">
                <Router >
                    <div className="product-tab--container product-tab--container_hero">
                        <div className="product-tab--container_tittle ">
                            <ul className="product-tab--container_tittle__list nav nav-tabs">
                                <li id="tab-item " className="product-tab--container_tittle__item nav-item">
                                    <NavLink exact  to="/" className="product-tab--container_tittle__link  nav-link" >Hàng mới về</NavLink>
                                </li>

                                <li id="tab-item " className="product-tab--container_tittle__item nav-item">
                                    <NavLink to="/tab_best-seller" className="product-tab--container_tittle__link  nav-link  ">Bán chạy</NavLink>
                                </li>

                                <li id="tab-item " className="product-tab--container_tittle__item nav-item">
                                    <NavLink to="/tab_featured" className="product-tab--container_tittle__link  nav-link ">Đề xuất</NavLink>
                                </li>

                                <li id="tab-item " className="product-tab--container_tittle__item nav-item">
                                    <NavLink to="/tab_hot-sell" className="product-tab--container_tittle__link  nav-link ">Giảm giá</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div id="nav-tabContent" className="product-tab--container_content tab-content ">
                            <Switch>
                                <Route exact path="/">
                                    <Slider { ...settings } aria-labelledby="nav-new-arrival"   className=" product-tab--container_content__box tab-pane active">
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                    </Slider>
                                </Route>
                                <Route path="/tab_best-seller">
                                    <Slider {...settings}   aria-labelledby="nav-best-seller" className=" product-tab--container_content__box tab-pane active ">
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />     
                                    </Slider>
                                </Route>
                                <Route path="/tab_featured">
                                    <Slider {...settings}   aria-labelledby="nav-featured" className=" product-tab--container_content__box tab-pane  active ">
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                    </Slider>
                                </Route>
                                <Route path="/tab_hot-sell">
                                    <Slider {...settings}   aria-labelledby="nav-hot-sell" className=" product-tab--container_content__box tab-pane  active ">
                                <div className="product-tab--container_content__box___product">
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/product-headphoneB.png" alt="" />
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/product-headphoneA.jpg" alt="" />
                                    <span className="product-tab--container_content__box___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                        <i className="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                    </a></span>
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
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/headphone2A.png" alt="taingheV" />
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/headphone2B.jpg" alt="taingheV" />
                                    <span className="product-tab--container_content__box___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                        <i className="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                    </a></span>
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
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/keyboard1A.png" alt="keyboard" />
                                    <img className="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/keyboard1B.png" alt="keyboard" />
                                    <span className="product-tab--container_content__box___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                        <i className="fas fa-arrows-alt product-tab--container_content__box___product-details--icon"></i>
                                    </a></span>
                                    <h4 className="product-tab--container_content__box___product-name">Bàn Phím MSI A2G</h4>
                                    <span className="product-tab--container_content__box___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
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
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/keyboard2A.png" alt="keyboard2A" />
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/keyboard2B.png" alt="keyboard2B" />
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
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/mouse1A.png" alt="" />
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/mouse1B.png" alt="" />
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
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/mouse2A.png" alt="" />
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/mouse2B.png" alt="" />
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
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/Razer1A.png" alt="" />
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/Razer1B.png" alt="" />
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
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/Razer2A.png" alt="Razer2A" />
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/Razer2B.jpg" alt="Razer2A" />
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
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--B" src="/img/usb1A.png" alt="usb" />
                                    <img class="product-tab--container_content__box___product-pic product-tab--container_content__box___product-pic--A" src="/img/usb1B.jpg" alt="usb" />
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
                                </Route>
                            </Switch>
                            
                            
                            
                            
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}
export default productTop;