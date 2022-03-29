import { todosArray, randomTodosArray } from './TodoData';
import React, { useState } from 'react';
import { TodoItem } from './TodoItem';

function TodosMain() {
  const [todos, setTodos] = useState(todosArray);

  //add a randomTodo
  function addRandomTodo() {
    let randomID;
    if (todos.length === 0) {
      randomID = 1;
    } else {
      randomID = todos[todos.length - 1].id + 1;
    }
    const randomTodo = {
      id: randomID,
      ...randomTodosArray[Math.floor(Math.random() * randomTodosArray.length)],
    };
    const addedListWithRandomTodo = setTodos((todosList) => [
      ...todosList,
      randomTodo,
    ]);
    return addedListWithRandomTodo;
  }

  //todoList
  const todoList = todos.map((todo) => (
    <TodoItem
      description={todo.description}
      checked={todo.checked}
      id={todo.id}
      key={todo.id}
      markTodo={markTodo}
      deleteTodo={deleteTodo}
    />
  ));

  //delete a todo
  function deleteTodo(id) {
    setTodos((prevTodos) => {
      const todosAfterDelete = prevTodos.filter((todo) => todo.id !== id);
      return todosAfterDelete;
    });
  }

  //line-through a todo
  function markTodo(id) {
    const todosForLineThrough = [...todos];
    todosForLineThrough.forEach((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
    });
    setTodos(todosForLineThrough);
  }

  if (todos && todos.length > 0) {
    return (
      <div className="todoList">
        <button onClick={() => addRandomTodo()}> Add Todo </button>
        {/* <button onClick={addRandomTodo}> Add Todo </button> ** both way works. what is the difference in this function call. But in props/callback must use ()=>  */}
        {todoList}
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => addRandomTodo()}> Add Todo </button>
        <span> No more item left</span>
      </div>
    );
  }
}

export default TodosMain;
