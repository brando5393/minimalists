import React from "react";

const TodoForm = (props) => {
  // Destructure the props object to get the handleSubmit, handleChange, value, and disabled functions/variables
  const { handleSubmit, handleChange, value, disabled = false } = props;

  return (
    <div>
      {/* Form to add new todos */}
      <form className="form-inline align-middle text-center" onSubmit={handleSubmit}>
        <div className="form-group">
          {/* Input field to enter new todo */}          <input
            type="text"
            placeholder={disabled ? "Storage unavailable" : "Enter a to-do"}
            name="add-todo"
            className="form-control"
            id="add-todo"
            minLength={1}
            maxLength={255}
            value={value}
            onChange={handleChange}
            disabled={disabled}
          />
          {/* Button to add new todo */}
          <button type="submit" className="btn btn-primary" disabled={disabled}>
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
