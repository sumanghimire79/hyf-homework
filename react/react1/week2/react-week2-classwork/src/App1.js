/* import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

const TodoHeader = (props) => {
  return <h2>{props.text}</h2>;
};

const TodoListRow = (props) => {
  return <li>{props.todo}</li>;
};
const TodoList = (props) => {
  // console.log(props);
  return (
    <ul>
      {props.todos.map((todo) => {
        return <TodoListRow key={todo} todo={todo} />;
      })}
    </ul>
  );
};

const todoArray = ['todo 1', 'todo 2', 'todo 3', 'todo 4'];

function App() {
  const [todos, setTodos] = useState(todoArray);
  console.log(todos);
  console.log(setTodos);
  return (
    <div className="App">
      <div>
        <TodoHeader text="todo list" />
        <TodoList todos={todoArray} />
        <button> Add new todo</button>
      </div>
    </div>
  );
}

export default App;
 */
