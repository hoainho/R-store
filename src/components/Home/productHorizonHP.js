import React, { Component } from "react";
import Slider from "react-slick";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProductItem from './ProductItem';
export default class ProductHorizon extends Component {
  render() {
    const settings = 
    {   
        dots: false,
        accessibility:true,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay:true,
        autoplaySpeed: 3000,
        centerMode:true,  
        initialSlide: 3,
        lazyLoad:'ondemand',
        pauseOnHover:true,
        swipe:true,
        touchMove:true,
        useCSS:true,
        useCSS3:true, 
        useTransform:true,
    };
        return (
            // <!-- PRODUCT-CATEGORY-TABS  -->
                <div class="product-tab product-tab--category">
                    <div class="product-tab--container">
                        <Router>
                            <div class="product-tab--container_tittle-category">
                                <ul   id="nav-tab" class="product-tab--container_tittle-category__list nav nav-tabs">
                                    <h4 class="product-tab--container_tittle-category__tittle-headphone">Tai nghe</h4>
                                    <li   class="product-tab--container_tittle-category__item  nav-item">
                                        <Link exact to="/" class="product-tab--container_tittle-category__link  nav-link ">Asus</Link>
                                    </li>
                                    
                                    <li   class="product-tab--container_tittle-category__item  nav-item">
                                        <Link to="/tab_acer"  class="product-tab--container_tittle-category__link  nav-link ">Acer</Link>
                                    </li>
                                    
                                    <li   class="product-tab--container_tittle-category__item  nav-item">
                                        <Link to="/tab_logitech" class="product-tab--container_tittle-category__link  nav-link ">Logitech</Link>
                                    </li>
                                    
                                    <li   class="product-tab--container_tittle-category__item  nav-item">
                                        <Link to="/tab_sony" class="product-tab--container_tittle-category__link  nav-link ">Sony</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-tab--container_content product-tab--container_content-category ">
                            <Switch>
                                <Route exact path="/">
                                    <Slider { ...settings } class="product-tab--container_content__category tab-pane active">
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
                                <Route path="/tab_acer">
                                    <Slider { ...settings }  class=" product-tab--container_content__category  tab-pane active">
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
                                <Route path="/tab_logitech">
                                    <Slider { ...settings }  class=" product-tab--container_content__category  tab-pane active ">
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
                                <Route path="/tab_sony">
                                    <Slider { ...settings }  class="product-tab--container_content__category  tab-pane active ">
                                <div class="product-tab--container_content__category___product">
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/product-headphoneB.png" alt=""/>
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/product-headphoneA.jpg" alt=""/>
                                    <span class="product-tab--container_content__category___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__category___product-name">Tai nghe Asus AF298</h4>
                                    <span class="product-tab--container_content__category___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__category___product-price">
                                        <span class="product-tab--container_content__category___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__category___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__category___product-button">
                                        <button class="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__category___product-button--control">
                                            <span class="product-tab--container_content__category___product-button--control_heard"><i class="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__category___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div>  
                                <div class="product-tab--container_content__category___product">
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/headphone2A.png" alt="taingheV"/>
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/headphone2B.jpg" alt="taingheV"/>
                                    <span class="product-tab--container_content__category___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__category___product-name"> Tai nghe Rapoo VH510 Gaming</h4>
                                    <span class="product-tab--container_content__category___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__category___product-price">
                                        <span class="product-tab--container_content__category___product-price--present">410.000vnd</span>
                                        <span class="product-tab--container_content__category___product-price--old">900.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__category___product-button">
                                        <button class="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__category___product-button--control">
                                            <span class="product-tab--container_content__category___product-button--control_heard"><i class="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__category___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__category___product">
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/keyboard1A.png" alt="keyboard"/>
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/keyboard1B.png" alt="keyboard"/>
                                    <span class="product-tab--container_content__category___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__category___product-name">Bàn Phím MSI A2G</h4>
                                    <span class="product-tab--container_content__category___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__category___product-price">
                                        <span class="product-tab--container_content__category___product-price--present">750.000vnd</span>
                                        <span class="product-tab--container_content__category___product-price--old">675.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__category___product-button">
                                        <button class="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__category___product-button--control">
                                            <span class="product-tab--container_content__category___product-button--control_heard"><i class="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__category___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__category___product">
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/keyboard2A.png" alt="keyboard2A"/>
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/keyboard2B.png" alt="keyboard2B"/>
                                    <span class="product-tab--container_content__category___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__category___product-name">Bàn Phím Luxury B2A93 </h4>
                                    <span class="product-tab--container_content__category___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__category___product-price">
                                        <span class="product-tab--container_content__category___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__category___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__category___product-button">
                                        <button class="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__category___product-button--control">
                                            <span class="product-tab--container_content__category___product-button--control_heard"><i class="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__category___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__category___product">
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/mouse1A.png" alt=""/>
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/mouse1B.png" alt=""/>
                                    <span class="product-tab--container_content__category___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__category___product-name">Chuột Gaming A2F66</h4>
                                    <span class="product-tab--container_content__category___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__category___product-price">
                                        <span class="product-tab--container_content__category___product-price--present">405.000vnd</span>
                                        <span class="product-tab--container_content__category___product-price--old">450.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__category___product-button">
                                        <button class="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__category___product-button--control">
                                            <span class="product-tab--container_content__category___product-button--control_heard"><i class="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__category___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__category___product">
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/mouse2A.png" alt=""/>
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/mouse2B.png" alt=""/>
                                    <span class="product-tab--container_content__category___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__category___product-name">Chuột Gaming 9SAK</h4>
                                    <span class="product-tab--container_content__category___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__category___product-price">
                                        <span class="product-tab--container_content__category___product-price--present">1.080.000vnd</span>
                                        <span class="product-tab--container_content__category___product-price--old">1.200.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__category___product-button">
                                        <button class="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__category___product-button--control">
                                            <span class="product-tab--container_content__category___product-button--control_heard"><i class="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__category___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__category___product">
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/Razer1A.png" alt=""/>
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/Razer1B.png" alt=""/>
                                    <span class="product-tab--container_content__category___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__category___product-name">Lót Chuột Razer</h4>
                                    <span class="product-tab--container_content__category___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__category___product-price">
                                        <span class="product-tab--container_content__category___product-price--present">90.000vnd</span>
                                        <span class="product-tab--container_content__category___product-price--old">100.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__category___product-button">
                                        <button class="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__category___product-button--control">
                                            <span class="product-tab--container_content__category___product-button--control_heard"><i class="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__category___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__category___product">
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/Razer2A.png" alt="Razer2A"/>
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/Razer2B.jpg" alt="Razer2A"/>
                                    <span class="product-tab--container_content__category___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__category___product-name">Lót Chuột Gaming </h4>
                                    <span class="product-tab--container_content__category___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__category___product-price">
                                        <span class="product-tab--container_content__category___product-price--present">150.000vnd</span>
                                        <span class="product-tab--container_content__category___product-price--old">135.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__category___product-button">
                                        <button class="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__category___product-button--control">
                                            <span class="product-tab--container_content__category___product-button--control_heard"><i class="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__category___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                                <div class="product-tab--container_content__category___product">
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/usb1A.png" alt="usb"/>
                                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/usb1B.jpg" alt="usb"/>
                                    <span class="product-tab--container_content__category___product-details"><a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i class="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 class="product-tab--container_content__category___product-name">USB Gaming 128GB</h4>
                                    <span class="product-tab--container_content__category___product-vote">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="product-tab--container_content__category___product-price">
                                        <span class="product-tab--container_content__category___product-price--present">450.000vnd</span>
                                        <span class="product-tab--container_content__category___product-price--old">500.000vnd</span>
                                    </span>
                                    <span class="product-tab--container_content__category___product-sale">
                                        -10%
                                    </span>
                                    <div class="product-tab--container_content__category___product-button">
                                        <button class="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                                        <div class="product-tab--container_content__category___product-button--control">
                                            <span class="product-tab--container_content__category___product-button--control_heard"><i class="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                                            <span class="product-tab--container_content__category___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                                        </div>
                                    </div>
                                </div> 
                            </Slider>
                                </Route>
                            </Switch>

                        </div>
                        </Router>
                    </div>
                </div>
        );
    }
}
    