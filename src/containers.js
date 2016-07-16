// React-redux allows us to create store-aware containers that wrap around our
// components, so we don't have to change our original implementations.

import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo } from './actions';


export const TodoList = connect(                   // We create containers with the connect function. When called we pass two functions.
  function mapStateToProps(state) {                // The first is the mapStateToProps function which takes the stores current state as an argument (in our case a list of todos)
    return { todos: state };                       //  then it expects the return value to be an object that describes a mapping from that state to props for our wrapped component
  },                                               //   -- visualization on an instance of the wrapped React component <TodoList todos={state} />
  function mapDispatchToProps(dispatch) {          // The second function passed to connect is mapDispatchToProps which is passed the store's dispatch method
    return {                                       //  so we can use it to dispatch the actions from our action creators.
      addTodo: text => dispatch(addTodo(text)),    //  -- visualization ->  <TodoList todos={state}
      toggleTodo: id => dispatch(toggleTodo(id))   //                                 addTodo={text => dispatch(addTodo(text))}
    };                                             //                                 toggleTodo={id => dispatch(toggleTodo(id))} />
  }
)(components.TodoList);
