import React, { Component } from 'react';
import {
    BrowserRouter as Link
} from 'react-router-dom';

export default class Title extends Component {
    render(){
        return (
            
                <div class="store-tittle news-tittle">
                    <div class="store-tittle--container">
                        <Link to="/Home" class="store-tittle--container_home">Trang chủ</Link>
                        <span class="store-tittle--container_iconpresent special">
                            {'>'} 
                        </span>
                        <span class="store-tittle--container_present special">
                             Thông tin
                        </span>
                    </div>
                </div>
        );
    }
}