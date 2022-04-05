import React from 'react';
export function ViewShiftList({
  id,
  name,
  startTime,
  endTime,
  deleteShift,
 
}) {
const start = startTime.split(':')
const startMinutes= Number(start[0])*60 + Number(start[1]) 
const end = endTime.split(':')
const endMinutes= Number(end[0])*60 + Number(end[1]) 
const totalMinutes = endMinutes - startMinutes
const hours = Math.floor(totalMinutes/60)
const minutes= totalMinutes%60
const workingTime = ` ${hours} hours, ${minutes} minutes`;
const rate = 120;
const total = (totalMinutes*(rate/60))

  return (
    <div>
     
      <ul className="ViewShiftUl">
        <li>
          <strong>Name: </strong> {` ${name}`}
        </li>
        <li>
          <strong>Start-Time: </strong>
          {` ${startTime}`}
        </li>
        <li>
          <strong> End-Time: </strong> {` ${endTime}`}
        </li>
        <li> <strong>Rate: </strong>{` ${rate}`}/hour</li>
        <li> <strong> Total Price: </strong>{`${total} Dkk `}{` (${workingTime})`}</li>
        <li>
          <button onClick={() => deleteShift(id)}>delete shift</button>
        </li>
      </ul>
    </div>
  );
}
