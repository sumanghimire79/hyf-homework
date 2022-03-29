import { TodosArray, NewTodosArray } from './TodoData';
import React, { useState } from 'react';
import { TodoItem } from './TodoItem';

function TodosMethods() {
  const [todos, setTodos] = useState(TodosArray);

  //add a randomTodo
  function AddRandomTodo() {
    let randomID;
    if (todos.length === 0) {
      randomID = 1;
    } else {
      randomID = todos[todos.length - 1].id + 1;
    }
    const randomTodo = {
      id: randomID,
      ...NewTodosArray[Math.floor(Math.random() * NewTodosArray.length)],
    };
    const AddedListWithRandomTodo = setTodos((todosList) => [
      ...todosList,
      randomTodo,
    ]);
    return AddedListWithRandomTodo;
  }

  //TodoList
  const TodoList = todos.map((todo) => (
    <TodoItem
      description={todo.description}
      checked={todo.checked}
      id={todo.id}
      key={todo.id}
      MarkTodo={MarkTodo}
      DeleteTodo={DeleteTodo}
    />
  ));
  console.log(TodoList);

  //Delete a Todo
  function DeleteTodo(id) {
    setTodos((prevTodos) => {
      const ListAfterDelete = prevTodos.filter((todo) => todo.id !== id);
      console.log(ListAfterDelete);
      return ListAfterDelete;
    });
  }

  //Strike through todos
  function MarkTodo(id) {
    var strikeThroughList = [...todos];
    strikeThroughList.forEach((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
    });
    setTodos(strikeThroughList);
  }

  return todos && todos.length > 0 ? (
    <div className="TodoList">
      <button onClick={AddRandomTodo}> Add Todo </button>
      {TodoList}
    </div>
  ) : (
    <div>
      <button onClick={AddRandomTodo}> Add Todo </button>
      <span> No item left</span>
    </div>
  );
}

export default TodosMethods;
