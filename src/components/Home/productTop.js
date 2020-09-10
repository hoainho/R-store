import React from "react";
import Slider from "react-slick";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import ProductItem from "./ProductItem";
function productTop(props){
    const products = props.products
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
                                    {
                                            products.map((product,index) => <ProductItem key={index} product={product}/>
                                                // <ProductItem key={index}>{product}</ProductItem>
                                            )
                                        }
                                    </Slider>
                                </Route>
                                <Route path="/tab_best-seller">
                                    <Slider {...settings}   aria-labelledby="nav-best-seller" className=" product-tab--container_content__box tab-pane active ">
                                    {
                                            products.map((product,index) => <ProductItem key={index} product={product}/>
                                                // <ProductItem key={index}>{product}</ProductItem>
                                            )
                                        }   
                                    </Slider>
                                </Route>
                                <Route path="/tab_featured">
                                    <Slider {...settings}   aria-labelledby="nav-featured" className=" product-tab--container_content__box tab-pane  active ">
                                    {
                                            products.map((product,index) => <ProductItem key={index} product={product}/>
                                                // <ProductItem key={index}>{product}</ProductItem>
                                            )
                                        }
                                    </Slider>
                                </Route>
                                <Route path="/tab_hot-sell">
                                    <Slider {...settings}   aria-labelledby="nav-hot-sell" className=" product-tab--container_content__box tab-pane  active ">
                                        {
                                            products.map((product,index) => <ProductItem key={index} product={product}/>
                                                // <ProductItem key={index}>{product}</ProductItem>
                                            )
                                        }
                                    </Slider>
                                </Route>
                            </Switch>
                            
                            
                            
                            
                        </div>
                    </div>
                </Router>
            </div>
        );
    
}
export default productTop;