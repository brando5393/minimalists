import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TodoItem from '../todo-item/TodoItem'
import TodoForm from '../todo-form/TodoForm'
import AppHeader from '../app-header/AppHeader'
import './styles.css'

 
 class TodoList extends Component {
    // setup state here
    state = { 
        todos: []
    }

    removeItem = todo =>{
        console.log('remove event triggered');
    };

    addItem = todo =>{
        console.log(todo);
        this.setState({todos: [...this.state.todos, todo]});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12">
                        <AppHeader image="https://image.flaticon.com/icons/svg/839/839746.svg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-12">
                        <h3>My To-dos</h3>
                        {/* Render all todoitems here */}
                        {/* Replace key with todo id when db is configured */}
                        {this.state.todos.map((todo) => <TodoItem key = {null} todoText = {todo} removeItem = {this.removeItem} />)}

                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-12">
                        <TodoForm addTodo={this.addItem} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList