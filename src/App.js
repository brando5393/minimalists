import React, { useState, useEffect } from "react";
import TodoItem from "./components/todo-item/TodoItem";
import TodoForm from "./components/todo-form/TodoForm";
import AppHeader from "./components/app-header/AppHeader";
import OfflineIndicator from "./components/offline-indicator/OfflineIndicator";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import useScrollToBottom from "./hooks/useScrollToBottom";
import useOnlineStatus from "./hooks/useOnlineStatus";
import OfflineStorage from "./utils/OfflineStorage";

const App = (props) => {
  // Get online status
  const isOnline = useOnlineStatus();
  
  // Define initial state for the app
  const [state, setState] = useState({
    todos: OfflineStorage.loadTodos(), // Load saved todos using enhanced storage
    userInput: "", // User input for new todo item
    showAlert: false, // Flag for displaying alert message when user submits an empty todo item
    storageError: false, // Flag for storage errors
  });  // Save todos to localStorage whenever the todos state is updated
  useEffect(() => {
    const saveSuccess = OfflineStorage.saveTodos(state.todos);
    if (!saveSuccess && state.todos.length > 0) {
      setState(prevState => ({
        ...prevState,
        storageError: true
      }));
    } else if (saveSuccess && state.storageError) {
      setState(prevState => ({
        ...prevState,
        storageError: false
      }));
    }
  }, [state.todos, state.storageError]);

  // Check storage availability on mount
  useEffect(() => {
    if (!OfflineStorage.isStorageAvailable()) {
      console.warn('localStorage is not available');
      setState(prevState => ({
        ...prevState,
        storageError: true
      }));
    }
  }, []);

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
    if (state.userInput.trim() !== "") {
      // Add new todo item to the list and reset the userInput state
      setState({
        ...state,
        todos: [...state.todos, { id: uuidv4(), text: state.userInput.trim(), timestamp: Date.now() }],
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
    // Note: No need for manual localStorage.setItem here as useEffect handles it
  };

  const todoListContainerRef = useScrollToBottom(state.todos);
  return (
    <div className="container">
      {/* Offline Indicator */}
      <OfflineIndicator isOnline={isOnline} />
      
      <div className="row">
        <div className="col col-lg-12">
          <AppHeader image="../logo.png" />
        </div>
      </div>      <div className="row">
        <div className="col col-lg-12">
          <h3>My To-dos</h3>
          <div ref={todoListContainerRef} className="to-dosContainer">
            {/* Map over the todo items and render a TodoItem component for each one */}
            {state.todos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                timestamp={todo.timestamp}
                onChecked={() => removeItem(todo.id)}
              />
            ))}
          </div>
          {/* Display an alert message if the user submitted an empty todo item */}
          {state.showAlert && (
            <div className="alert alert-danger">Please enter a to-do item.</div>
          )}
          {/* Display storage error message */}
          {state.storageError && (
            <div className="alert alert-warning">
              Warning: Unable to save changes. Your todos may not persist.
            </div>
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
            disabled={state.storageError}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
