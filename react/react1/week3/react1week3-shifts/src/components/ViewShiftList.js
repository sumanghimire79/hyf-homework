import React from 'react';

export function ViewShiftList({ name, start, end, deleteShift }) {
  console.log(start);
  const startEntry = start.split(':');
  const startMinutes = Number(startEntry[0]) * 60 + Number(startEntry[1]);
  const endEntry = end.split(':');
  const endMinutes = Number(endEntry[0]) * 60 + Number(endEntry[1]);
  const totalMinutes = endMinutes - startMinutes;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const workingTime = ` ${hours} hours, ${minutes} minutes`;
  const rate = 120;
  const total = totalMinutes * (rate / 60);

  return (
    <div>
      <ul className="ViewShiftUl">
        <li>
          <strong>Name: </strong> {` ${name}`}
        </li>

        <li>
          <strong>Start-Time: </strong>
          {` ${start}`}
        </li>
        <li>
          <strong> End-Time: </strong> {` ${end}`}
        </li>
        <li>
          <strong>Rate: </strong>
          {` ${rate}`}/hour
        </li>
        <li>
          <strong> Total Price: </strong>
          {`${total} Dkk `}
          {` (${workingTime})`}
        </li>
        <li>
          <button onClick={() => deleteShift(name)}>delete shift</button>
        </li>
      </ul>
    </div>
  );
}
