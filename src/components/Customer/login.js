import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class login extends Component {
    render(){
        return (
            <div className="account">
                    <div className="store-tittle news-tittle ">
                        <div className="store-tittle--container">
                            <Link to="/" className="store-tittle--container_home">Trang chủ</Link>
                            <span className="store-tittle--container_iconpresent special">
                                {'>'} 
                            </span>
                            <span className="store-tittle--container_present special">
                                Tài Khoản
                            </span>
                        </div>
                    </div>
                    <div className="account-tittle">
                        <h3 className=" account-tittle--details"> Tài khoản </h3>
                    </div>
                    <div>
                        <form action=""  className="form-horizontal contact-container account-content" >
                            <div className="form-group contact-container--tittle">
                                <legend className="contact-container--tittle_details">Đăng nhập</legend>
                            </div>
                            <div className="form-group contact-container--input">
                                <label className="contact-container--input_tittle" for="">Tài khoản <span className="input-special">*</span></label>
                                <input  className="form-control contact-container--input_place" id="" placeholder="Tài khoản của bạn ... "/>
                            </div>
                            <div className="form-group contact-container--input">
                                <label className="contact-container--input_tittle" for="" type="email">Mật khẩu <span className="input-special">*</span></label>
                                <input type="password" className="form-control contact-container--input_place" id="" placeholder="Mật khẩu của bạn... "/>
                            </div>  
                            {/* <!-- Submit --> */}
                            <div className="form-group contact-container--submit">
                                <div className=" contact-container--submit_box">
                                <button type="submit" className="btn btn-primary contact-container--submit_box__details">Đăng nhập</button>
                                </div>
                            </div>
                            <div className="account-content--forgetpassword">
                                <a href="" className="account-content--forgetpassword_link">
                                    Quên mật khẩu ?
                                </a>
                            </div>
                        </form>
                        <div className="account-create">
                        <div className="account-create--slogan">
                            <h6 className="account-create--slogan_tittle">
                                Tạo tài khoản
                            </h6>
                            <span className="account-create--slogan_sub">
                                "Rất vui vì được đồng hành cùng các bạn , Welcome to R-Team" 
                            </span>
                        </div>
                        {/* <!-- Submit-Create--> */}
                        <div className="form-group contact-container--submit">
                            <div className=" contact-container--submit_box">
                            <Link to="/logout" className="btn btn-primary contact-container--submit_box__details account-signup">Đăng Kí </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    
                    </div>
                </div>
        );
    }
}