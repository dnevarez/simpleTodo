// Reducer is a function that takes a state and an action and uses them to
// compute a new state.

import { List, Map } from 'immutable';

const init = List([]);

export default function reducer(todos=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload)); // converting the todo object into immutable map before it's pushed onto the list
    case 'TOGGLE_TODO':
      return todos.map(t => {                             // Using .map() to iterate over the list and find the todo whose
        if(t.get('id') === action.payload) {              // id matches the action. Then we call .update() method, which takes a key
          return t.update('isDone', isDone => !isDone);   // and a function, then it returns a new copy of the map, with the value at
        } else {                                          // the key replaced with the result of passing the initial value to the update
          return t;                                       // function.   Literal verision of what is happening below.
        }                                                         // - const todo = Map({ id: 0, text: 'foo', isDone: false });
      });                                                         //   todo.update('isDone', isDone => !isDone);
    default:                                                      //   => { id: 0, text: 'foo', isDone: true }
      return todos;
  }
}
