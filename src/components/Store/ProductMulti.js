import React , { Component } from 'react';
import {Link} from 'react-router-dom';
export default class ProductMulti extends Component {
    render (){
        return(
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 store-main--container_content__box-self">
                <div className="product-tab--container_content__category___product store-main--container_content__box-self--content">
                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B store-main--container_content__box-self--content_pic" src="/img/mouse2A.png" alt="ROG Strix Flar"/>
                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A store-main--container_content__box-self--content_pic" src="/img/mouse2B.png" alt="ROG Strix Flar"/>
                    <span className="product-tab--container_content__category___product-details store-main--container_content__box-self--content_details">
                        <Link className="sm_open product-tab--container_content__box___product-details--link" >
                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon store-main--container_content__box-self--content_details__icon"></i>
                        </Link>
                    </span>
                    <h4 className="product-tab--container_content__category___product-name store-main--container_content__box-self--content_name"> Chuột Gaming Phamtom 2.0</h4>
                    <span className="product-tab--container_content__category___product-vote store-main--container_content__box-self--content_vote">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </span>
                    <span className="product-tab--container_content__category___product-price store-main--container_content__box-self--content_price">
                        <span className="product-tab--container_content__category___product-price--present ">1.800.000vnd</span>
                        <span className="product-tab--container_content__category___product-price--old store-main--container_content__box-self--content_price__old">2.000.000vnd</span>
                    </span>
                    <span className="product-tab--container_content__category___product-sale">
                        -10%
                    </span>
                    <div className="product-tab--container_content__category___product-button store-main--container_content__box-self--content_button">
                        <button className="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                        <div className="product-tab--container_content__category___product-button--control">
                            <span className="product-tab--container_content__category___product-button--control_heard"><i className="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                            <span className="product-tab--container_content__category___product-button--control_compare"><i className="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                        </div>
                    </div>
                </div>       
            </div>
                                            
        );
    }
}