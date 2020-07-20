import React,{Component} from 'react';
import Slider from './slider';
import Ability from './ability';
import ProductTop from './productTop';
import BannerTop from './BannerSpecail';
import ProductHorizonHP from './productHorizonHP';
import ProductHorizonKB from './ProductHorizonKB';
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
            </div>
        );
    }
}
export default Home;