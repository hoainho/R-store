import React,{Component} from 'react';
import Slider from './slider';
import Ability from './ability';
import ProductTop from './productTop';
class Home extends Component {
    render(){
        return (
            <div>
                <Slider />
                <Ability />
                <ProductTop />
            </div>
        );
    }
}
export default Home;