import React,{Component} from 'react';
import { Link } from "react-router-dom";
import CartMini from './Features/CartMini';
class navbar extends Component {
    render(){
        return (
            <div>
                <div className="navbar-hidden" >
                    <div className="navbar-hidden--content">
                            <div className="row navbar-hidden--content_container">
                                {/* <!-- LOGO --> */}
                                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 navbar-hidden--content_container__logo">
                                    <div className="logo navbar-hidden--content_container__logo-box">
                                        <span className="logo-letter navbar-content--header_main__features___logo-box--logo navbar-hidden--content_container__logo-box--logo" data-letter="ℜ">ℜ</span>
                                        <span className="navbar-hidden--content_container__logo-box--sublogo">Store</span>
                                    </div>
                                </div>
                                {/* <!-- MENU --> */}
                                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 navbar-hidden--content_container__menu">
                                    <div className="row navbar-content--menu__container navbar-hidden--content_container__menu-box">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 navbar-hidden--content_container__menu-box--toggle">
                                            <div className="navbar-content--menu_menutoggle__container ">
                                                <h4 id="btnmenutoggle" className="navbar-hidden--content_container__menu-box--toggle_button">Nổi Bật <i className="navbar-hidden--content_container__menu-box--toggle_button__icon far fa-list-alt"></i></h4>
                                                
                                                <input type="checkbox" className="navbar-content--menu_menutoggle__container-checkbox navbar-hidden--content_container__menu-box--toggle_checkbox"/>
        
                                                <ul id="menutoggle" className="navbar-content--menu_menutoggle__container___list navbar-hidden--content_container__menu-box--toggle_list">
                                                    <li className="navbar-content--menu_menutoggle__container___item"><Link className="navbar-content--menu_menutoggle__container___link" to="/">Top 10</Link> </li>
                                                    <li className="navbar-content--menu_menutoggle__container___item"><Link className="navbar-content--menu_menutoggle__container___link" to="/">Sản phẩm bán chạy</Link> </li>
                                                    <li className="navbar-content--menu_menutoggle__container___item"><Link className="navbar-content--menu_menutoggle__container___link" to="/">Điện Thoại</Link> </li>
                                                    <li className="navbar-content--menu_menutoggle__container___item"><Link className="navbar-content--menu_menutoggle__container___link" to="/">Máy Tính</Link> </li>
                                                    <li className="navbar-content--menu_menutoggle__container___item"><Link className="navbar-content--menu_menutoggle__container___link" to="/">Chuột</Link> </li>
                                                    <li className="navbar-content--menu_menutoggle__container___item"><Link className="navbar-content--menu_menutoggle__container___link" to="/">Bàn Phím</Link> </li>
                                                    <li className="navbar-content--menu_menutoggle__container___item"><Link className="navbar-content--menu_menutoggle__container___link" to="/">Phụ Kiện Khác</Link> </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 navbar-hidden--content_container__menu-box--navbar">
                                            <div className="navbar-content--menu_menuNavbar__sticky navbar-hidden--content_container__menu-box--navbar_sticky">
                                                <ul className="navbar-hidden--content_container__menu-box--navbar_list nav nav-tabs "  >
                                                    <li className="navbar-hidden--content_container__menu-box--navbar_item">
                                                        <Link className="navbar-content--menu_menuNavbar__sticky___link nav-link active" to="/" > Trang Chủ</Link>
                                                    </li>
                                                    <li className="navbar-hidden--content_container__menu-box--navbar_item ">
                                                        <Link className="navbar-content--menu_menuNavbar__sticky___link nav-link"      to="/store" > Cửa Hàng</Link> 
                                                    </li>
                                                    <li className="navbar-hidden--content_container__menu-box--navbar_item navbar-content--menu_menuNavbar__sticky___itemFeatures ">
                                                        <Link className="navbar-content--menu_menuNavbar__sticky___link nav-link"         to="/featured" > Chức Năng</Link> 
                                                        <ul className="navbar-content--menu_menuNavbar__sticky___item-features navbar-hidden--content_container__menu-box--navbar_item__features">
                                                            <li className="navbar-content--menu_menuNavbar__sticky___item-features--item"><Link className="navbar-content--menu_menuNavbar__sticky___item-features--link" to="/">Loại</Link>
                                                                <ul className="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype navbar-hidden--content_container__menu-box--navbar_item__features-type">
                                                                    <li className="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-item">
                                                                        <Link to="/" className="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-link">
                                                                            Sản Phẩm Cấu Hình
                                                                        </Link>
                                                                    </li>
                                                                    <li className="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-item">
                                                                        <Link to="/" className="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-link">
                                                                            Sản Phẩm Combo
                                                                        </Link>
                                                                    </li>
                                                                    <li className="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-item">
                                                                        <Link to="/" className="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-link">
                                                                            Phần mềm
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="navbar-content--menu_menuNavbar__sticky___item-features--item"><Link className="navbar-content--menu_menuNavbar__sticky___item-features--link" to="/">Sắp Xếp</Link>
                                                                <ul className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct navbar-hidden--content_container__menu-box--navbar_item__features-sort">
                                                                    <li className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-item">
                                                                        <Link className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-link" to="/"> Đánh giá </Link>
                                                                    </li>
                                                                    <li className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-item">
                                                                        <Link className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-link" to="/"> Lượt mua </Link>
                                                                    </li>
                                                                    <li className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-item">
                                                                        <Link className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-link" to="/"> Giảm giá </Link>
                                                                    </li>
                                                                    <li className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-item">
                                                                        <Link className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-link" to="/"> Miễn Phí giao hàng </Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="navbar-content--menu_menuNavbar__sticky___item-features--item"><Link className="navbar-content--menu_menuNavbar__sticky___item-features--link" to="/">Thương Hiệu </Link></li>
        
                                                        </ul>
                                                    </li>
                                                    <li className="navbar-hidden--content_container__menu-box--navbar_item ">
                                                        <Link className="navbar-content--menu_menuNavbar__sticky___link nav-link"      to="/news" > Tin Tức</Link> 
                                                    </li>
                                                    <li className="navbar-hidden--content_container__menu-box--navbar_item ">
                                                        <Link className="navbar-content--menu_menuNavbar__sticky___link nav-link"      to="/About" > Thông tin</Link> 
                                                    </li>
                                                    <li className="navbar-hidden--content_container__menu-box--navbar_item ">
                                                        <Link className="navbar-content--menu_menuNavbar__sticky___link nav-link"      to="/contact" > Liên Hệ</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 navbar-hidden--content_container__menu-box--contact">
                                        <div className="navbar-hidden--content_container__menu-box--contact_container">
                                            <span className="navbar-hidden--content_container__menu-box--contact_container__icon"><i className="fas fa-phone-volume animate_shakeX"></i></span>
                                            <span className="navbar-hidden--content_container__menu-box--contact_container__content">(+84) 912 521 560 - (+84) 9 0115 0222</span>
                                        </div>
                                        </div>
                                </div> 
                                </div>
                                {/* <!-- CART --> */}
                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 navbar-hidden--content_container__cart">
                                    <div  className="navbar-content--header_main__features___control-cart  navbar-hidden--content_container__cart___box">
                                        <div data-toggle="modal" data-target="#exampleModalScrollable"   className="navbar-content--header_main__features___control-cart--icon navbar-hidden--content_container__cart___box-icon">
                                            <i className="fas fa-cart-plus navbar-content--header_main__features___control-cart--icon_details"></i>
                                            <span className="navbar-content--header_main__features___control-cart--icon_numbers">
                                                1
                                            </span>
                                        </div>
                                        <Link to="/Storage" className="navbar-content--header_main__features___control-cart--name navbar-hidden--content_container__cart___box-name">
                                            <span className="navbar-content--header_main__features___control-cart--name_details navbar-hidden--content_container__cart___box-name--details">
                                                Giỏ hàng:
                                            </span>
                                            <span className="navbar-content--header_main__features___control-cart--name_total navbar-hidden--content_container__cart___box-name--total">
                                                1.800.000VND
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                
                            </div>
                    </div>

                </div>
                <div className="navbar" id="navbar">
                <div className="navbar-content">
                    <div className="navbar-content--top">
                        <div className="navbar-content--top_features">
                                <div className="row navbar-content--top_features__row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 navbar-content--top_features__row___left">
                                        <div className="navbar-content--top_features__row___left-content"> Chuyển phát nhanh và hoàn trả miễn phí trong vòng 30 ngày</div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 navbar-content--top_features__row___right">
                                        <div className="navbar-content--top_features__row___right-content">
                                            <div className="dropdown navbar-content--top_features__row___right-content--language" >
                                                <div id="dropdownMenuButton" className="dropdown-toggle navbar-content--top_features__row___right-content--language_btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ngôn ngữ</div>
                                                <ul  className="dropdown-menu navbar-content--top_features__row___right-content--language_list" aria-labelledby="dropdownMenuButton">
                                                    <li className="dropdown-item navbar-content--top_features__row___right-content--language_link"> <Link className="dropdown-item navbar-content--top_features__row___right-content--language_item" to="/"><strong>ENG</strong></Link></li>
                                                    <li className="dropdown-item navbar-content--top_features__row___right-content--language_link"> <Link className="dropdown-item navbar-content--top_features__row___right-content--language_item" to="/"><strong>VN</strong></Link></li>
                                                </ul>
                                            </div>
                                            <div className="navbar-content--top_features__row___right-content--info">
                                                <ul className="navbar-content--top_features__row___right-content--info_list">
                                                    <li className="navbar-content--top_features__row___right-content--info_item">
                                                        <Link to="/Login" className="navbar-content--top_features__row___right-content--info_link">
                                                            Tài khoản
                                                        </Link>
                                                    </li>
                                                    <li className="navbar-content--top_features__row___right-content--info_item">
                                                        <Link to="/" className="navbar-content--top_features__row___right-content--info_link">
                                                             Yêu Thích
                                                        </Link>
                                                    </li>
                                                    <li className="navbar-content--top_features__row___right-content--info_item">
                                                        <Link to="/" className="navbar-content--top_features__row___right-content--info_link">
                                                            So Sánh
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
    
                                            
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-content--header">
                            <div className="navbar-content--header_main">
                                <div className="row navbar-content--header_main__features">
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 row navbar-content--header_main__features___logo">
                                        <div className="logo navbar-content--header_main__features___logo-box">
                                            <span className="logo-letter navbar-content--header_main__features___logo-box--logo" data-letter="ℜ">ℜ</span>
                                            <span className="navbar-content--header_main__features___logo-box--sublogo">Store</span>
                                        </div>
                                    </div>
                                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 row navbar-content--header_main__features___control">
                                        <div className="navbar-content--header_main__features___control-search">
                                            <form action="" method="get" id="mini-search" className="navbar-content--header_main__features___control-search--box">
                                                    
                                                    <div className="navbar-content--header_main__features___control-search--box_select" id="select-box">
                                                            <input type="checkbox" id="options-view-button"/>
                                                            <div id="select-button" className="brd">
                                                                    <div id="selected-value">
                                                                        <span>Tất Cả</span>
                                                                    </div>
                                                                    <div id="chevrons">
                                                                            <i className="fas fa-chevron-up"></i>
                                                                            <i className="fas fa-chevron-down"></i>
                                                                    </div>
                                                            </div>
                                                            <div id="options" >
                                                                    <div className="option">
                                                                            <input className="s-c top" type="radio" name="platform" value="codepen"/>
                                                                            <input className="s-c bottom" type="radio" name="platform" value="codepen"/>
                                                                            <i className="fas fa-laptop-house option-icon"></i>
                                                                            <span className="label">Tất Cả</span>
                                                                            <span className="opt-val">Tất Cả</span>
                                                                    </div>
                                                                    <div className="option">
                                                                            <input className="s-c top" type="radio" name="platform" value="dribbble"/>
                                                                            <input className="s-c bottom" type="radio" name="platform" value="dribbble"/>
                                                                            <i className="fas fa-laptop option-icon"></i>
                                                                            <span className="label">Acer</span>
                                                                            <span className="opt-val">Acer</span>
                                                                    </div>
                                                                    <div className="option">
                                                                            <input className="s-c top" type="radio" name="platform" value="behance"/>
                                                                            <input className="s-c bottom" type="radio" name="platform" value="behance"/>
                                                                            <i className="fas fa-laptop-medical option-icon"></i>
                                                                            <span className="label">Asus</span>
                                                                            <span className="opt-val">Asus</span>
                                                                    </div>
                                                                    <div className="option">
                                                                            <input className="s-c top" type="radio" name="platform" value="hackerrank"/>
                                                                            <input className="s-c bottom" type="radio" name="platform" value="hackerrank"/>
                                                                            <i className="fas fa-laptop-code option-icon"></i>
                                                                            <span className="label">Dell</span>
                                                                            <span className="opt-val">Dell</span>
                                                                    </div>
                                                                    <div className="option">
                                                                            <input className="s-c top" type="radio" name="platform" value="stackoverflow"/>
                                                                            <input className="s-c bottom" type="radio" name="platform" value="stackoverflow"/>
                                                                            <i className="fab fa-apple option-icon"></i>
                                                                            <span className="label">Apple</span>
                                                                            <span className="opt-val">Apple</span>
                                                                    </div>
                                                                    <div className="option">
                                                                            <input className="s-c top" type="radio" name="platform" value="freecodecamp"/>
                                                                            <input className="s-c bottom" type="radio" name="platform" value="freecodecamp"/>
                                                                            <i className="fas fa-mouse option-icon"></i>
                                                                            <span className="label">Logitech</span>
                                                                            <span className="opt-val">Logitech</span>
                                                                    </div>
                                                                    <div id="option-bg"></div>
                                                            </div>
                                                    </div>
                                                <div className="navbar-content--header_main__features___control-search--box_input">
                                                    <input id="search" 
                                                    type="text" 
                                                    placeholder="Tai nghe, bàn phím, chuột gaming, chuột văn phòng,..." 
                                                    className="input-text navbar-content--header_main__features___control-search--box_input__enter" 
                                                    />
                                                </div>
                                                <div className="navbar-content--header_main__features___control-search--box_button">
                                                    <button className="navbar-content--header_main__features___control-search--box_button__search">Tìm kiếm</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div   className="navbar-content--header_main__features___control-cart">
                                            <div data-toggle="modal" data-target="#exampleModalScrollable" className="navbar-content--header_main__features___control-cart--icon">
                                                <i className="fas fa-cart-plus navbar-content--header_main__features___control-cart--icon_details"></i>
                                                <span className="navbar-content--header_main__features___control-cart--icon_numbers">
                                                    1
                                                </span>
                                            </div>
                                            
                                            <Link to="/Storage" className="navbar-content--header_main__features___control-cart--name">
                                                <span  className="navbar-content--header_main__features___control-cart--name_details">
                                                    Giỏ hàng:
                                                </span>
                                                <span className="navbar-content--header_main__features___control-cart--name_total">
                                                    1.800.000VND
                                                </span>
                                            </Link>
      
                                           
                                        </div>
                                        <CartMini />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="navbar-content--menu">
                            <div className="row navbar-content--menu__container">
                                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 navbar-content--menu_menutoggle">
                                        <div className="navbar-content--menu_menutoggle__container">
                                            <h4 className="navbar-content--menu_menutoggle__container-button">Nổi Bật <i className="navbar-content--menu_menutoggle__container-button--icon far fa-list-alt"></i></h4>
                                            
                                            <input type="checkbox" className="navbar-content--menu_menutoggle__container-checkbox"/>
    
                                            <ul id="menutoggle" className="navbar-content--menu_menutoggle__container___list">
                                                <li className="navbar-content--menu_menutoggle__container___item"><Link className="navbar-content--menu_menutoggle__container___link" to="/">Top 10</Link> </li>
                                                <li className="navbar-content--menu_menutoggle__container___item"><Link className="navbar-content--menu_menutoggle__container___link" to="/">Sản phẩm bán chạy</Link> </li>
                                                <li className="navbar-content--menu_menutoggle__container___item"><Link className="navbar-content--menu_menutoggle__container___link" to="/">Điện Thoại</Link> </li>
                                                <li className="navbar-content--menu_menutoggle__container___item"><Link className="navbar-content--menu_menutoggle__container___link" to="/">Máy Tính</Link> </li>
                                                <li className="navbar-content--menu_menutoggle__container___item"><Link className="navbar-content--menu_menutoggle__container___link" to="/">Chuột</Link> </li>
                                                <li className="navbar-content--menu_menutoggle__container___item"><Link className="navbar-content--menu_menutoggle__container___link" to="/">Bàn Phím</Link> </li>
                                                <li className="navbar-content--menu_menutoggle__container___item"><Link className="navbar-content--menu_menutoggle__container___link" to="/">Phụ Kiện Khác</Link> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 navbar-content--menu_menuNavbar">
                                       
                                        <div className="navbar-content--menu_menuNavbar__sticky ">
                                            <ul className="navbar-content--menu_menuNavbar__sticky___list nav nav-tabs " id="myTab" role="tablist">
                                                <li className="navbar-content--menu_menuNavbar__sticky___item nav-item">
                                                    <Link className="navbar-content--menu_menuNavbar__sticky___link nav-link active" to="/" > Trang Chủ</Link>
                                                </li>
                                                <li className="navbar-content--menu_menuNavbar__sticky___item nav-item">
                                                    <Link className="navbar-content--menu_menuNavbar__sticky___link nav-link"         to="/Store" > Cửa Hàng</Link> 
                                                </li>
                                                <li className="navbar-content--menu_menuNavbar__sticky___item navbar-content--menu_menuNavbar__sticky___itemFeatures nav-item">
                                                    <Link className="navbar-content--menu_menuNavbar__sticky___link nav-link"          to="/featured" > Chức Năng</Link> 
                                                    <ul className="navbar-content--menu_menuNavbar__sticky___item-features">
                                                        <li className="navbar-content--menu_menuNavbar__sticky___item-features--item"><Link className="navbar-content--menu_menuNavbar__sticky___item-features--link" to="/">Loại</Link>
                                                            <ul className="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype">
                                                                <li className="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-item">
                                                                    <Link to="/" className="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-link">
                                                                        Sản Phẩm Cấu Hình
                                                                    </Link>
                                                                </li>
                                                                <li className="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-item">
                                                                    <Link to="/" className="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-link">
                                                                        Sản Phẩm Combo
                                                                    </Link>
                                                                </li>
                                                                <li className="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-item">
                                                                    <Link to="/" className="navbar-content--menu_menuNavbar__sticky___item-features--item_producttype-link">
                                                                        Phần mềm
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="navbar-content--menu_menuNavbar__sticky___item-features--item"><Link className="navbar-content--menu_menuNavbar__sticky___item-features--link" to="/">Sắp Xếp</Link>
                                                            <ul className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct">
                                                                <li className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-item">
                                                                    <Link className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-link" to="/"> Đánh giá </Link>
                                                                </li>
                                                                <li className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-item">
                                                                    <Link className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-link" to="/"> Lượt mua </Link>
                                                                </li>
                                                                <li className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-item">
                                                                    <Link className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-link" to="/"> Giảm giá </Link>
                                                                </li>
                                                                <li className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-item">
                                                                    <Link className="navbar-content--menu_menuNavbar__sticky___item-features--item_sortproduct-link" to="/"> Miễn Phí giao hàng </Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="navbar-content--menu_menuNavbar__sticky___item-features--item"><Link className="navbar-content--menu_menuNavbar__sticky___item-features--link" to="/">Thương Hiệu </Link></li>
    
                                                    </ul>
                                                </li>
                                                <li className="navbar-content--menu_menuNavbar__sticky___item nav-item">
                                                    <Link className="navbar-content--menu_menuNavbar__sticky___link nav-link"         to="/news" > Tin Tức</Link> 
                                                </li>
                                                <li className="navbar-content--menu_menuNavbar__sticky___item nav-item">
                                                    <Link className="navbar-content--menu_menuNavbar__sticky___link nav-link"         to="/About"> Thông tin</Link> 
                                                </li>
                                                <li className="navbar-content--menu_menuNavbar__sticky___item nav-item">
                                                    <Link className="navbar-content--menu_menuNavbar__sticky___link nav-link"          to="/contact" > Liên Hệ</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 navbar-content--menu_contact">
                                       <div className="navbar-content--menu_contact__container">
                                           <span className="navbar-content--menu_contact__container-icon"><i className="fas fa-phone-volume"></i></span>
                                           <span className="navbar-content--menu_contact__container-content">(+84) 912 521 560 - (+84) 9 0115 0222</span>
                                       </div>
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default navbar;