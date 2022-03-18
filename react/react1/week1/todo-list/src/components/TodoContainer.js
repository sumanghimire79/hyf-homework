import Todolist from './Todolist';
import DataMyTodo from './Data/DataMyTodo';
import DataYourTodo from './Data/DataYourTodo';
import DataHerTodo from './Data/DataHerTodo';
import { TodoItemHeader } from './TodoItemHeader';
import { DataPerson } from './Data/DataPerson';
import React from 'react';
export function Container() {
  return (
    <div>
      <h1> Todo list </h1>
      <div className="todoDiv">
        <div>
          <TodoItemHeader className="TodoItemHeader" who={DataPerson[0].name} />
          <Todolist TodoData={DataMyTodo} />
        </div>
        <div>
          <TodoItemHeader className="TodoItemHeader" who={DataPerson[1].name} />
          <Todolist TodoData={DataYourTodo} />
        </div>
        <div>
          <TodoItemHeader className="TodoItemHeader" who={DataPerson[2].name} />
          <Todolist TodoData={DataHerTodo} />
        </div>
      </div>
    </div>
  );
}
