import React, { Component } from 'react'
import TodoItem from '../todo-item/TodoItem'
import TodoForm from '../todo-form/TodoForm'
import './styles.css'

//  this.state={}
 
 class TodoList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12">
                        <h3>My Todos</h3>
                        <br/>
                        {/* Todo items should appear here */}

                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-12">
                        <TodoForm />
                    </div>
                </div>
            </div>
        )
    }
}
export default TodoList