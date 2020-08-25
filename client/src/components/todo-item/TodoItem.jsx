import React, { Component } from 'react'
import './styles.css'

export class TodoItem extends Component {
    render() {
        return (
        <div className="form-group form-check">
            <input className="form-check-input" type="checkbox" onChange = {this.props.removeItem.bind(this), null}/>
            <label className="form-check-label">{this.props.todoText}</label>
        </div>
        )
    }
}

export default TodoItem
