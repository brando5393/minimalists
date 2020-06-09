import React, { Component } from 'react'
import './styles.css'
import TodoList from '../todo-list/TodoList';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state ={userImput: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
            handleChange(event){
                this.setState({userImput: event.target.value});
                console.log(event.target.value)
            }
    
            handleSubmit(event){
                event.preventDefault();
                console.log(this.state)
                if(this.state.userImput !== "" || null){
                    TodoList.push(this.state.userImput);
    
                }else{
                    alert("Sorry but you can't submit a blank todo.");
                }
            }


    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="Enter a todo" name="add-todo" className="form-control" onChange={this.handleChange}/>
                        <button type="submit" className="btn btn-info">Add Item</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default TodoForm