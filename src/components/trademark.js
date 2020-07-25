import React , { Component } from "react";
import Slider from "react-slick";
export default class Trademark extends Component {
    render(){
        const settings= {
            dots: false,
            accessibility:true,
            slidesToShow: 7,
            slidesToScroll: 3,
            centerMode:true, 
            lazyLoad:'ondemand',
            pauseOnHover:true,
            swipe:true,
            touchMove:true,
            useCSS:true,
            useCSS3:true, 
            useTransform:true,
            prevArrow:false,
            nextArrow:false
        }
        return (
            <div className="trademark">
                    <div className="trademark-container">
                        <Slider { ...settings } className="trademark-container--slider ">
                            <div className="trademark-container--slider_box">
                                <div className="trademark-container--slider_box__icon">
                                    <img className="trademark-container--slider_box__icon-All trademark-container--slider_box__icon-A" src="img/AcerLogo1A.png" alt="local" />
                                </div> 
                            </div>
                            <div className="trademark-container--slider_box">
                                <div className="trademark-container--slider_box__icon">
                                    <img className="trademark-container--slider_box__icon-All trademark-container--slider_box__icon-A" src="img/AsusLogo1A.png" alt="local" />
                                </div> 
                            </div>
                            <div className="trademark-container--slider_box">
                                <div className="trademark-container--slider_box__icon">
                                    <img className="trademark-container--slider_box__icon-All trademark-container--slider_box__icon-A" src="img/intellogo.svg" alt="local" />
                                </div> 
                            </div>
                            <div className="trademark-container--slider_box">
                                <div className="trademark-container--slider_box__icon">
                                    <img className="trademark-container--slider_box__icon-All trademark-container--slider_box__icon-A" src="img/LenovoLogo1A.png" alt="local" />
                                </div> 
                            </div>
                            <div className="trademark-container--slider_box">
                                <div className="trademark-container--slider_box__icon">
                                    <img className="trademark-container--slider_box__icon-All trademark-container--slider_box__icon-A" src="img/samsunglogo.svg" alt="local" />
                                </div> 
                            </div>
                            <div className="trademark-container--slider_box">
                                <div className="trademark-container--slider_box__icon">
                                    <img className="trademark-container--slider_box__icon-All trademark-container--slider_box__icon-A" src="img/SonyLogo1B.png" alt="local" />
                                </div> 
                            </div>
                            <div className="trademark-container--slider_box">
                                <div className="trademark-container--slider_box__icon">
                                    <img className="trademark-container--slider_box__icon-All trademark-container--slider_box__icon-A" src="img/Logotech1A.svg" alt="local" />
                                </div> 
                            </div>
                        </Slider>
                </div>

            
                
                
                
                </div>
        );
    }
}