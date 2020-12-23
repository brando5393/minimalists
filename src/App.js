import React, { useState } from "react";
import TodoItem from "./components/todo-item/TodoItem";
import TodoForm from "./components/todo-form/TodoForm";
import AppHeader from "./components/app-header/AppHeader";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const App = (props) => {
  const [state, setState] = useState({
    todos: [],
    userInput: "",
    showAlert: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      userInput: event.target.value.toLowerCase(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.userInput !== "") {
      setState({
        ...state,
        todos: [...state.todos, { id: uuidv4(), text: state.userInput }],
        userInput: "",
      });
    } else {
      setState({
        ...state,
        showAlert: true,
      });
    }
  };

  const removeItem = (todo, id) => {
    // search through this.state.todos and find item that corresponds to clicked item
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-12">
          <AppHeader image="https://image.flaticon.com/icons/svg/839/839746.svg" />
        </div>
      </div>
      <div className="row">
        <div className="col col-lg-12">
          <h3>My To-dos</h3>
          {state.todos.map((todo) => (
            <TodoItem key={todo.id} text={todo.text} onchecked={removeItem} />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col col-lg-12">
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


testing 123