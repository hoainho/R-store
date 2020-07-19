import React,{Component} from 'react';
import Slider from './slider';
import Ability from './ability';
class Home extends Component {
    render(){
        return (
            <div>
                <Slider />
                <Ability />
            </div>
        );
    }
}
export default Home;