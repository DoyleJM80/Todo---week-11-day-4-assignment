import React, { Component } from 'react';
import '../styles/App.css';
import TodoList from '../containers/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
