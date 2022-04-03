import React from 'react';
import TodoItem from './TodoItem';

const Todolist = (props) => {
  return (
    <div>
      <ul>
        {props.TodoData.map((list) => {
          const TodoItem = <TodoItem job={list.job} date={list.date} />;
          return TodoItem;
        })}
      </ul>
    </div>
  );
};

export default Todolist;
