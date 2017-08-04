import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, removeTodo, toggleTodo} from '../actions/index';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      completed: false
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  addTodo(event) {
    event.preventDefault();
    let todo = {todo: this.state.todo, completed: false}
    this.props.addTodo(todo);
    console.log(todo);
  };

  handleChange(event) {
    this.setState({todo: event.target.value});
  };

  render() {
    let todos = this.props.todos.map((todo, index) => {
      console.log(todo);
      return (<div key={index}>
        <span><li>{todo.todo}<input onChange={() => this.props.toggleTodo(todo)} type="checkbox"/><input onClick={() => this.props.removeTodo(todo)} type="button" value="remove"/></li></span>

      </div>)
    })
    return(
      <div>
        <form onSubmit={this.addTodo}>
          <input onChange={this.handleChange} name="todo" type="text" placeholder="add todo"/>
          <input type="submit"/>
        </form>
        <ul>
          {todos}
        </ul>
      </div>
    );
  };
};

function mapStateToProps(state) {
  let todos = state.todos;
  return {
    todos: todos
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodo: addTodo,
    removeTodo: removeTodo,
    toggleTodo: toggleTodo

  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
