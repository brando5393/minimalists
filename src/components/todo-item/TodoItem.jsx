import React from "react";

const TodoItem = (props) => {
  return (
    <div className="form-group form-check">
      {/* The checkbox that toggles the completed state of the todo */}
      <input
        className="form-check-input"
        type="checkbox"
        onChange={props.onChecked}
      />
      {/* The label that displays the todo text */}
      <label className="form-check-label">{props.text}</label>
    </div>
  );
};

export default TodoItem;
