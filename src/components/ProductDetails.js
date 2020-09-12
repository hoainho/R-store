import React, { Component } from 'react';
import axios from 'axios';
export default class ProductDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            dislayDetail : true
        }
    }
   
    componentDidMount(){
        axios.get("https://5f1446062710570016b37d7d.mockapi.io/Product")
        .then(res => {
            const data = res.data;
            this.setState({ data });
        })
        .catch(err => console.log(err));
    }
    onSubmit = (data) => {
        console.log(data);
    }
    onToggleDetail = () => {
        this.setState({
            dislayDetail : !this.state.dislayDetail
        })
    }
    render(){
        let elmModal

        this.state.dislayDetail ? //Nếu dislayDetail = true
        elmModal =( this.state.data.map( task =>        
            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div className="sm_container">
                <div className="wrapper" key={task.name}>
                <div className="slim_modal" id="Modal-Product">
                    <div className="sm_content" >
                        <div className="sm_header">Chi tiết sản phẩm</div>
                        <div className="sm_icon_menu">
                            {/* Customer Control */}
                            <ul>
                                <li onClick={this.onToggleDetail} className="sm_close "><i className="fa fa-times fa-fw "></i></li>
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
                                        <img src={task.image} alt="Headphone" className="sm_box_pic_details"/>
                                </div>
                                {/* Image Select */}
                                <div className="sm_box_list">
                                        
                                        {
                                        task.subImage.map((image,index) =><div className="sm_box_item">
                                                <img src={image} alt={index} className="sm_box_link"/>
                                            </div>)
                                        }
                                </div>
                            </div>
                            <div className="sm_area_bottom col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="sm-right">
                                <div className="sm-right--content">
                                    <h1 className="sm-right--content_name" name="Tai nghe Asus AF298">
                                    {task.name}
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
                                    <span className="product-tab--container_content__category___product-price--present sm-right--price_present" price={task.price}>{task.price}</span>
                                    <span className="product-tab--container_content__category___product-price--old sm-right--price_old">{task.price*1.2}</span>
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
                                    <button onClick={this.onSubmit(task)} type="submit" className="product-tab--container_content__category___product-button--card sm-right--control_add">Thêm Sản Phẩm</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
        )
        : // false
        elmModal = ''
        return(      
            <>     
                {elmModal}
            </>
        );
    }
}