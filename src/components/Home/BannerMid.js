import React, { Component } from "react";

class BannerMid extends Component {
    render(){
        return (
            <div className="product-special">
                    <div className="row product-special--container">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 product-special--container_box">
                        <div className="product-special--container_bestprice">
                            <img className="product-special--container_bestprice__pic product-special--container_bestprice__pic-banner" src="/img/KBAsus2A.png" alt="Tainghe-Asus"/>
                            <div className="product-special--container_bestprice__content product-special--container_bestprice__content-left product-special--container_bestprice__content-left-banner">
                                <h3 className="product-special--container_bestprice__content___tittle">Bàn Phím Gaming</h3>
                                <span className="product-special--container_bestprice__content___sub"> Top bàn phím <span className="special">mua nhiều nhất 2020</span></span>
                                <span className="product-special--container_bestprice__content___sale"><span className="special">Đang được giảm giá 40%</span> trong tuần này</span>
                            </div>
                        </div>
                        <div className="product-special--container_bestprice-hover product-special--container_bestprice-hover-banner "></div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 product-special--container_box">
                        <div className="product-special--container_bestprice product-special--container_bestprice--rightbanner">
                            <img className="product-special--container_bestprice__pic product-special--container_bestprice__pic--rightbanner" src="/img/freeship.png" alt="Tainghe-Asus"/>
                            <div className="product-special--container_bestprice__content product-special--container_bestprice__content-right product-special--container_bestprice__content-banner">
                                <h3 className="product-special--container_bestprice__content___tittle product-special--container_bestprice__content___tittle-banner">Tưng bừng khai trương</h3>
                                <span className="product-special--container_bestprice__content___sub"> Tặng bạn <span className="special">FreeShip</span></span>
                                <span className="product-special--container_bestprice__content___sale product-special--container_bestprice__content___sale-banner"><span className="special">Giao hàng</span> toàn quốc</span>
                            </div>
                        </div>
                        <div className="product-special--container_bestprice-hover product-special--container_bestprice-hover--rightbanner "></div>
                        
                    </div>
                        
                    
                </div>
                    
                </div>
        );
    }
}
export default BannerMid;