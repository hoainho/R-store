import React,{Component} from "react";

class Bannerspecail extends Component{
    render() {
        return (
            // <!-- PRODUCT-SPECIAL  -->
                <div className="product-special product-special--top">
                    <div className="row product-special--container">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 product-special--container_box">
                            <div className="product-special--container_bestprice">
                                <img className="product-special--container_bestprice__pic" src="/img/productSpecial.png" alt="Tainghe-Asus"/>
                                <div className="product-special--container_bestprice__content product-special--container_bestprice__content-left">
                                    <h3 className="product-special--container_bestprice__content___tittle">Tai nghe Gaming</h3>
                                    <span className="product-special--container_bestprice__content___sub"> Sản phẩm được <span className="special">giảm giá nhiều nhất 2020</span></span>
                                    <span className="product-special--container_bestprice__content___sale"><span className="special">Giảm giá 40%</span> trong tuần này</span>
                                </div>
                            </div>
                            <div className="product-special--container_bestprice-hover"></div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 product-special--container_box">
                            <div className="product-special--container_bestprice">
                                <img className="product-special--container_bestprice__pic" src="/img/mouse1A.png" alt="Tainghe-Asus"/>
                                <div className="product-special--container_bestprice__content product-special--container_bestprice__content-right">
                                    <h3 className="product-special--container_bestprice__content___tittle">Chuột Gaming</h3>
                                    <span className="product-special--container_bestprice__content___sub"> Sản phẩm được <span className="special">săn đón nhất 2020</span></span>
                                    <span className="product-special--container_bestprice__content___sale"><span className="special">Giảm giá 20%</span> trong tuần này</span>
                                </div>
                            </div>
                            <div className="product-special--container_bestprice-hover"></div>
                            
                        </div>
                        
                        
                    </div>
                    
                </div>
        )
    }
}

export default Bannerspecail;