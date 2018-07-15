let nextTodoId = 0

export const addTodo = () => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text: '',
});

export const editTodo = (payload) => ({
  type: 'EDIT_TODO',
  ...payload,
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id,
});
