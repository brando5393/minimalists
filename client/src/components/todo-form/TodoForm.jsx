import React, { Component } from 'react'
import './styles.css'

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            userInput: ""
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
            handleChange(event){
                this.setState({userInput: event.target.value});
                // console.log(event.target.value)
            }
    
            handleSubmit(event){
                event.preventDefault();
                // console.log(this.state)
                if(this.state.userInput !== ""){
                    console.log(this.state.userInput);
                   this.props.addTodo(this.state.userInput.trim());
                   this.setState({userInput: ""});

    
                }else{
                    return alert("Sorry but you can't submit a blank todo.");
                }
            }


    render() {
        return (
            <div>
                <form className="form-inline align-middle text-center" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="Enter a todo" name="add-todo" className="form-control" id="add-todo" value={this.state.userInput} onChange={this.handleChange}/>
                        <button type="submit" className="btn btn-primary">Add Item</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default TodoForm