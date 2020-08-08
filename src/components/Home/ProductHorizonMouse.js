import React, { Component } from "react";
import Slider from "react-slick";
import ProductItem from './ProductItem';
import  { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link }from "react-router-dom";
class ProductHorizonMouse extends Component {
    render() {
        const settings = {
            dots: false,
            accessibility: true,
            slidesToShow: 4,
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
            // <!-- PRODUCT-CATEGORY-TABS -- Mouse -->
                <div className="product-tab product-tab--category product-tab product-tab--categoryMouse">
                    <div className="product-tab--container">
                        <Router>
                            <div className="product-tab--container_tittle-category product-tab--container_tittle-category-mouse">
                                <ul className="product-tab--container_tittle-category__list nav nav-tabs">
                                    <h4 className="product-tab--container_tittle-category__tittle-headphone product-tab--container_tittle-category__tittle-headphone-mouse">Chuôt</h4>
                                    <li  className="product-tab--container_tittle-category__item product-tab--container_tittle-category__item">
                                        <Link to="/" className="product-tab--container_tittle-category__link  nav-link ">Asus</Link>
                                    </li>
                                    
                                    <li  className="product-tab--container_tittle-category__item product-tab--container_tittle-category__item-mouse">
                                        <Link to="/tab_mousracer" className="product-tab--container_tittle-category__link  nav-link ">Acer</Link>
                                    </li>
                                    
                                    <li  className="product-tab--container_tittle-category__item product-tab--container_tittle-category__item-mouse">
                                        <Link to="/tab_mouselogitech" className="product-tab--container_tittle-category__link  nav-link ">Logitech</Link>
                                    </li>
                                    
                                    <li  className="product-tab--container_tittle-category__item product-tab--container_tittle-category__item-mouse">
                                        <Link to="/tab_mousesony" className="product-tab--container_tittle-category__link  nav-link ">Sony</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-tab--container_content product-tab--container_content-category tab-content">
                                <Switch>
                                <Route exact  path="/"> 
                                    <Slider {...settings} className="product-tab--container_content__category product-tab--container_content__category tab-pane  active">
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                    </Slider>
                                </Route>    
                                <Route path="/tab_mousracer"> 
                                    <Slider {...settings}   className=" product-tab--container_content__category product-tab--container_content__category tab-pane  active">
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                    </Slider>
                                </Route>      
                                <Route path="/tab_mouselogitech">    
                                    <Slider {...settings}  className=" product-tab--container_content__category product-tab--container_content__category tab-pane  active">
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                    </Slider>
                                </Route>       
                                <Route path="/tab_mousesony">    
                                    <Slider>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
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
export default ProductHorizonMouse;