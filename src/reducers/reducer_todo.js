import _ from 'lodash';

const todos = [
  {todo: 'eat', completed: false},
  {todo: 'sleep', completed: false}
];

export default function(state = todos, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
      break;
    case 'REMOVE_TODO':
      return _.reject(state, action.payload);
      break;
    case 'TOGGLE_TODO':
      return state.map((todo) => (todo === action.payload) ? {...todo, completed: !todo.completed} : todo);
      break;
    default: return state;

  }
}
