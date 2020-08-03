import React , { Component } from 'react'


export default class ProductSingle extends Component{
    render(){
        return(
            <div className="row store-main--container_content__single">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 store-main--container_content__single-pic">
                    <img src="/img/mouse2A.png" alt="HeadphoneAfter" className="store-main--container_content__single-pic--details store-main--container_content__single-pic--details_A"/>
                    <img src="/img/mouse2B.png" alt="Headphone" className="store-main--container_content__single-pic--details store-main--container_content__single-pic--details_B"/>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 store-main--container_content__single-content">
                    <h4 className="store-main--container_content__single-content--tittle">
                        Chuột Gaming Phamtom 2.0 
                    </h4>
                    <ul className="store-main--container_content__single-content--customer">
                        <li className="store-main--container_content__single-content--customer_rate">
                            <span className="store-main--container_content__single-content--customer_rate__details">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                        </li>
                        <li className="store-main--container_content__single-content--customer_reviews">
                            <p className="store-main--container_content__single-content--customer_reviews__details">
                                69 nhận xét
                            </p>
                        </li>
                        <li className="store-main--container_content__single-content--customer_addreviews">
                            <p className="store-main--container_content__single-content--customer_addreviews__details">
                                thêm nhận xét
                            </p>
                        </li>
                    </ul>
                    <span className="store-main--container_content__single-content--price">
                        $1.800.000 vnd
                    </span>
                    <p className="store-main--container_content__single-content--introduce">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corporis exercitationem perspiciatis ipsa iusto. Corrupti dolores aliquam iusto, beatae, nostrum reiciendis blanditiis odio, labore delectus et nisi molestiae eligendi adipisci.
                    </p>
                    <ul className="store-main--container_content__single-content--highlights">
                        <li className="store-main--container_content__single-content--highlights_item">
                            <p className="store-main--container_content__single-content--highlights_link">Highlight 1</p>
                        </li>
                        <li className="store-main--container_content__single-content--highlights_item">
                            <p className="store-main--container_content__single-content--highlights_link">Highlight 2</p>
                        </li>
                        <li className="store-main--container_content__single-content--highlights_item">
                            <p className="store-main--container_content__single-content--highlights_link">Highlight 3</p>
                        </li>
                        <li className="store-main--container_content__single-content--highlights_item">
                            <p className="store-main--container_content__single-content--highlights_link">Highlight 4</p>
                        </li>
                    </ul>
                    <div className="store-main--container_content__single-content--control">
                        <button className="product-tab--container_content__category___product-button--card store-main--container_content__single-content--control_button">Thêm Sản Phẩm</button>
                        
                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                        
                    </div>
                </div>
            </div> 
                                            
        );
    }
}