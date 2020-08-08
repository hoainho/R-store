import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class logout extends Component {
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
                        <form action="" method="POST" className="form-horizontal contact-container account-content account-Create">
                            <div className="form-group contact-container--tittle">
                                <legend className="contact-container--tittle_details">Đăng kí</legend>
                            </div>
                            <div className="form-group contact-container--input">
                                <label className="contact-container--input_tittle" for="">Họ và Tên <span className="input-special">*</span></label>
                                <input  className="form-control contact-container--input_place" id="" placeholder="Họ tên của bạn ... "/>
                            </div>
                            <div className="form-group contact-container--input">
                                <label className="contact-container--input_tittle" >Ngày sinh <span className="input-special">*</span></label>
                                <input type="date" className="form-control contact-container--input_place" id="" placeholder="01/01/2000... "/>
                            </div>  
                            <div className="form-group contact-container--input">
                                <label className="contact-container--input_tittle" >Giới tính <span className="input-special">*</span></label>
                                <input type="text" className="form-control contact-container--input_place" id="" placeholder="Nam hoặc nữ... "/>
                            </div> 
                            <div className="form-group contact-container--input">
                                <label className="contact-container--input_tittle" >Số điện thoại <span className="input-special">*</span></label>
                                <input type="text" className="form-control contact-container--input_place" id="" placeholder="0912521560... "/>
                            </div>
                            <div className="form-group contact-container--input">
                                <label className="contact-container--input_tittle" >Email <span className="input-special">*</span></label>
                                <input type="email" className="form-control contact-container--input_place" id="" placeholder="Địa chỉ email của bạn... "/>
                            </div>
                            <div className="form-group contact-container--input">
                                <label className="contact-container--input_tittle" >Mật khẩu <span className="input-special">*</span></label>
                                <input type="password" className="form-control contact-container--input_place" id="" placeholder="Mật khẩu... "/>
                            </div>
                            <div className="form-group contact-container--input">
                                <label className="contact-container--input_tittle" >Nhập lại mật khẩu <span className="input-special">*</span></label>
                                <input type="password" className="form-control contact-container--input_place" id="" placeholder="Nhập lại mật khẩu... "/>
                            </div>
                            {/* <!-- Submit --> */}
                            <div className="form-group contact-container--submit">
                                <div className=" contact-container--submit_box">
                                <button type="submit" className="btn btn-primary contact-container--submit_box__details">Đăng Kí</button>
                                </div>
                            </div>
                        </form>
                        <div className="account-create">
                        <div className="account-create--slogan">
                            <h6 className="account-create--slogan_tittle">
                                R-Team xin chào
                            </h6>
                            <span className="account-create--slogan_sub">
                                "Rất vui vì được đồng hành cùng các bạn , Welcome to R-Team" 
                            </span>
                        </div>
                        {/* <!-- Submit-Create--> */}
                        <div className="form-group contact-container--submit">
                            <div className=" contact-container--submit_box">
                            <Link to="/login" type="submit" className="btn btn-primary contact-container--submit_box__details account-signup"> Đăng Nhập</Link>
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
