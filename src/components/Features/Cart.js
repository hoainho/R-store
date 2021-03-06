import React, { Component }from 'react';
import { connect } from 'react-redux';
import CartState from './CartState/CartState';
import CartPay from './CartPay/CartPay';
import { Link } from 'react-router-dom';
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
                tasks 
            });
        }
    }
    onAddTask = () => {
        // var tasks = [{
        //     id,
        //     name,
        //     price,
        //     quantity 
        // }];
        // this.setState({
        //     tasks  : tasks
        // });
        // localStorage.setItem('tasks',JSON.stringify(task));
    }
    onGenerateData = () => {

        var tasks = [{
            id : this.generateID(),
            name: "Tai Nghe Acer Alpha 2",
            price : 700000,
            quantity : 2
       },
        {
            id : this.generateID(),
            name: "Tai Nghe Asus Nitro 5",
            price : 500000,
            quantity : 3
        },
        {
            id : this.generateID(),
            name: "Tai Nghe Lenovo Atrix 1.0",
            price : 500000,
            quantity : 1
        },
    ];
    this.setState ({
        tasks : tasks
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));

    }
    findIndex = (id) => {
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach((task,index) => {
            if(task.id === id) {
                result = index;
            }
        });
        return result;
    }
    onDelete = (id) =>{
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if(index !== -1){
            tasks.splice(index,1);
            this.setState({
                tasks  : tasks
            });
        }
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
                        <Link to="/" className="store-tittle--container_home">Trang chủ</Link>
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
                        {/* <button onClick={ this.onGenerateData } className="btn btn-danger"> Generate Data </button> */}
                        <CartState tasks = { tasks } onDelete={ this.onDelete } />
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