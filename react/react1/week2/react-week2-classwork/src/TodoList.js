import React, { useState } from 'react';
const initTodos = [
  {
    text: 'clean room',
    id: 1,
  },
  {
    text: 'do pushups',
    id: 2,
  },
];

export function TodoList() {
  const [todosState, setTodosState] = useState(initTodos);
  const [inputState, setInputState] = useState(0);
  console.log(todosState);
  let newID;

  if (todosState.length === 0) {
    newID = 1;
  } else {
    newID = todosState[todosState.length - 1].id + 1;
  }

  const addTodo = () => {
    const newTodo = { text: 'learn React', id: newID };
    setTodosState((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const deleteTodo = () => {
    const idtoRemove = inputState;
    setTodosState((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== Number(idtoRemove));
    });
  };

  const todoItems = todosState.map((todo) => (
    <TodoItem text={todo.text} key={todo.id}></TodoItem>
  ));

  return (
    <div className="App">
      <button onClick={addTodo}>Add todo</button>
      {todoItems}

      <input
        type="number"
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
      />
      <button onClick={deleteTodo}>Delete todo</button>
    </div>
  );
}

function TodoItem({ text }) {
  return <li>{text}</li>;
}
