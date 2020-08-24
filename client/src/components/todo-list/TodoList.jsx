import React, { Component } from 'react'
import TodoItem from '../todo-item/TodoItem'
import TodoForm from '../todo-form/TodoForm'
import AppHeader from '../app-header/AppHeader'
import './styles.css'

 
 class TodoList extends Component {
 
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
                        <br/>
                        {/* {this.state.todos.map((todo) => <TodoItem todoText = {todo} />)} */}
                        <TodoItem todoText="hello world" />

                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-12">
                        <TodoForm data = {this.getToDo} />
                    </div>
                </div>
            </div>
        )
    }
}
export default TodoList