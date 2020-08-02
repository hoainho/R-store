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
                            </Switch>

                        </div>
                        </Router>
                    </div>
                </div>
        );
    }
}
    