import React, { Component } from "react";
import "./styles.css";

export class TodoItem extends Component {
  render() {
    return (
      <div className="form-group form-check">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={this.props.removeItem.bind(this)}
        />
        <label className="form-check-label">{this.props.todoText}</label>
      </div>
    );
  }
}

export default TodoItem;
