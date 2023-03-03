import React, { useState, useEffect } from "react";
import TodoItem from "./components/todo-item/TodoItem";
import TodoForm from "./components/todo-form/TodoForm";
import AppHeader from "./components/app-header/AppHeader";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const App = (props) => {
  // Define initial state for the app
  const [state, setState] = useState({
    todos: JSON.parse(localStorage.getItem("todos")) || [], // Load saved todos from localStorage, or an empty array if none found
    userInput: "", // User input for new todo item
    showAlert: false, // Flag for displaying alert message when user submits an empty todo item
  });

  // Save todos to localStorage whenever the todos state is updated
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  // Handler for updating the userInput state when the user types in the input field
  const handleChange = (event) => {
    setState({
      ...state,
      userInput: event.target.value.toLowerCase(),
    });
  };

  // Handler for adding a new todo item to the list when the user submits the form
  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.userInput !== "") {
      // Add new todo item to the list and reset the userInput state
      setState({
        ...state,
        todos: [...state.todos, { id: uuidv4(), text: state.userInput }],
        userInput: "",
        showAlert: false, // Reset the showAlert flag if it was previously set
      });
    } else {
      // Set the showAlert flag if the user submitted an empty todo item
      setState({
        ...state,
        showAlert: true,
      });
    }
  };

  // Handler for removing a todo item from the list
  const removeItem = (id) => {
    const updatedTodos = state.todos.filter((todo) => todo.id !== id);
    setState({
      ...state,
      todos: updatedTodos,
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-12">
          <AppHeader image="../logo.png" />
        </div>
      </div>
      <div className="row">
        <div className="col col-lg-12">
          <h3>My To-dos</h3>
          {/* Map over the todo items and render a TodoItem component for each one */}
          {state.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              onChecked={() => removeItem(todo.id)}
            />
          ))}
          {/* Display an alert message if the user submitted an empty todo item */}
          {state.showAlert && (
            <div className="alert alert-danger">Please enter a todo item.</div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col col-lg-12">
          {/* Render a TodoForm component for adding new todo items */}
          <TodoForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            value={state.userInput}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
