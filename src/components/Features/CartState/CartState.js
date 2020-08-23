import React, { Component }from 'react';
import CartStateControl from './CartStateControl';
import CartStateStorage from './CartStateStorage';
import {findIndex} from 'lodash'
 export default class CartState extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id : 0
        }
    }
    onDeletee = (id) =>{
        console.log(this.props.id);
        // this.setState({id: id})
        // var {tasks} = this.props;
        // console.log(id);
        // if(confirm('Are you sure delete cart ?')){ //eslint-disable-line
           
        // var index = findIndex(tasks, (item)=>{
        //     return item.id === id
        // })
        // if(index !== -1){
        //     tasks.splice(index,1);
        //     this.setState({
        //         tasks  : tasks
        //     });
        // }
        // localStorage.setItem('tasks',JSON.stringify(tasks));
        // }
      
        
    }
    
    render(){
        var { tasks } = this.props;
        var elmTasks = tasks.map((task,index) => {
            return <CartStateStorage key={task.id} 
                                    index={index} 
                                    task ={task}
                                    findIndex = {this.props.findIndex}
                                    onDelete ={this.props.onDelete}
                                    /> 
            
        });
        
        return ( 
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 cart-container--storage">
                <table class="table table-hover ">
                    <thead>
                        <tr>
                            <th className="center-text">Sản phẩm</th>
                            <th className="center-text">Giá</th>
                            <th className="center-text">Số Lượng</th>
                            <th className="center-text">Tổng cộng</th>
                        </tr>
                    </thead>
                    <tbody>
                     {elmTasks} 
                    </tbody>
                    
                </table>
                
                <CartStateControl id={this.state.id} tasks={tasks}/>
            </div>
        );
    }
}