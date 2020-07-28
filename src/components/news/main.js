import React, { Component } from 'react';


export default class Main extends Component {
    render() {
        return (
            <div>
                            
                <div className="store-tittle news-tittle">
                    <div className="store-tittle--container">
                        <a href="#home" className="store-tittle--container_home">Trang chủ</a>
                        <span className="store-tittle--container_iconpresent special">
                            {'>'}
                        </span>
                        <span className="store-tittle--container_present special">
                             Tin tức
                        </span>
                    </div>
                </div>
                <div className="news">
                    <div className="row news-container">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 news-container--menu">
                            <div className="news-container--menu_search">
                                <input type="search"
                                    name="search-name" 
                                    id=""
                                    placeholder="Nhập tên bài viết..."
                                    className="news-container--menu_search__box"
                                />
                                <button className="news-container--menu_search__icon"><i className="fab fa-searchengin news-container--menu_search__icon-details"></i></button>
                            </div>
                             <div className="news-container--menu_categories">
                                <h4 className="news-container--menu_categories__tittle">Sản Phẩm</h4>
                                <ul className="news-container--menu_categories__list">
                                    <li className="news-container--menu_categories__item">
                                        <a href="#" className="news-container--menu_categories__link">Tai Nghe</a>
                                    </li>
                                    <li className="news-container--menu_categories__item">
                                        <a href="#" className="news-container--menu_categories__link">Bàn Phím</a>
                                    </li>
                                    <li className="news-container--menu_categories__item">
                                        <a href="#" className="news-container--menu_categories__link">Chuột</a>
                                    </li>
                                    <li className="news-container--menu_categories__item">
                                        <a href="#" className="news-container--menu_categories__link">Phụ kiện PC</a>
                                    </li>
                                    <li className="news-container--menu_categories__item">
                                        <a href="#" className="news-container--menu_categories__link">Tin công nghệ</a>
                                    </li>
                                    <li className="news-container--menu_categories__item">
                                        <a href="#" className="news-container--menu_categories__link">Tin khác</a>
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="news-container--menu_recent">
                                <h4 className="news-container--menu_recent__tittle">Gần đây</h4>
                                <ul className="news-container--menu_recent__list">
                                    <li className="news-container--menu_recent__item">
                                        <img src="./img/HeadphoneAsus7A.png" alt="" className="news-container--menu_recent__item-pic"/>
                                        <div className="news-container--menu_recent__item-content">
                                            <a href="#" className="news-container--menu_recent__item-content--link">Lorem ipsum dolor sit amet consectetur, adipisicing elit.inventore sit!</a>
                                            <span className="news-container--menu_recent__item-content--sub"> 06-07-2020 </span>
                                        </div>
                                    </li>
                                    <li className="news-container--menu_recent__item">
                                        <img src="./img/HeadphoneAsus7A.png" alt="" className="news-container--menu_recent__item-pic"/>
                                        <div className="news-container--menu_recent__item-content">
                                            <a href="#" className="news-container--menu_recent__item-content--link">Lorem ipsum dolor sit amet consectetur, adipisicing elit.inventore sit!</a>
                                            <span className="news-container--menu_recent__item-content--sub"> 06-07-2020 </span>
                                        </div>
                                    </li>
                                    <li className="news-container--menu_recent__item">
                                        <img src="./img/HeadphoneAsus7A.png" alt="" className="news-container--menu_recent__item-pic"/>
                                        <div className="news-container--menu_recent__item-content">
                                            <a href="#" className="news-container--menu_recent__item-content--link">Lorem ipsum dolor sit amet consectetur, adipisicing elit.inventore sit!</a>
                                            <span className="news-container--menu_recent__item-content--sub"> 06-07-2020 </span>
                                        </div>
                                    </li>
                                    <li className="news-container--menu_recent__item">
                                        <img src="./img/HeadphoneAsus7A.png" alt="" className="news-container--menu_recent__item-pic"/>
                                        <div className="news-container--menu_recent__item-content">
                                            <a href="#" className="news-container--menu_recent__item-content--link">Lorem ipsum dolor sit amet consectetur, adipisicing elit.inventore sit!</a>
                                            <span className="news-container--menu_recent__item-content--sub"> 06-07-2020 </span>
                                        </div>
                                    </li>
                                    <li className="news-container--menu_recent__item">
                                        <img src="./img/HeadphoneAsus7A.png" alt="" className="news-container--menu_recent__item-pic"/>
                                        <div className="news-container--menu_recent__item-content">
                                            <a href="#" className="news-container--menu_recent__item-content--link">Lorem ipsum dolor sit amet consectetur, adipisicing elit.inventore sit!</a>
                                            <span className="news-container--menu_recent__item-content--sub"> 06-07-2020 </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="news-container--menu_archive">
                                <h4 className="news-container--menu_archive__tittle">Năm Phát Hành</h4>
                                <ul className="news-container--menu_archive__list">
                                    <li className="news-container--menu_archive__item">
                                        <a href="#" className="news-container--menu_archive__link">2019</a>
                                    </li>
                                    <li className="news-container--menu_archive__item">
                                        <a href="#" className="news-container--menu_archive__link">2020</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 news-container--content">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 news-container--content_news">
                                    <div className="news-container--content_box">
                                        <img src="./img/HeadphoneAsus7A.png" alt="Tainghe" className="news-container--content_box__pic"/>
                                        <h4 className="news-container--content_box__tittle">
                                            Tai nghe Asus Attrix 2.0 2020
                                        </h4>
                                        <span className="news-container--content_box__date">
                                            <span className="news-container--content_box__date-sub">Ngày đăng: </span>
                                            <span className="news-container--content_box__date-details">06-07-2020</span>
                                        </span>
                                        <p className="news-container--content_box__introduce">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Laboriosam perspiciatis nihil delectus vero possimus nostrum, 
                                            optio numquam quaerat unde? Aliquam quidem doloribus voluptate
                                             perferendis nostrum quia consequatur beatae repellendus non!
                                        </p>
                                    </div>
                                    <div className="news-container--content_link">
                                        <button className="news-container--content_link__button"> Xem Ngay</button>
                                        <span className="news-container--content_link__tag">
                                            <a href="#" className="news-container--content_link__tag-sub">#SanPham</a>
                                            <a href="#" className="news-container--content_link__tag-sub">#GanDay</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 news-container--content_news">
                                    <div className="news-container--content_box">
                                        <img src="./img/HeadphoneAsus7A.png" alt="Tainghe" className="news-container--content_box__pic"/>
                                        <h4 className="news-container--content_box__tittle">
                                            Tai nghe Asus Attrix 2.0 2020
                                        </h4>
                                        <span className="news-container--content_box__date">
                                            <span className="news-container--content_box__date-sub">Ngày đăng: </span>
                                            <span className="news-container--content_box__date-details">06-07-2020</span>
                                        </span>
                                        <p className="news-container--content_box__introduce">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Laboriosam perspiciatis nihil delectus vero possimus nostrum, 
                                            optio numquam quaerat unde? Aliquam quidem doloribus voluptate
                                             perferendis nostrum quia consequatur beatae repellendus non!
                                        </p>
                                    </div>
                                    <div className="news-container--content_link">
                                        <button className="news-container--content_link__button"> Xem Ngay</button>
                                        <span className="news-container--content_link__tag">
                                            <a href="#" className="news-container--content_link__tag-sub">#SanPham</a>
                                            <a href="#" className="news-container--content_link__tag-sub">#GanDay</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 news-container--content_news">
                                    <div className="news-container--content_box">
                                        <img src="./img/HeadphoneAsus7A.png" alt="Tainghe" className="news-container--content_box__pic"/>
                                        <h4 className="news-container--content_box__tittle">
                                            Tai nghe Asus Attrix 2.0 2020
                                        </h4>
                                        <span className="news-container--content_box__date">
                                            <span className="news-container--content_box__date-sub">Ngày đăng: </span>
                                            <span className="news-container--content_box__date-details">06-07-2020</span>
                                        </span>
                                        <p className="news-container--content_box__introduce">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Laboriosam perspiciatis nihil delectus vero possimus nostrum, 
                                            optio numquam quaerat unde? Aliquam quidem doloribus voluptate
                                             perferendis nostrum quia consequatur beatae repellendus non!
                                        </p>
                                    </div>
                                    <div className="news-container--content_link">
                                        <button className="news-container--content_link__button"> Xem Ngay</button>
                                        <span className="news-container--content_link__tag">
                                            <a href="#" className="news-container--content_link__tag-sub">#SanPham</a>
                                            <a href="#" className="news-container--content_link__tag-sub">#GanDay</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 news-container--content_news">
                                    <div className="news-container--content_box">
                                        <img src="./img/HeadphoneAsus7A.png" alt="Tainghe" className="news-container--content_box__pic"/>
                                        <h4 className="news-container--content_box__tittle">
                                            Tai nghe Asus Attrix 2.0 2020
                                        </h4>
                                        <span className="news-container--content_box__date">
                                            <span className="news-container--content_box__date-sub">Ngày đăng: </span>
                                            <span className="news-container--content_box__date-details">06-07-2020</span>
                                        </span>
                                        <p className="news-container--content_box__introduce">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Laboriosam perspiciatis nihil delectus vero possimus nostrum, 
                                            optio numquam quaerat unde? Aliquam quidem doloribus voluptate
                                             perferendis nostrum quia consequatur beatae repellendus non!
                                        </p>
                                    </div>
                                    <div className="news-container--content_link">
                                        <button className="news-container--content_link__button"> Xem Ngay</button>
                                        <span className="news-container--content_link__tag">
                                            <a href="#" className="news-container--content_link__tag-sub">#SanPham</a>
                                            <a href="#" className="news-container--content_link__tag-sub">#GanDay</a>
                                        </span>
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