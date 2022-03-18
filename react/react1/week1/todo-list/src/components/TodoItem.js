import React from 'react';
function TodoItem(props) {
  return (
    <li>
      {props.job} , {props.date}
    </li>
  );
}
export default TodoItem;
