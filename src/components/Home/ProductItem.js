import React, { Component } from 'react'
export default class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        
    }
    render(){
        return (
            <div>
               <div className="product-tab--container_content__category___product">
                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/HeadphoneAsus1A.png" alt=""/>
                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/HeadphoneAsus1B.png" alt=""/>
                    <span className="product-tab--container_content__category___product-details">
                        <button type="submit" className="sm_open product-tab--container_content__box___product-details--link"  data-modal="Modal-Product" data-effect="pushup" data-icons="is_right">
                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                        </button>
                    </span>
                    <h4 className="product-tab--container_content__category___product-name" name>Tai nghe Asus AF298</h4>
                    <span className="product-tab--container_content__category___product-vote" >
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </span>
                    <span className="product-tab--container_content__category___product-price">
                        <span className="product-tab--container_content__category___product-price--present" name="price" value="">405.000vnd</span>
                        <span className="product-tab--container_content__category___product-price--old">450.000vnd</span>
                    </span>
                    <span className="product-tab--container_content__category___product-sale">
                        -10%
                    </span>
                    <div className="product-tab--container_content__category___product-button">
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