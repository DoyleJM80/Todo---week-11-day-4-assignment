export function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    payload: todo
  };
};

export function removeTodo(todo) {
  return {
    type: 'REMOVE_TODO',
    payload: todo
  };
};

export function toggleTodo(todo) {
  return {
    type: 'TOGGLE_TODO',
    payload: todo
  };
};

export function filterTodo(filterType) {
  return {
    type: 'FILTER_TODO',
    payload: filterType
  };
};
