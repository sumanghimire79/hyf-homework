import './shift.css';
import { useState } from 'react';
export function ViewShift({
  id,
  name,
  startTime,
  endTime,
  deleteShift,
  MarkTodo,
  searchName,
  searchStart,
  searchEnd,
}) {
  const [line, setLine] = useState('unchecked');
  //Strike through Todos
  function lineThrough() {
    setLine((previous) => (previous === 'unchecked' ? 'checked' : 'unchecked'));
  }

  const time = new Date().getTime(startTime);
  console.log(time);

  return (
    <div>
      <ul>
        <li>
          {searchName} {searchStart} {searchEnd}
        </li>
      </ul>

      <ul className="ViewShiftUl">
        <li>
          <strong>Name:</strong> {name}
        </li>
        <li>
          <strong>Start-Time:</strong>
          {startTime}
        </li>

        <li>
          <strong> End-Time:</strong> {endTime}
        </li>
        <li>
          <strong> Total hours :</strong>
        </li>

        <li>
          <span className={line === 'unchecked' ? 'checked' : 'unchecked'}>
            <input type="checkbox" onChange={lineThrough}></input>
          </span>
          <button onClick={() => deleteShift(id)}>delete shift</button>
        </li>
      </ul>
    </div>
  );
}
