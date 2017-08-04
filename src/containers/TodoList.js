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
      completed: false,
      filter: 'show all'
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
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

  handleFilter(event) {
    console.log(event.target.value);
    this.setState({filter: event.target.value})
    console.log(this.state.filter);
  };

  render() {

    let todos = this.props.todos.filter((todo) => {
      if(todo.completed && this.state.filter === "show completed") {
        return todo;
      } else if (!todo.completed && this.state.filter === "show uncompleted") {
        return todo
      } else if (this.state.filter === "show all") {
        return todo;
      }
    })

    todos = todos.map((todo, index) => {
      console.log(todo);
      return (<div key={index}>
        <span><li>{todo.todo}<input onChange={() => this.props.toggleTodo(todo)} type="checkbox" checked={todo.completed}/><input onClick={() => this.props.removeTodo(todo)} className="button" type="button" value="remove"/></li></span>

      </div>)
    })
    return(
      <div className="container">
        <form onSubmit={this.addTodo}>
          <input onChange={this.handleChange} name="todo" type="text" placeholder="add todo"/>
          <input className="button" type="submit"/>
        </form>
        <div className="">
          <label><input type="radio" onChange={this.handleFilter} name="filter" value="show all" checked={this.state.filter === 'show all'}/>Show all</label>
          <label><input type="radio" onChange={this.handleFilter} name="filter" value="show uncompleted" checked={this.state.filter === 'show uncompleted'}/>Show uncompleted</label>
          <label><input type="radio" onChange={this.handleFilter} name="filter" value="show completed" checked={this.state.filter === 'show completed'}/>Show completed</label>
        </div>
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
