import React , { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Footer extends Component {
    render (){
        return (
                <div className="footer-overlay">
                    <svg viewBox="0 0 120 28">
                    <defs> 
                        <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="
                            1 0 0 0 0  
                            0 1 0 0 0  
                            0 0 1 0 0  
                            0 0 0 13 -9" result="goo" />
                        </filter>
                        <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
                    </defs> 
                    
                    <use id="wave3" className="wave" xlinkHref="#wave" x="0" y="-2" ></use> 
                    <use id="wave2" className="wave" xlinkHref="#wave" x="0" y="0" ></use>
                    
                    
                    <g className="gooeff" filter="url(#goo)">
                    <circle className="drop drop1" cx="20" cy="2" r="8.8"  />
                    <circle className="drop drop2" cx="25" cy="2.5" r="7.5"  />
                    <circle className="drop drop3" cx="16" cy="2.8" r="9.2"  />
                    <circle className="drop drop4" cx="18" cy="2" r="8.8"  />
                    <circle className="drop drop5" cx="22" cy="2.5" r="7.5"  />
                    <circle className="drop drop6" cx="26" cy="2.8" r="9.2"  />
                    <circle className="drop drop1" cx="5" cy="4.4" r="8.8"  />
                    <circle className="drop drop2" cx="5" cy="4.1" r="7.5"  />
                    <circle className="drop drop3" cx="8" cy="3.8" r="9.2"  />
                    <circle className="drop drop4" cx="3" cy="4.4" r="8.8"  />
                    <circle className="drop drop5" cx="7" cy="4.1" r="7.5"  />
                    <circle className="drop drop6" cx="10" cy="4.3" r="9.2"  />
                    
                    <circle className="drop drop1" cx="1.2" cy="5.4" r="8.8"  />
                    <circle className="drop drop2" cx="5.2" cy="5.1" r="7.5"  />
                    <circle className="drop drop3" cx="10.2" cy="5.3" r="9.2"  />
                        <circle className="drop drop4" cx="3.2" cy="5.4" r="8.8"  />
                    <circle className="drop drop5" cx="14.2" cy="5.1" r="7.5"  />
                    <circle className="drop drop6" cx="17.2" cy="4.8" r="9.2"  />
                    <use id="wave1" className="wave" xlinkHref="#wave" x="0" y="1" />
                    </g>  
                     
                   
                    
                    </svg>
                    <div className="footer">
                        <div className="row footer-container">
                            
                            
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 footer-left">
                                <div className="footer-left--logo">
                                    <div className="logo navbar-content--header_main__features___logo-box footer-left--logo_box">
                                        <span className="logo-letter navbar-content--header_main__features___logo-box--logo footer-left--logo_box__icon" data-letter="ℜ">ℜ</span>
                                        <span className="navbar-content--header_main__features___logo-box--sublogo footer-left--logo_box__name">Store</span>
                                    </div>
                                </div>
                                <div className="footer-left--rock">
                                    <img className="footer-left--rock_pic" src="img/footer-rock.png" alt="rock"/>
                                </div>
                                
                            </div>
                            
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 footer-center">
                                <div className="footer-center--content">
                                    <div className="footer-center--content-rowfirst">
                                        <div className="footer-center--content-box">
                                            <h4 className="footer-center--content_tittle">Phương thức thanh toán</h4>
                                            <ul className="footer-center--content_list">
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Visa</Link>
                                                </li>
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Ship Cod</Link>
                                                </li>
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Ví momo</Link>
                                                </li>
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Chuyển khoản</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="footer-center--content-box">
                                            <h4 className="footer-center--content_tittle">Chính sách bảo hành</h4>
                                            <ul className="footer-center--content_list">
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Hoàn tiền trong 30 ngày</Link>
                                                </li>
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Bảo hành R-Vip</Link>
                                                </li>
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Bảo hành phần mềm 1 năm</Link>
                                                </li>
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Chính sách 1 đổi 1</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="footer-center--content-rowsecond">
                                        <div className="footer-center--content-box">
                                            <h4 className="footer-center--content_tittle">Vì sao chọn chúng tôi</h4>
                                            <ul className="footer-center--content_list">
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">An toàn</Link>
                                                </li>
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Tiện lợi</Link>
                                                </li>
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Chất lượng cao</Link>
                                                </li>
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Giá rẻrẻ</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="footer-center--content-box">
                                            <h4 className="footer-center--content_tittle">Thông tin R-Store</h4>
                                            <ul className="footer-center--content_list">
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Giấy phép kinh doanh</Link>
                                                </li>
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Feedback</Link>
                                                </li>
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Nguồn gốc sản phẩm</Link>
                                                </li>
                                                <li className="footer-center--content_item">
                                                    <Link to="" className="footer-center--content_link">Thành viên</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 footer-right">
                                <div className="footer-right--contact">
                                    <h4 className="footer-right--contact_tittle">
                                        Đăng nhập {'&'} Theo dõi
                                    </h4>
                                    <span className="footer-right--contact_sub">
                                        100+ mã khuyến mãi mỗi tuần khi bạn theo dõi R-Store <br/>
                                        Nhập email bạn muốn nhận mã (1 email/1 mã)
                                    </span>
                                    <form className="footer-right--contact_follow" action="" method="post">
                                        <input className="footer-right--contact_follow__input"
                                        type="email"
                                        placeholder="Nhập email của bạn..."
                                        name="email"  
                                        pattern="\S+.*"/>
                            
                                        <button className="footer-right--contact_follow__button" type="submit">Theo dõi</button>
                                    </form>
                                    <div className="footer-right--contact_hotline">
                                        <span className="footer-right--contact_hotline__icon"><img src="img/icon-call.png" alt="icon" className="footer-right--contact_hotline__icon___details"/></span>
                                        <span className="footer-right--contact_hotline__name">(+84) 912 521 560</span>
                                        <span className="footer-right--contact_hotline__address"><br/>
                                            Địa chỉ : N3, Điện Biên Phủ, P.25, Q.Bình Thạnh <br/>
                                            Email: remalw2019@gmail.com <br/>
                                            Thông tin:  <a href="https://hoainho.github.io/Rem-Cv/" className="high-light"> Rem-Cv </a> 
                                        </span>
                                    </div>
                                    <div className="footer-right--contact_payment">
                                        <span className="footer-right--contact_payment__box"><img className="footer-right--contact_payment__box___icon" src="img/visa.png" alt="payonline"/></span>
                                        <span className="footer-right--contact_payment__box"><img className="footer-right--contact_payment__box___icon" src="img/MTcard.png" alt="payonline"/></span>
                                        <span className="footer-right--contact_payment__box"><img className="footer-right--contact_payment__box___icon" src="img/momo.png" alt="payonline"/></span>
                                        <span className="footer-right--contact_payment__box"><img className="footer-right--contact_payment__box___icon" src="img/airpay.png" alt="payonline"/></span>
                                    </div>
                                    <span className="footer-right--contact_copyright">Copyright © <Link className="high-light" to=""> R-Store </Link>All Rights Reserved. <Link to="" className="high-light"> Remalw</Link> </span>
                                </div>
                            </div>
                            
                            
                            
                            
                                
                                
                        </div>
                    </div>
                </div>
        );
    }
}