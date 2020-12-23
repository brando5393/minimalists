import React, { useState } from "react";
import TodoItem from "./components/todo-item/TodoItem";
import TodoForm from "./components/todo-form/TodoForm";
import AppHeader from "./components/app-header/AppHeader";

const App = (props) => {
  const [state, setState] = useState({
    todos: [],
    showAlert: false,
  });

  removeItem = (event) => {
    // search through this.state.todos and find item that corresponds to clicked item
  };

  addItem = (todoText, todoId) => {
    this.setState({
      todos: [...state.todos, { id: todoId, text: todoText }],
    });
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
            <TodoItem
              key={todo.id}
              todoText={todo.text}
              removeItem={removeItem}
            />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col col-lg-12">
          <TodoForm addTodo={addItem} />
        </div>
      </div>
    </div>
  );
};

export default App;
