import { useState } from 'react';
import { NewTodosArray, TodosArray } from './TodoData';

export function AddRandomTodo() {
  const [useTodo, setUseTodo] = useState(TodosArray);
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
// export default AddRandomTodo;
