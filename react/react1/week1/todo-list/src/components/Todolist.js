import React from 'react';
import TodoItem from './TodoItem';

const Todolist = (props) => {
  return (
    <div>
      <ul>
        {props.TodoData.map((list) => {
          return <TodoItem job={list.job} date={list.date} />;
        })}
      </ul>
    </div>
  );
};

export default Todolist;
