import React from "react";

const TodoForm = (props) => {
  return (
    <div>
      <div>
        <form
          className="form-inline align-middle text-center"
          onSubmit={props.handleSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter a todo"
              name="add-todo"
              className="form-control"
              id="add-todo"
              value={props.value}
              onChange={props.handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
