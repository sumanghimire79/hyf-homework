import { TodosArray, NewTodosArray } from './TodoData';
import React, { useState } from 'react';

function TodosMethods() {
  const [useTodo, setUseTodo] = useState(TodosArray);

  //TodoList
  const TodoList = useTodo.map((todos) => (
    <TodoItem
      description={todos.description}
      checked={todos.checked}
      id={todos.id}
      key={todos.id}
    />
  ));
  console.log(TodoList);

  //todoItem
  function TodoItem({ description, checked, id }) {
    return (
      <li>
        <span className={checked ? 'checked' : 'unchecked'}>{description}</span>
        <span>
          <input type="checkbox" onChange={() => MarkTodo(id)}></input>
          <button onClick={() => DeleteTodo(id)}>Delete</button>
        </span>
      </li>
    );
  }
  //add a randomTodo
  function AddRandomTodo() {
    let randomID;
    if (useTodo.length === 0) {
      randomID = 1;
    } else {
      randomID = useTodo[useTodo.length - 1].id + 1;
    }
    const randomTodo = {
      id: randomID,
      ...NewTodosArray[Math.floor(Math.random() * NewTodosArray.length)],
    };
    const AddedListWithRandomTodo = setUseTodo((todosList) => [
      ...todosList,
      randomTodo,
    ]);
    return AddedListWithRandomTodo;
  }

  //Delete a Todo
  function DeleteTodo(id) {
    setUseTodo((prevTodos) => {
      const ListAfterDelete = prevTodos.filter((todo) => todo.id !== id);
      console.log(ListAfterDelete);
      return ListAfterDelete;
    });
  }

  //Strike through Todos
  function MarkTodo(id) {
    var strikeThroughList = [...useTodo];
    strikeThroughList.forEach((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
    });
    setUseTodo(strikeThroughList);
  }

  return useTodo && useTodo.length > 0 ? (
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
