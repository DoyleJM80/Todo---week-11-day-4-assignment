import {combineReducers} from 'redux';
import TodoReducer from './reducer_todo';
import FilterTodo from './reducer_filter';

const rootReducer = combineReducers({
  todos: TodoReducer,
  filter: FilterTodo
});

export default rootReducer;
