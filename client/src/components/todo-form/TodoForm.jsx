import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      alertBlankTodo: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // showAlert() {
  //   this.setState({ alertBlankTodo: true });
  // }

  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.userInput !== "") {
      this.props.addTodo(this.state.userInput.toLowerCase().trim(), uuidv4());
      this.setState({ userInput: "" });
    } else {
      // showAlert();
    }
  }

  render() {
    return (
      <div>
        <form
          className="form-inline align-middle text-center"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter a todo"
              name="add-todo"
              className="form-control"
              id="add-todo"
              value={this.state.userInput}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Add Item
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default TodoForm;
