import React, { Component } from 'react';
import Title from './Title';
import Content from './Content';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

export default class Main extends Component {
    render(){
        return (
                <div class="about">
                    <div class="row about-story">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 about-story--pic">
                            <img src="/img/MyBg.png" alt="" class="about-story--pic_details">
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 about-story--content">
                            <h3 class="about-story--content_tittle">
                                Tiểu sử     
                            </h3>
                            <p class="about-story--content_details">
                                "Lorem Khaled Ipsum is a major key to success.
                                 They don’t want us to win. Always remember in the 
                                 jungle there’s a lot of they in there, after you 
                                 overcome they, you will make it to paradise. 
                                 Major key, don’t fall for the trap, stay focused.
                                It’s the ones closest to you that want to see you fail. 
                                Major key, don’t fall for the trap, stay focused. 
                                It’s the ones closest to you that want to see you fail. 
                                You see the hedges, how I got it shaped up? 
                                It’s important to shape up your hedges, 
                                it’s like getting a haircut, stay fresh."
                            </p>
                        </div>
                        
                        
                    </div>
                    <div class="about-service"> 
                        <div class="about-service--content">
                            <h3 class="about-service--content_tittle">
                                Dịch vụ
                            </h3>
                            <p class="about-service--content_details">
                                "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica"

                            </p>
                        </div>
                        <div class="row about-service--container">
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 about-service--container_box">
                                <div class="about-service--container_box__main">
                                    <span class="special about-service--container_box__ordinal">
                                        01.
                                    </span>
                                    <span class="about-service--container_box__slogan">
                                        Sell Technology
                                    </span>
                                    <p class="about-service--container_box__content">
                                        Lorem Khaled Ipsum is a major key to success. We the best. Celebrate success right, the only way, apple
                                    </p>
                                </div>
                                
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 about-service--container_box">
                                <div class="about-service--container_box__main">
                                    <span class="special about-service--container_box__ordinal">
                                        02.
                                    </span>
                                    <span class="about-service--container_box__slogan">
                                        Guarantee service Technology
                                    </span>
                                    <p class="about-service--container_box__content">
                                        Lorem Khaled Ipsum is a major key to success. We the best. Celebrate success right, the only way, apple
                                    </p>
                                </div>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 about-service--container_box">
                                <div class="about-service--container_box__main">
                                    <span class="special about-service--container_box__ordinal ">
                                        03.
                                    </span>
                                    <span class="about-service--container_box__slogan">
                                        Worldwide Delivery
                                    </span>
                                    <p class="about-service--container_box__content">
                                        Lorem Khaled Ipsum is a major key to success. We the best. Celebrate success right, the only way, apple
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about-slogan">
                        <div class="about-slogan--container">
                            <span class="about-slogan--container_symbos big-size">
                                "
                            </span>
                            <p class="about-slogan--container_content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque debitis eveniet sapiente. Necessitatibus expedita quos ex error voluptate, voluptatem nisi autem quis voluptatum voluptas, repellendus suscipit quibusdam ipsa minima.
                            </p>
                        </div>
                    </div>
                    <div class="about-team">
                        <div class="about-team--header">
                            <h3 class="about-team--header_tittle">Thành Viên</h3>
                            <p class="about-team--header_content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi impedit reprehenderit quia expedita omnis tempora sunt. Nobis cum, accusamus ut voluptates libero voluptatum deleniti atque amet, facere in autem!</p>
                        </div>
                        <div class="about-team--container">
                            <div class="row about-team--container_main">
                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 about-team--container_main__box">
                                    <img src="./img/MyBg.png" alt="" class="about-team--container_main__box-pic">
                                    <h5 class="about-team--container_main__box-name">Rem</h5>
                                    <span class="about-team--container_main__box-regency">CEO & Người sáng lập</span>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 about-team--container_main__box">
                                    <img src="./img/MyBg.png" alt="" class="about-team--container_main__box-pic">
                                    <h5 class="about-team--container_main__box-name">Rem</h5>
                                    <span class="about-team--container_main__box-regency">CEO & Người sáng lập</span>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 about-team--container_main__box">
                                    <img src="./img/MyBg.png" alt="" class="about-team--container_main__box-pic">
                                    <h5 class="about-team--container_main__box-name">Rem</h5>
                                    <span class="about-team--container_main__box-regency">CEO & Người sáng lập</span>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 about-team--container_main__box">
                                    <img src="./img/MyBg.png" alt="" class="about-team--container_main__box-pic">
                                    <h5 class="about-team--container_main__box-name">Rem</h5>
                                    <span class="about-team--container_main__box-regency">CEO & Người sáng lập</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
        );
    }
}