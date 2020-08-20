import React, { Component }from 'react';
import CartStateControl from './CartStateControl';
import CartStateStorage from './CartStateStorage';
 export default class CartState extends Component {
    render(){
        return ( 
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 cart-container--storage">
                <CartStateStorage />    
                <CartStateControl />
            </div>
        );
    }
}