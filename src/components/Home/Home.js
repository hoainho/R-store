import React, { useState, useEffect} from 'react';
import Slider from './slider';
import Ability from './ability';
import ProductTop from './productTop';
import BannerTop from './BannerTop';
import ProductHorizonHP from './productHorizonHP';
import ProductHorizonKB from './ProductHorizonKB';
import BannerMid from './BannerMid';
import ProductHorizonMouse from './ProductHorizonMouse';
import ProductHorizonSC from './ProductHorizonSC';
import ProductFooter from './ProductFooter';
import Axios from 'axios';
function Home(props){
    const [products, setProducts ] = useState([])

    useEffect(()=> {
        Axios.get("https://5f1446062710570016b37d7d.mockapi.io/Product")
        .then(res => {
            console.log(res)
            const data = res.data;
           setProducts(data);
        })
        .catch(err => console.log(err));
    },[])
        return (
            <div>
                <Slider />
                <Ability />
                <ProductTop products={products}/>
                <BannerTop />
                <ProductHorizonHP products={products}/>
                <ProductHorizonKB products={products}/>
                <BannerMid />
                <ProductHorizonMouse products={products}/>
                <ProductHorizonSC products={products}/>
                <ProductFooter />
            </div>
        );
    
}
export default Home;