import React, { Component } from 'react'
import TodoItem from '../todo-item/TodoItem'
import TodoForm from '../todo-form/TodoForm'
import AppHeader from '../app-header/AppHeader'
import './styles.css'

//  this.state={}
 
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