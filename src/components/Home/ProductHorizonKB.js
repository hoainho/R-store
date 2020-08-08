import React , { Component } from "react";
import Slider from "react-slick";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProductItem from './ProductItem';
class ProductHorizonKB extends Component {
    render(){
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
            <div className="product-tab product-tab--categoryKB">
                <Router>
                    <div className="product-tab--container">
                        <div className="product-tab--container_tittle-category  product-tab--container_tittle-category-KB">
                                <ul id="nav-tab" className="product-tab--container_tittle-category__list nav nav-tabs">
                                    <h4 className="product-tab--container_tittle-category__tittle-keyboard">Bàn Phím</h4>
                                    <li  className="product-tab--container_tittle-category__item active-tab--item nav-item">
                                        <Link to="/" className="product-tab--container_tittle-category__link  nav-link ">Asus</Link>
                                    </li>
                                    
                                    <li  className="product-tab--container_tittle-category__item active-tab--item nav-item">
                                        <Link to="/tab_KBacer" className="product-tab--container_tittle-category__link  nav-link ">Acer</Link>
                                    </li>
                                    
                                    <li  className="product-tab--container_tittle-category__item active-tab--item nav-item">
                                        <Link to="/tab_KBlogitech"className="product-tab--container_tittle-category__link  nav-link ">Logitech</Link>
                                    </li>
                                    
                                    <li  className="product-tab--container_tittle-category__item active-tab--item nav-item">
                                        <Link to="/tab_KBsony"className="product-tab--container_tittle-category__link  nav-link ">Sony</Link>
                                    </li>
                                </ul>
                            </div>
                        <div className="product-tab--container_content product-tab--container_content-category product-tab--container_content-category-KB tab-content">
                            <Switch> 
                                <Route exact path="/">
                                    <Slider {...settings}  className="product-tab--container_content__category product-tab--container_content__category tab-pane active">
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
                                <Route path="/tab_KBacer">
                                    <Slider {...settings}  className=" product-tab--container_content__category product-tab--container_content__category tab-pane  active">
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
                                <Route path="/tab_KBlogitech">
                                    <Slider {...settings}  className=" product-tab--container_content__category product-tab--container_content__category tab-pane  active">
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
                                <Route path="/tab_KBsony">
                                    <Slider {...settings}  className="product-tab--container_content__category product-tab--container_content__category tab-pane  active">
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
                    </div>
                </Router>
            </div> 
        );
    }
}
export default ProductHorizonKB;