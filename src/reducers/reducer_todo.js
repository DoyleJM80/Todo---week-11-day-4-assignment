import _ from 'lodash';

const todos = [
  {todo: 'eat', completed: false},
  {todo: 'sleep', completed: false}
];

export default function(state = todos, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.payload, ...state];
      break;
    default: return state;

  }
}
