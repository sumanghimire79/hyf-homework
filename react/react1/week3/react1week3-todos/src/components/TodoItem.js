// TodoItem

// imports
import { FancyBorder } from './FancyBorder';
import { useState } from 'react';
import './react1w3hw.css';

export const TodoItem = ({
  description,
  deadline,
  deletetodo,
  id,
  updateTodo,
}) => {
  const [through, setThrough] = useState('unchecked');
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState('');

  //line-through
  const lineThrough = () => {
    return setThrough((perv) => {
      return perv === 'unchecked' ? 'checked' : 'unchecked';
    });
  };

  //sets input field to edit
  const clickToEdit = () => {
    setEditing(true);
    setUpdateInput(description);
  };

  //input fild allows added text input
  const updateInputText = (e) => {
    const value = e.target.value;
    console.log(value);
    setUpdateInput(value);
  };

  //update
  const ClickToUpdate = () => {
    setEditing(false);
    updateTodo(id, updateInput);
  };

  return (
    <div>
      <FancyBorder>
        <label htmlFor="strike" className={through}>
          {editing ? (
            <input type="text" value={updateInput} onChange={updateInputText} />
          ) : (
            description
          )}{' '}
          || {deadline}
        </label>
        <input type="checkbox" onChange={lineThrough} />

        <button onClick={() => deletetodo(id)}>Delete</button>

        {editing ? (
          <button onClick={ClickToUpdate}>Update</button>
        ) : (
          <button onClick={clickToEdit}>edit</button>
        )}
      </FancyBorder>
    </div>
  );
};
