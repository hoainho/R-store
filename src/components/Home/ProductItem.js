import React from 'react'
export default function ProductItem(props){
    
    console.log(props)
    const product = props.product


    
        return (
            <div>
                <div className="slim_modal" id="Modal-Product">
                        <div className="sm_content" >
                            <div className="sm_header">Chi tiết sản phẩm</div>
                            <div className="sm_icon_menu">
                                {/* Customer Control */}
                                <ul>
                                <li className="sm_close"><i className="fa fa-times fa-fw "></i></li>
                                <li className="sm-icon--item"><i className="sm-icon--link far fa-user"></i></li>
                                <li className="sm-icon--item"><i className="sm-icon--link fas fa-heartbeat"></i></li>
                                <li className="sm-icon--item"><i className="sm-icon--link fas fa-not-equal"></i></li>
                                <li className="sm-icon--item"><i className="sm-icon--link far fa-share-square"></i></li>
                            </ul>
                            </div>
                            
                            {/* Product Content */}
                            <div className="sm_content_inner_wrap row">
                                <div className="sm_box col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    {/* Image Main*/}
                                    <div className="sm_box_pic">
                                        {/* <!-- className=sm_area_top (padding=4rem)--> */}
                                            <img src={product.image} alt={product.image} className="sm_box_pic_details"/>
                                    </div>
                                    {/* Image Select */}
                                    <div className="sm_box_list">
                                            {/* <div className="sm_box_item">
                                                <img src={task.subImage[0]} alt="HeadphoneAfter" className="sm_box_link"/>
                                            </div>
                                            <div className="sm_box_item">
                                                <img src="/img/HeadphoneAsus3.png" alt="HeadphoneAfter" className="sm_box_link"/>
                                            </div>  
                                            <div className="sm_box_item">
                                                <img src="/img/HeadphoneAsus5.png" alt="HeadphoneAfter" className="sm_box_link"/>
                                            </div>
                                            <div className="sm_box_item">
                                                <img src="/img/HeadphoneAsus4B.png" alt="HeadphoneAfter" className="sm_box_link"/>
                                            </div> */}
                                            {
                                            product.subImage.map((image,index) =><div className="sm_box_item">
                                                    <img src={image} alt={index} className="sm_box_link"/>
                                                </div>)
                                            }
                                    </div>
                                </div>
                                <div className="sm_area_bottom col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="sm-right">
                                    <div className="sm-right--content">
                                        <h1 className="sm-right--content_name" name="Tai nghe Asus AF298">
                                        {product.name}
                                        </h1>
                                        <ul className="sm-right--content_list">
                                            <li className="sm-right--content_item">
                                                <p className="sm-right--content_introduce">Hiệu năng cao</p>
                                            </li>
                                            <li className="sm-right--content_item">
                                                <p className="sm-right--content_introduce">Giá thành thấp</p>
                                            </li>
                                            <li className="sm-right--content_item">
                                                <p className="sm-right--content_introduce">Chip thế hệ mới</p>
                                            </li>
                                            <li className="sm-right--content_item">
                                                <p className="sm-right--content_introduce">Bảo hành 1 năm</p>
                                            </li>
                                        </ul>
                                        <div className="sm-right--content_ability">
                                            <span className="sm-right--content_ability__status">Tình Trạng : <strong className="special">Còn Hàng</strong></span>
                                            <span className="sm-right--content_ability__code">Mã sản phẩm : <strong className="special">TN001</strong></span>
                                        </div>
                                        <div className="sm-right--rating">
                                            <div className="sm-right--rating_result">
                                                <span className="product-tab--container_content__category___product-vote sm-right--rating_result__summary">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </span>
                                                <span className="sm-right--rating_review">68 Reviews</span>
                                            </div>
                                        </div>
                                        
                                        <span className="product-tab--container_content__category___product-price sm-right--price">
                                        <span className="product-tab--container_content__category___product-price--present sm-right--price_present" price={product.price}>{product.price}</span>
                                        <span className="product-tab--container_content__category___product-price--old sm-right--price_old">{product.price}</span>
                                        </span>
                                    </div>
                                    <div className="sm-right--control">
                                        <div className="sm-right--control_box">
                                            <span className="sm-right--control_reduction">
                                                <i className="fa fa-minus"></i>
                                            </span>
                                            <span className="sm-right--control_number" number="1">
                                                1
                                            </span>
                                            <span className="sm-right--control_increase">
                                                <i className="fa fa-plus"></i>
                                            </span>
                                        </div>
                                        <button onClick={()=>this.onSubmit(product)} type="submit" className="product-tab--container_content__category___product-button--card sm-right--control_add">Thêm Sản Phẩm</button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <div className="sm_close sm_close_button">Đóng</div> --> */}
                            </div>
                        </div>
                    </div>
                    
               <div className="product-tab--container_content__category___product">
                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--B" src="/img/HeadphoneAsus1A.png" alt=""/>
                    <img className="product-tab--container_content__category___product-pic product-tab--container_content__category___product-pic--A" src="/img/HeadphoneAsus1B.png" alt=""/>
                    <span className="product-tab--container_content__category___product-details">
                        
                        <button type="submit" className="sm_open product-tab--container_content__box___product-details--link"  data-modal="Modal-Product" data-effect="pushup" data-icons="is_right">
                            <i className="fas fa-arrows-alt product-tab--container_content__category___product-details--icon"></i>
                        </button>
                        
                        </div>
                        
                    </span>
                    <h4 className="product-tab--container_content__category___product-name" name>{product.name}</h4>
                    <span className="product-tab--container_content__category___product-vote" >
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </span>
                    <span className="product-tab--container_content__category___product-price">
                        <span className="product-tab--container_content__category___product-price--present" name="price" value={product.price}>{`${product.price/1000}.000`}</span>
                        <span className="product-tab--container_content__category___product-price--old">{product.price}</span>
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