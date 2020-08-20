import React, { Component }from 'react';
import { connect } from 'react-redux';
import CartState from './CartState/CartState';
import CartPay from './CartPay/CartPay';
 class Cart extends Component {
    constructor(props) {
        super(props);
        this.state ={
            tasks : []
        }
    }
    componentWillMount(){
        if(localStorage != null && localStorage.getItem('tasks')){
            var tasks =  JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks
            });
        }
        console.log(tasks);
    }
    
    onGenerateData = () => {
        
        var tasks = [{
            id : this.generateID(),
            name: "Tai Nghe Acer Alpha 2",
            price : 700000,
            quanlity : 2
       },
        {
            id : this.generateID(),
            name: "Tai Nghe Asus Nitro 5",
            price : 500000,
            quanlity : 3
        },
        {
            id : this.generateID(),
            name: "Tai Nghe Lenovo Atrix 1.0",
            price : 500000,
            quanlity : 1
        },
    ];
    this.setState ({
        tasks : tasks
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
    }

    s4(){
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    generateID(){
        return this.s4() + this.s4() + '-' +this.s4() + '-' + this.s4() + this.s4() + this.s4() + '-' +this.s4() ;
    }
    render(){
        var {tasks} = this.state;
        return (
            <div>
                <div className="store-tittle news-tittle">
                    <div className="store-tittle--container">
                        <a href="#home" className="store-tittle--container_home">Trang chủ</a>
                        <span className="store-tittle--container_iconpresent special">
                            {'>'}
                        </span>
                        <span className="store-tittle--container_present special">
                             Giỏ Hàng
                        </span>
                    </div>
                </div>
                <div className="cart"> 
                    <div className="row cart-container">  
                        <button onClick={ this.onGenerateData } className="btn btn-danger"> Generate Data </button>
                        <CartState tasks = { tasks } />
                        <CartPay />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks : state.task,
    }
}
export default connect(mapStateToProps,null)(Cart);