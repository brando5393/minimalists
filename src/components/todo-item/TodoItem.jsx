import React from "react";
import Linkify from "react-linkify";

const TodoItem = (props) => {

  // Function to convert timestamp to a human-readable format
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Convert timestamp to a localized date and time string
  };

  return (
    <div className="form-group form-check">
      {/* The checkbox that toggles the completed state of the todo */}
      <input
        className="form-check-input"
        type="checkbox"
        onChange={props.onChecked}
      />
      {/* The label that displays the todo text */}
      <label className="form-check-label"><Linkify>{props.text}</Linkify></label>
      {/* timestamp */}
      <span className="timestamp">{formatTimestamp(props.timestamp)}</span>
    </div>
  );
};

export default TodoItem;
