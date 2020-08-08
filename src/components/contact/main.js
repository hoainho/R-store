import React, { Component } from 'react';

export default class Main extends Component{
    render(){
        return(
            <div>
                <div className="store-tittle news-tittle">
                    <div className="store-tittle--container">
                        <a href="/index.html" className="store-tittle--container_home">Trang chủ</a>
                        <span className="store-tittle--container_iconpresent special">
                            {'>'}
                        </span>
                        <span className="store-tittle--container_present special">
                            Liên hệ
                        </span>
                    </div>
                </div>
                <div className="contact">
                
                <form action="" method="POST" className="form-horizontal contact-container" >
                        <div className="form-group contact-container--tittle">
                            <legend className="contact-container--tittle_details">Liên Hệ</legend>
                        </div>
                        <div className="form-group contact-container--tittle">
                            <legend className="contact-container--tittle_slogan">"Mọi sự góp ý của bạn là bàn đạp giúp cho chúng tôi hoàn thiện hơn !"</legend>
                        </div>
                        <div className="form-group contact-container--input">
                            <label className="contact-container--input_tittle" for="">Họ và tên <span className="input-special">*</span></label>
                            <input type="email" className="form-control contact-container--input_place" id="" placeholder="Nhập tên của bạn ở đây ... "/>
                        </div>
                        <div className="form-group contact-container--input">
                            <label className="contact-container--input_tittle" for="" type="email">Email <span className="input-special">*</span></label>
                            <input type="email" className="form-control contact-container--input_place" id="" placeholder="Mọi giải đáp sẽ được trao đổi qua email... "/>
                        </div>
                        <div className="form-group contact-container--input">
                            <label className="contact-container--input_tittle" for="">Số điện thoại</label>
                            <input type="email" className="form-control contact-container--input_place" id="" placeholder="Chúng tôi sẽ hỗ trợ nhanh hơn qua số điện thoại ... "/>
                        </div>
                        <div className="form-group contact-container--input">
                            <label className="contact-container--input_tittle" for="" collumn="10" row="5">Bạn cần hỗ trợ ?  <span className="input-special">*</span></label>
                            <input type="email" className="form-control contact-container--input_place" id="" placeholder="Chúng tôi có thể giúp gì cho bạn ? ... "/>
                        </div>
                        
                    <div className="form-group contact-container--submit">
                        <div className=" contact-container--submit_box">
                        <button type="submit" className="btn btn-primary contact-container--submit_box__details"> Gửi ngay</button>
                        </div>
                    </div>
                </form>
                
                
            </div>
            </div>
        );
    }
}