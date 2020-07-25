import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}   from "react-router-dom";
export default class ProductFooter extends Component{
    render () {
        return (
            <div className="product-TOP">
                    <div className="product-TOP--category">
                        <div className="product-TOP--category_tittle">
                            <h4 className="product-TOP--category_tittle__details">Danh sách bán chạy tháng này</h4>
                        </div>
                        <div className="row product-TOP--category_content">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 product-TOP--category_content__container">
                                <h5 className="product-TOP--category_content__container___tittle">Tai nghe</h5>
                                <ul className="product-TOP--category_content__container___list">
                                    <li className="product-TOP--category_content__container___item">
                                        <Link exact to="/" className="product-TOP--category_content__container___link"> Asus</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Acer</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Dell</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Sony</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Apple</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Xem Thêm</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 product-TOP--category_content__container product-TOP--category_content__container-KB">
                                <h5 className="product-TOP--category_content__container___tittle">Bàn Phím</h5>
                                <ul className="product-TOP--category_content__container___list">
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Asus</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Acer</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Dell</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Sony</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Apple</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Xem Thêm</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 product-TOP--category_content__container product-TOP--category_content__container-SC">
                                <h5 className="product-TOP--category_content__container___tittle">Màn Hình</h5>
                                <ul className="product-TOP--category_content__container___list">
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Asus</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Acer</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Dell</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Sony</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Apple</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Xem Thêm</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 product-TOP--category_content__container product-TOP--category_content__container-MOUSE">
                                <h5 className="product-TOP--category_content__container___tittle">Chuột</h5>
                                <ul className="product-TOP--category_content__container___list">
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Asus</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Acer</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Dell</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Sony</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Apple</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Xem Thêm</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 product-TOP--category_content__container product-TOP--category_content__container-SW">
                                <h5 className="product-TOP--category_content__container___tittle">Phần Mềm</h5>
                                <ul className="product-TOP--category_content__container___list">
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Asus</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Acer</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Dell</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Sony</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Apple</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Xem Thêm</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 product-TOP--category_content__container product-TOP--category_content__container-MORE">
                                <h5 className="product-TOP--category_content__container___tittle">Phụ kiện khác</h5>
                                <ul className="product-TOP--category_content__container___list">
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Asus</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Acer</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Dell</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Sony</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Apple</Link>
                                    </li>
                                    <li className="product-TOP--category_content__container___item">
                                        <Link to="/" className="product-TOP--category_content__container___link"> Xem Thêm</Link>
                                    </li>
                                </ul>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
        );
    }

}