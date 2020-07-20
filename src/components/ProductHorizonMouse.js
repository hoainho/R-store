import React, { Component } from "react";

class ProductHorizonMouse extends Component {
    render() {
        return (
            // <!-- PRODUCT-CATEGORY-TABS -- Mouse -->
                <div className="product-tab product-tab--category product-tab product-tab--categoryMouse">
                    <div className="product-tab--container">
                        <div className="product-tab--container_tittle-category product-tab--container_tittle-category-mouse">
                            <ul  role="tablist" id="nav-tab" className="product-tab--container_tittle-category__list nav nav-tabs">
                                <h4 className="product-tab--container_tittle-category__tittle-headphone product-tab--container_tittle-category__tittle-headphone-mouse">Chuôt</h4>
                                <li  id="tab-item " className="product-tab--container_tittle-category__item product-tab--container_tittle-category__item">
                                    <a href="#tab_mouseasus" id="nav-mouseasus" role="tab" aria-controls="nav-mouseasus" aria-selected="true" data-toggle="tab" id="tab-link" className="product-tab--container_tittle-category__link  nav-link active">Asus</a>
                                </li>
                                
                                <li  id="tab-item " className="product-tab--container_tittle-category__item product-tab--container_tittle-category__item-mouse">
                                    <a href="#tab_mousracer" id="nav-mousracer" role="tab" aria-controls="nav-mousracer" aria-selected="true" data-toggle="tab" id="tab-link" className="product-tab--container_tittle-category__link  nav-link ">Acer</a>
                                </li>
                                
                                <li  id="tab-item " className="product-tab--container_tittle-category__item product-tab--container_tittle-category__item-mouse">
                                    <a href="#tab_mouselogitech" id="nav-mouselogitech" role="tab" aria-controls="nav-mouselogitech" aria-selected="true" data-toggle="tab" id="tab-link" className="product-tab--container_tittle-category__link  nav-link ">Logitech</a>
                                </li>
                                
                                <li  id="tab-item " className="product-tab--container_tittle-category__item product-tab--container_tittle-category__item-mouse">
                                    <a href="#tab_mousesony" id="nav-mousesony" role="tab" aria-controls="nav-mousesony" aria-selected="true" data-toggle="tab" id="tab-link" className="product-tab--container_tittle-category__link  nav-link ">Sony</a>
                                </li>
                            </ul>
                        </div>
                        <div id="nav-tabContent" className="product-tab--container_content product-tab--container_content-category tab-content">
                            <div id="tab_mouseasus" role="tabpanel" aria-labelledby="nav-mouseasus" className="product-tab--container_content__category product-tab--container_content__category tab-pane fade show active">
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/product-headphoneB.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/product-headphoneA.jpg" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Tai nghe Asus AF298</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/HeadphoneAsus1A.png" alt="taingheAsus"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/HeadphoneAsus1B.png" alt="taingheAsus"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name"> Tai nghe Asus Strix 2.0</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">900.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">810.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/HeadphoneAsus2.png" alt="HeadphoneAsus.png"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/HeadphoneAsus2.png" alt="HeadphoneAsus.png"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Tai Nghe Asus ROG Delta</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">1.080.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">1.200.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/HeadphoneAsus3.png" alt="Giá treo"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/HeadphoneAsus3.png" alt="Giá treo"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name"> Giá treo Corsair ST100 </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">270.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">300.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/HeadphoneAsus4A.png" alt="ASUS ROG Theta 7.1"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/HeadphoneAsus4B.png" alt="ASUS ROG Theta 7.1"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">ASUS ROG Theta 7.1</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/HeadphoneAsus5.png" alt=">Asus ROG Centurion"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/HeadphoneAsus5.png" alt=">Asus ROG Centurion"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Asus ROG Centurion</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">1.080.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">1.200.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/HeadphoneAsus6A.png" alt="ASUS ROG Cetra"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/HeadphoneAsus6B.jpg" alt="ASUS ROG Cetra"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Tai nghe ASUS ROG Cetra</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">180.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">200.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/HeadphoneAsus7A.png" alt="Asus TUF H3 "/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/HeadphoneAsus7B.jpg" alt="Asus TUF H3 "/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name"> Tai nghe Asus TUF H3 </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">2.700.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">3.000.000vnd</span>
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
                            <div id="tab_mousracer" role="tabpanel" aria-labelledby="nav-mousracer" className=" product-tab--container_content__category product-tab--container_content__category tab-pane fade ">
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/mouse1A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/mouse1B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Chuột Gaming A2F66</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/mouse2A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/mouse2B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Chuột Gaming 9SAK</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">1.080.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">1.200.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/Razer1A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/Razer1B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Lót Chuột Razer</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">90.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">100.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/Razer2A.png" alt="Razer2A"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/Razer2B.jpg" alt="Razer2A"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Lót Chuột Gaming </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">150.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">135.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/usb1A.png" alt="usb"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/usb1B.jpg" alt="usb"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">USB Gaming 128GB</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">450.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">500.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/product-headphoneB.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/product-headphoneA.jpg" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Tai nghe Asus AF298</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/headphone2A.png" alt="taingheV"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/headphone2B.jpg" alt="taingheV"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name"> Tai nghe Rapoo VH510 Gaming</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">410.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">900.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/keyboard1A.png" alt="keyboard"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/keyboard1B.png" alt="keyboard"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Bàn Phím MSI A2G</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">750.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">675.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/keyboard2A.png" alt="keyboard2A"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/keyboard2B.png" alt="keyboard2B"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Bàn Phím Luxury B2A93 </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
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
                            <div id="tab_mouselogitech" role="tabpanel" aria-labelledby="nav-mouselogitech" className=" product-tab--container_content__category product-tab--container_content__category tab-pane fade ">
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/keyboard1A.png" alt="keyboard"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/keyboard1B.png" alt="keyboard"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Bàn Phím MSI A2G</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">750.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">675.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/keyboard2A.png" alt="keyboard2A"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/keyboard2B.png" alt="keyboard2B"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Bàn Phím Luxury B2A93 </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/mouse1A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/mouse1B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Chuột Gaming A2F66</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/product-headphoneB.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/product-headphoneA.jpg" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Tai nghe Asus AF298</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/headphone2A.png" alt="taingheV"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/headphone2B.jpg" alt="taingheV"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name"> Tai nghe Rapoo VH510 Gaming</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">410.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">900.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/mouse2A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/mouse2B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Chuột Gaming 9SAK</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">1.080.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">1.200.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/Razer1A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/Razer1B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Lót Chuột Razer</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">90.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">100.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/Razer2A.png" alt="Razer2A"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/Razer2B.jpg" alt="Razer2A"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Lót Chuột Gaming </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">150.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">135.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/usb1A.png" alt="usb"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/usb1B.jpg" alt="usb"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">USB Gaming 128GB</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">450.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">500.000vnd</span>
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
                            <div id="tab_mousesony" role="tabpanel" aria-labelledby="nav-mousesony" className="product-tab--container_content__category product-tab--container_content__category tab-pane fade ">
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/product-headphoneB.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/product-headphoneA.jpg" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Tai nghe Asus AF298</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/headphone2A.png" alt="taingheV"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/headphone2B.jpg" alt="taingheV"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name"> Tai nghe Rapoo VH510 Gaming</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">410.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">900.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/keyboard1A.png" alt="keyboard"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/keyboard1B.png" alt="keyboard"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Bàn Phím MSI A2G</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">750.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">675.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/keyboard2A.png" alt="keyboard2A"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/keyboard2B.png" alt="keyboard2B"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Bàn Phím Luxury B2A93 </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/mouse1A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/mouse1B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Chuột Gaming A2F66</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">405.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/mouse2A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/mouse2B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Chuột Gaming 9SAK</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">1.080.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">1.200.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/Razer1A.png" alt=""/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/Razer1B.png" alt=""/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Lót Chuột Razer</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">90.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">100.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/Razer2A.png" alt="Razer2A"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/Razer2B.jpg" alt="Razer2A"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">Lót Chuột Gaming </h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">150.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">135.000vnd</span>
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
                                <div className="product-tab--container_content__category___product">
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/usb1A.png" alt="usb"/>
                                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/usb1B.jpg" alt="usb"/>
                                    <span className="product-tab--container_content__category___product-details"><a className="sm_open product-tab--container_content__box___product-details--link" data-modal="exampleAdvanced" data-effect="pushup" data-icons="is_right">
                                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                                        </a></span>
                                    <h4 className="product-tab--container_content__category___product-name">USB Gaming 128GB</h4>
                                    <span className="product-tab--container_content__category___product-vote">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    <span className="product-tab--container_content__category___product-price">
                                        <span className="product-tab--container_content__category___product-price--present">450.000vnd</span>
                                        <span className="product-tab--container_content__category___product-price--old">500.000vnd</span>
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
                        </div>
                    </div>
                </div> 
        );
    }
}