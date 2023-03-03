import React from "react";

const TodoForm = (props) => {
  // Destructure the props object to get the handleSubmit, handleChange and value functions/variables
  const { handleSubmit, handleChange, value } = props;

  return (
    <div>
      {/* Form to add new todos */}
      <form className="form-inline align-middle text-center" onSubmit={handleSubmit}>
        <div className="form-group">
          {/* Input field to enter new todo */}
          <input
            type="text"
            placeholder="Enter a todo"
            name="add-todo"
            className="form-control"
            id="add-todo"
            value={value}
            onChange={handleChange}
          />
          {/* Button to add new todo */}
          <button type="submit" className="btn btn-primary">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
