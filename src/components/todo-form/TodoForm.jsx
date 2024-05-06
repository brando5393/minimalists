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
            placeholder="Enter a to-do"
            name="add-todo"
            className="form-control"
            id="add-todo"
            minLength={1}
            maxLength={255}
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
