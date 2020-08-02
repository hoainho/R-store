import React, { Component } from 'react'

export default class ProductItem extends Component {
    render(){
        return (
            <div>
               <div class="product-tab--container_content__category___product">
                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/HeadphoneAsus1A.png" alt=""/>
                    <img class="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/HeadphoneAsus1B.png" alt=""/>
                    <span class="product-tab--container_content__category___product-details">
                        <a class="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                            <i class="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                        </a>
                    </span>
                    <h4 class="product-tab--container_content__category___product-name">Tai nghe Asus AF298</h4>
                    <span class="product-tab--container_content__category___product-vote">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </span>
                    <span class="product-tab--container_content__category___product-price">
                        <span class="product-tab--container_content__category___product-price--present">405.000vnd</span>
                        <span class="product-tab--container_content__category___product-price--old">450.000vnd</span>
                    </span>
                    <span class="product-tab--container_content__category___product-sale">
                        -10%
                    </span>
                    <div class="product-tab--container_content__category___product-button">
                        <button class="product-tab--container_content__category___product-button--card">Thêm Sản Phẩm</button>
                        <div class="product-tab--container_content__category___product-button--control">
                            <span class="product-tab--container_content__category___product-button--control_heard"><i class="product-tab--container_content__category___product-button--control_heard__icon fas fa-heartbeat"></i></span>
                            <span class="product-tab--container_content__category___product-button--control_compare"><i class="fas fa-balance-scale product-tab--container_content__category___product-button--control_compare__icon"></i></span>
                        </div>
                    </div>
                </div>                     
            </div>
        );
    }
}