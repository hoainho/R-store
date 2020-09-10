import React from "react";
import Slider from "react-slick";
import ProductItem from './ProductItem';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function ProductHorizonSC (props) {
    
    const products = props.products
        // var products = [];
        const settings = {
            dots: false,
            accessibility:true,
            slidesToShow: 4,
            slidesToScroll: 3,
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
                        <Router>
                            <div className="product-tab--container_tittle-category  product-tab--container_tittle-category-SC">
                                <ul  className="product-tab--container_tittle-category__list nav nav-tabs">
                                    <h4 className="product-tab--container_tittle-category__tittle-keyboard">Màn Hình</h4>
                                    <li  className="product-tab--container_tittle-category__item nav-item">
                                        <Link to="/" className="product-tab--container_tittle-category__link  nav-link ">Asus</Link>
                                    </li>
                                    
                                    <li  className="product-tab--container_tittle-category__item nav-item">
                                        <Link to="/tab_screenacer"className="product-tab--container_tittle-category__link  nav-link ">Acer</Link>
                                    </li>
                                    
                                    <li  className="product-tab--container_tittle-category__item nav-item">
                                        <Link to="/tab_screenlogitech" className="product-tab--container_tittle-category__link  nav-link ">Logitech</Link>
                                    </li>
                                    
                                    <li  className="product-tab--container_tittle-category__item nav-item">
                                        <Link to="/tab_screensony" className="product-tab--container_tittle-category__link  nav-link ">Sony</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-tab--container_content product-tab--container_content-category product-tab--container_content-category-SC tab-content">
                            <Switch>
                                <Route exact path="/">
                                    <Slider {...settings}  className=" product-tab--container_content__category tab-pane active">
                                        {
                                            products.map((product,index) => <ProductItem key={index} product={product}/>
                                                // <ProductItem key={index}>{product}</ProductItem>
                                            )
                                        }
                                    </Slider>
                                </Route>   
                                <Route path="/tab_screenacer">   
                                    <Slider {...settings}   className="  product-tab--container_content__category tab-pane active ">
                                        {
                                            products.map((product,index) => <ProductItem key={index} product={product}/>
                                                // <ProductItem key={index}>{product}</ProductItem>
                                            )
                                        }
                                        
                                   </Slider>
                                </Route>    
                                <Route path="/tab_screenlogitech">    
                                    <Slider {...settings}   className=" product-tab--container_content__category tab-pane active ">
                                        {
                                            products.map((product,index) => <ProductItem key={index} product={product}/>
                                                // <ProductItem key={index}>{product}</ProductItem>
                                            )
                                        }
                                        
                                    </Slider>
                                </Route>       
                                <Route path="/tab_screensony">   
                                    <Slider {...settings}   className=" product-tab--container_content__category tab-pane active ">
                                        {
                                            products.map((product,index) => <ProductItem key={index} product={product}/>
                                                // <ProductItem key={index}>{product}</ProductItem>
                                            )
                                        }
                                
                                    </Slider>
                                </Route>
                            </Switch>
                        </div>
                        </Router>
                    </div>
                </div>
        );
    }

export default ProductHorizonSC;