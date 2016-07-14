// Actions update shape and structure. Only two are required for this
// app. One to add a new todo and the other to toggle an existing one.
// Each action is simply a javascript object with the type and payload properties.
// The type property will help us decide what to do with the payload.

// succinct hack for generating passable unique ids
const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
}
