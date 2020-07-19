import React,{Component} from 'react';
import Slider from './slider';
import Ability from './ability';
import ProductTop from './productTop';
import BannerTop from './BannerSpecail';
import ProductHorizon from './productHorizon';
class Home extends Component {
    render(){
        return (
            <div>
                <Slider />
                <Ability />
                <ProductTop />
                <BannerTop />
                <ProductHorizon />
            </div>
        );
    }
}
export default Home;