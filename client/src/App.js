
import React, { Component } from 'react'
import logo from './logo.svg';
import TodoList from './components/todo-list/TodoList'
import './App.css';


class App extends Component {

  render() {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}


export default App;
