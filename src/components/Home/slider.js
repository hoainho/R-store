import React,{Component} from "react";


class slider extends Component{
    render(){
        return (
            <div className="slider" id="slider">
                    <div className="slider-content">
                        <div id="carouselExampleIndicators" className="carousel slide slider-content--tv" data-ride="carousel">
                            <ol className="carousel-indicators slider-content--tv_control">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner slider-content--tv_screen">
                                <div className="carousel-item active slider-content--tv_screen__box">
                                    <img className="d-block w-100 slider-content--tv_screen__box___pic" src="./img/mouse2A.png" alt="First slide"/>
                                    <img className="slider-content--tv_screen__box___pic-shadow" src="./img/shadow.png" alt="shadow"/>
                                    <span className="slider-content--tv_screen__box___introduce"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Remalw</span>
                                    <button id="" className="slider-content--tv_screen__box___btn">Mua Ngay</button>
                                </div>
                                <div className="carousel-item  slider-content--tv_screen__box">
                                    <img className="d-block w-100 slider-content--tv_screen__box___pic" src="./img/Razer2A.png" alt="Second slide"/>
                                    <img className="slider-content--tv_screen__box___pic-shadow" src="./img/shadow.png" alt="shadow"/>
                                    <span className="slider-content--tv_screen__box___introduce"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Remalw</span>
                                    <button id="" className="slider-content--tv_screen__box___btn">Mua Ngay</button>
                                </div>
                                <div className="carousel-item  slider-content--tv_screen__box">
                                    <img className="d-block w-100 slider-content--tv_screen__box___pic" src="./img/mouse2B.png" alt="Third slide"/>
                                    <img className=" slider-content--tv_screen__box___pic-shadow" src="./img/shadow.png" alt="shadow"/>
                                    <span className="slider-content--tv_screen__box___introduce"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Remalw</span>
                                    <button id="" className="slider-content--tv_screen__box___btn">Mua Ngay</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
        );
    }
}


export default slider;