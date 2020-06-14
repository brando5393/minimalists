import React from 'react'
import './styles.css'

const TodoItem = (props) => {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox"/>
            <label className="form-check-label">{props.todoText}</label>
        </div>
    )
}

export default TodoItem
