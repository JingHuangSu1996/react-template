const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text,
});

const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: id,
});

export { addTodo, deleteTodo };
