import React,{Component} from 'react';
import Slider from './slider';
import Ability from './ability';
import ProductTop from './productTop';
import BannerTop from './BannerTop';
import ProductHorizonHP from './productHorizonHP';
import ProductHorizonKB from './ProductHorizonKB';
import BannerMid from './BannerMid';
import ProductHorizonMouse from './ProductHorizonMouse';
import ProductHorizonSC from './ProductHorizonSC';
class Home extends Component {
    render(){
        return (
            <div>
                <Slider />
                <Ability />
                <ProductTop />
                <BannerTop />
                <ProductHorizonHP />
                <ProductHorizonKB />
                <BannerMid />
                <ProductHorizonMouse />
                <ProductHorizonSC />
            </div>
        );
    }
}
export default Home;