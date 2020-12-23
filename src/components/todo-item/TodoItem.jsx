import React from "react";

const TodoItem = (props) => {
  return (
    <div className="form-group form-check">
      <input
        className="form-check-input"
        type="checkbox"
        onClick={props.onCheck}
      />
      <label className="form-check-label">{props.text}</label>
    </div>
  );
};

export default TodoItem;
