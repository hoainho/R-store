import React, { useState, useEffect} from "react";
import Axios from 'axios';
import Slider from "react-slick";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProductItem from './ProductItem';
export default function ProductHorizonHP(props) {
    
    const products = props.products

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
                <div className="product-tab product-tab--category">
                    <div className="product-tab--container">
                        <Router>
                            <div className="product-tab--container_tittle-category">
                                <ul   id="nav-tab" className="product-tab--container_tittle-category__list nav nav-tabs">
                                    <h4 className="product-tab--container_tittle-category__tittle-headphone">Tai nghe</h4>
                                    <li   className="product-tab--container_tittle-category__item  nav-item">
                                        <Link to="/" className="product-tab--container_tittle-category__link  nav-link ">Asus</Link>
                                    </li>
                                    
                                    <li   className="product-tab--container_tittle-category__item  nav-item">
                                        <Link to="/tab_acer"  className="product-tab--container_tittle-category__link  nav-link ">Acer</Link>
                                    </li>
                                    
                                    <li   className="product-tab--container_tittle-category__item  nav-item">
                                        <Link to="/tab_logitech" className="product-tab--container_tittle-category__link  nav-link ">Logitech</Link>
                                    </li>
                                    
                                    <li   className="product-tab--container_tittle-category__item  nav-item">
                                        <Link to="/tab_sony" className="product-tab--container_tittle-category__link  nav-link ">Sony</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-tab--container_content product-tab--container_content-category tab-content product-tab--container_content-category product-tab--container_content-category-KB">
                            <Switch>   
                                <Route exact path="/">
                                    <Slider { ...settings } className="product-tab--container_content__category tab-pane active">
                                        {
                                            products.map((product,index) => <ProductItem key={index} product={product}/>
                                                // <ProductItem key={index}>{product}</ProductItem>
                                            )
                                        }
                                    </Slider>  
                                </Route> 
                                <Route path="/tab_acer">
                                    <Slider { ...settings }  className=" product-tab--container_content__category  tab-pane active">
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
                                    <Slider { ...settings }  className=" product-tab--container_content__category  tab-pane active ">
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
                                    <Slider { ...settings }  className="product-tab--container_content__category  tab-pane active ">
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

    