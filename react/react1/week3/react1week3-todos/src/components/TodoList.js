// Todolist
import { useState, useEffect } from 'react';
import { TodoItem } from './TodoItem';

const Api =
  'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw';

export const TodoList = () => {
  const [fetchTodo, setFetchTodo] = useState([]);
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    fetch(Api)
      .then((res) => res.json())
      .then((data) => {
        const result = data.map((todo) => ({
          id: todo.id,
          description: todo.description,
          deadline: todo.deadline,
        }));
        setFetchTodo((prev) => [...prev, ...result]);
      });
  }, [setFetchTodo]);

  //add Todo
  const addTodo = () => {
    let newID;
    if (fetchTodo.length === 0) {
      newID = 1;
    } else {
      newID = fetchTodo[fetchTodo.length - 1].id + 1;
    }
    return setFetchTodo([...fetchTodo, { id: newID, description, deadline }]);
  };

  //todo List
  const todoList = () => {
    return fetchTodo.map((inputTodo) => {
      return (
        <TodoItem
          description={inputTodo.description}
          deadline={inputTodo.deadline}
          key={inputTodo.id}
          id={inputTodo.id}
          deletetodo={deleteTodo}
          updateTodo={updateTodo}
        />
      );
    });
  };

  //delete a Todo
  const deleteTodo = (id) => {
    setFetchTodo((prevTodos) => {
      const listAfterDelete = prevTodos.filter((todo) => todo.id !== id);
      return listAfterDelete;
    });
  };

  // update todo
  const updateTodo = (id, description) => {
    const listAfterUpdate = [...fetchTodo].map((todo) => {
      if (todo.id === id) {
        todo.description = description;
      }
      return todo;
    });
    setFetchTodo(listAfterUpdate);
  };

  return (
    <div>
      <h1> All about Todos </h1>

      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <input type="date" onChange={(e) => setDeadline(e.target.value)}></input>
      <button onClick={addTodo}>Add todo</button>
      <h1> List of Todos</h1>
      <section className="todolist"> {todoList()}</section>
    </div>
  );
};
