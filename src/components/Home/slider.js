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
                            
                        </div>
                    </div>
                </div>
        );
    }
}


export default slider;