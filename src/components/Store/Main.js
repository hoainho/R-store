import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
import ProductMulti from './ProductMulti';
import ProductSingle from './ProductSingle';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route 
} from "react-router-dom";
export default class Main extends Component {
    constructor(props){
        super(props);
        this.state ={
            product : []
        };
    }
    // componentDidMount(){
    //     callApi('product','GET', null).then(res => {
    //         this.setState({
    //             product : res.data
    //         });
    //     });
    //     console.log(this.state.product);
    // }
    render(){
        return (
            <div className="store">
                <Router>
                    <div className="store-tittle">
                        <div className="store-tittle--container">
                            <Link to="/" className="store-tittle--container_home">Trang Chủ</Link>
                            <span className="store-tittle--container_iconpresent special">
                                {'>'}
                            </span>
                            <span className="store-tittle--container_present special">
                                 Cửa hàng
                            </span>
                        </div>
                    </div>
                    <div className="row store-main">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 store-main--control">
                            <ul className="store-main--control_list">
                                <li className="store-main--control_item">
                                    <input type="checkbox" className="store-main--control_item__checkbox"/>
                                    <span  className="store-main--control_link">
                                        Loại
                                    </span>
                                    <span className="store-main--control_icon"><i className="fas fa-caret-right"></i></span>
                                    <ul className="store-main--control_item__options">
                                        <li className="store-main--control_item__options-item">
                                            <Link to="/" className="store-main--control_item__options-link">
                                                Bàn Phím
                                            </Link>
                                            <span className="store-main--control_item__options-number">(5)</span>
                                        </li>
                                        <li className="store-main--control_item__options-item">
                                            <Link to="/" className="store-main--control_item__options-link">
                                                Chuột
                                            </Link>
                                            <span className="store-main--control_item__options-number">(12)</span>
                                        </li>
                                        <li className="store-main--control_item__options-item">
                                            <Link to="/" className="store-main--control_item__options-link">
                                                Tai Nghe
                                            </Link>
                                            <span className="store-main--control_item__options-number">(7)</span>

                                        </li>
                                        <li className="store-main--control_item__options-item">
                                            <Link to="/" className="store-main--control_item__options-link">
                                                Màn Hình
                                            </Link>
                                            <span className="store-main--control_item__options-number">(8)</span>

                                        </li>
                                    </ul>
                                </li>
                                <li className="store-main--control_item">
                                    <input type="checkbox" className="store-main--control_item__checkbox"/>
                                    <span  className="store-main--control_link">
                                        Thương hiệu
                                    </span>
                                    <span className="store-main--control_icon"><i className="fas fa-caret-right"></i></span>
                                    <ul className="store-main--control_item__options">
                                        <li className="store-main--control_item__options-item">
                                            <Link to="/" className="store-main--control_item__options-link">
                                                Acer
                                            </Link>
                                            <span className="store-main--control_item__options-number">(5)</span>
                                        </li>
                                        <li className="store-main--control_item__options-item">
                                            <Link to="/" className="store-main--control_item__options-link">
                                                Asus
                                            </Link>
                                            <span className="store-main--control_item__options-number">(12)</span>
                                        </li>
                                        <li className="store-main--control_item__options-item">
                                            <Link to="/" className="store-main--control_item__options-link">
                                                Dell
                                            </Link>
                                            <span className="store-main--control_item__options-number">(7)</span>

                                        </li>
                                        <li className="store-main--control_item__options-item">
                                            <Link to="/" className="store-main--control_item__options-link">
                                                Apple
                                            </Link>
                                            <span className="store-main--control_item__options-number">(8)</span>

                                        </li>
                                    </ul>
                                </li>
                                <li className="store-main--control_item">
                                    <input type="checkbox" className="store-main--control_item__checkbox"/>
                                    <span  className="store-main--control_link">
                                        Giá 
                                    </span>
                                    <span className="store-main--control_icon"><i className="fas fa-caret-right"></i></span>
                                    <ul className="store-main--control_item__options">
                                        <li className="store-main--control_item__options-item store-main--control_item__options-item--price">
                                            <div className="store-main--control_item__options-item--container">
                                                <div className="row">
                                                  <div className="col-sm-12">
                                                    <div id="slider-range"></div>
                                                  </div>
                                                </div>
                                                <div className="row slider-labels">
                                                  <div className="col-xs-6 caption">
                                                     <span id="slider-range-value1"></span>
                                                  </div>

                                                    <span className="divider-specail"> - </span>

                                                  <div className="col-xs-6 text-right caption">
                                                     <span id="slider-range-value2"></span>
                                                  </div>
                                                </div>
                                                <div className="row">
                                                  <div className="col-sm-12">
                                                    <form>
                                                      <input type="hidden" name="min-value" value=""/>
                                                      <input type="hidden" name="max-value" value=""/>
                                                    </form>
                                                  </div>
                                                </div>
                                              </div>
                                        </li>
                                        
                                    </ul>
                                </li>
                                <li className="store-main--control_item">
                                    <input type="checkbox" className="store-main--control_item__checkbox"/>
                                    <span  className="store-main--control_link">
                                        Màu sắc 
                                    </span>
                                    <span className="store-main--control_icon"><i className="fas fa-caret-right"></i></span>
                                    <ul className="store-main--control_item__options">
                                        <li className="store-main--control_item__options-item store-main--control_item__options-item--color">
                                            <Link to="/" className=" store-main--control_item__options-link--color store-main--control_item__options-link--color_first" >
                                                
                                            </Link>
                                        </li>
                                        <li className="store-main--control_item__options-item store-main--control_item__options-item--color">
                                            <Link to="/" className=" store-main--control_item__options-link--color store-main--control_item__options-link--color_second" >
                                                
                                            </Link>
                                        </li>
                                        <li className="store-main--control_item__options-item store-main--control_item__options-item--color">
                                            <Link to="/" className=" store-main--control_item__options-link--color store-main--control_item__options-link--color_third" >
                                                
                                            </Link>
                                        </li>
                                        <li className="store-main--control_item__options-item store-main--control_item__options-item--color">
                                            <Link to="/" className=" store-main--control_item__options-link--color store-main--control_item__options-link--color_fourth" >
                                                
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="store-main--control_item">
                                    <input type="checkbox" className="store-main--control_item__checkbox"/>
                                    <span  className="store-main--control_link">
                                        Tình Trạng
                                    </span>
                                    <span className="store-main--control_icon"><i className="fas fa-caret-right"></i></span>
                                    <ul className="store-main--control_item__options">
                                        <li className="store-main--control_item__options-item">
                                            <Link to="/" className="store-main--control_item__options-link">
                                                Mới
                                            </Link>
                                            <span className="store-main--control_item__options-number">(5)</span>
                                        </li>
                                        <li className="store-main--control_item__options-item">
                                            <Link to="/" className="store-main--control_item__options-link">
                                                Đã qua sử dụng
                                            </Link>
                                            <span className="store-main--control_item__options-number">(12)</span>
                                        </li>
                                        <li className="store-main--control_item__options-item">
                                            <Link to="/" className="store-main--control_item__options-link">
                                                Trôi bảo hành
                                            </Link>
                                            <span className="store-main--control_item__options-number">(7)</span>

                                        </li>
                                        
                                    </ul>
                                </li>
                            </ul>
                            <div className="store-main--control_banner">
                                <div className="store-main--control_banner__container">
                                    <Link to="/" className="store-main--control_banner__container-link">
                                        <img src="img/banner_left_2.jpg" alt="banner" className="store-main--control_banner__container-link--pic"/>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 store-main--container">
                            <div className="store-main--container_banner">
                                <img src="./img/HeadphoneAsus1B.png" alt="product-trending" className="store-main--container_banner__pic store-main--container_banner__pic-bg"/>
                                <img src="./img/bgwraper2.png" alt="background" className="store-main--container_banner__pic store-main--container_banner__pic-product"/>
                                <div className="store-main--container_banner__content">
                                    <h5 className="store-main--container_banner__content-slogan">
                                        Thịnh Hành
                                    </h5>
                                    <h2 className="store-main--container_banner__content-name">
                                        Asus Strix 2.0
                                    </h2>
                                    <p className="store-main--container_banner__content-introduce">
                                        Thiết kế siêu ngầu,Tai nghe Asus Strix 2.0 Gaming Headset là sản phầm cao cấp của asus với chất lượng âm thanh vòm 7.1 mang lại âm thanh chân thực, sống động. 
                                    </p>
                                    <button className="store-main--container_banner__content-buy">Đặt hàng ngay</button>
                                </div>
                            </div>
                            <div className="store-main--container_menu">
                                <div className="store-main--container_menu-options">
                                    <ul className="nav store-main--container_menu-options--list" >
                                        <li id="tab-item " className="nav-item store-main--container_menu-options--list_item active">
                                          <Link exact to="/Store" className="nav-link active  store-main--container_menu-options--list_link store-main--container_menu-options--list_multi "></Link>
                                           
                                        </li>
                                        <li id="tab-item " className="nav-item store-main--container_menu-options--list_item">
                                          <Link to="/Product-Single" className="nav-link store-main--container_menu-options--list_link store-main--container_menu-options--list_single"></Link>
                                        </li>
                                        
                                    </ul>
                                    <div className="store-main--container_menu-options--rating">
                                        <div className="form-group store-main--container_menu-options--rating_box">
                                            <select className="custom-select form-group store-main--container_menu-options--rating_box__container">
                                                <option className=" form-group store-main--container_menu-options--rating_box__container-selected" value="hide" selected>Ưa Thích</option>
                                                <option className=" form-group store-main--container_menu-options--rating_box__container-selected" value="1">&#128972;</option>
                                                <option className=" form-group store-main--container_menu-options--rating_box__container-selected" value="2">&#128972; &#128972;</option>
                                                <option className=" form-group store-main--container_menu-options--rating_box__container-selected" value="3">&#128972; &#128972; &#128972;</option>
                                                <option className=" form-group store-main--container_menu-options--rating_box__container-selected" value="4">&#128972; &#128972; &#128972; &#128972;</option>
                                                <option className=" form-group store-main--container_menu-options--rating_box__container-selected" value="5">&#128972; &#128972; &#128972; &#128972; &#128972;</option>
                                            </select>
                                            
                                        </div>
                                    </div>
                                    <div className="store-main--container_menu-options--sort">
                                        <div className="form-group store-main--container_menu-options--sort_box">
                                            <select  id="mySelect" data-show-content="true"  className="custom-select form-group store-main--container_menu-options--sort_box__container">
                                                <option className=" form-group store-main--container_menu-options--sort_box__container-selected" value="hide" selected>Sắp Xếp</option>
                                                <option className=" form-group store-main--container_menu-options--sort_box__container-selected"> A &#129185; Z</option>
                                                <option className=" form-group store-main--container_menu-options--sort_box__container-selected"> Z &#129185; A</option>
                                                <option className=" form-group store-main--container_menu-options--sort_box__container-selected"> &#8679; Giá</option>
                                                <option className=" form-group store-main--container_menu-options--sort_box__container-selected"> &#8681; Giá</option>

                                            </select>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content store-main--container_storage">
                                <Switch>
                                    <Route exact path="/store">
                                        <div id="tab_multi" className="store-main--container_content tab-pane active ">
                                           <div className="store-main--container_content__box">
                                            <ProductMulti />
                                            <ProductMulti />
                                            <ProductMulti />
                                            <ProductMulti />
                                            <ProductMulti />
                                            <ProductMulti />
                                           </div>
                                </div>
                                    </Route>
                                    <Route path="/Product-Single">
                                        <div className="store-main--container_content tab-pane active">
                                            <ProductSingle />
                                            <ProductSingle />
                                            <ProductSingle />
                                        </div>
                                    </Route>
                                </Switch>
                               
                                
                            </div>
						</div>
                    </div>
                </Router>
            </div>
                
        );
    }
}