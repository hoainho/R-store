import React,{Component} from 'react';
import Slider from './slider';
import Ability from './ability';
import ProductTop from './productTop';
import BannerTop from './BannerSpecail';
class Home extends Component {
    render(){
        return (
            <div>
                <Slider />
                <Ability />
                <ProductTop />
                <BannerTop />
            </div>
        );
    }
}
export default Home;