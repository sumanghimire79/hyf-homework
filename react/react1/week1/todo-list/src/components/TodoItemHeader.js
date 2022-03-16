import React from 'react';
export function TodoItemHeader(props) {
  const { who } = props;
  return (
    <div className="TodoItemHeader">
      <h3> {who} todo list</h3>
    </div>
  );
}
