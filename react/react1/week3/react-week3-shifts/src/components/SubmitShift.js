import './shift.css';
import React, { useState } from 'react';

import { ViewShift } from './ViewShift';
export function SubmitShift() {
  const [inputShift, setInputShift] = useState([
    { id: 1, name: 'suman', startTime: '20:20', endTime: '20:40' },
    { id: 2, name: 'birkam', startTime: '21:20', endTime: '21:40' },
  ]);
  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [searchTerm, setSearchTerm] = useState('');

  // const [inputValue, setInputValue] = useState('');
  // // const [searchedUser, setSearchedUser]= useState([]);
  // const [clicked, setClicked] = useState(false);

  function addShift() {
    let newId;
    if (inputShift.length === 0) {
      newId = 1;
    } else {
      newId = inputShift[inputShift.length - 1].id + 1;
    }
    const addedShift = [...inputShift, { id: newId, name, startTime, endTime }];
    setInputShift(addedShift);
  }

  function deleteShift(id) {
    setInputShift((shifts) => {
      const shiftsAfterDelete = shifts.filter((shift) => shift.id !== id);
      return shiftsAfterDelete;
    });
  }

  function shift() {
    return inputShift.map((shift) => {
      return (
        <div>
          <ViewShift
            name={shift.name}
            startTime={shift.startTime}
            endTime={shift.endTime}
            key={shift.id}
            id={shift.id}
            deleteShift={deleteShift}
          />
        </div>
      );
    });
  }
  const result = inputShift.filter((val) => {
    return val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    // .map((val) => {
    //   return <div>{val}</div>;
    // });
  });
  console.log(result);

  return (
    <div>
      <h4> Submit Shitft</h4>
      <div className="submitShift">
        <input
          type="text"
          placeholder="Employee Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>
          Start Time
          <input
            type="time"
            onChange={(e) => setStartTime(e.target.value)}
            placeholder="Start Time"
          />
        </label>
        <label>
          End Time
          <input
            type="time"
            onChange={(e) => setEndTime(e.target.value)}
            placeholder="End Time"
          />
        </label>
        <button
          type="submit"
          onClick={() => {
            addShift();
            alert('Your shift is added');
          }}
        >
          Save Shift
        </button>
      </div>
      <div className="ViewShiftUl">
        <input
          type="text"
          placeholder="search ..."
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>

        <h4>ViewShift</h4>

        {result.map((name) => {
          return (
            <ViewShift
              searchName={name.name}
              searchStart={name.startTime}
              searchEnd={name.endTime}
            />
          );
        })}
        {shift()}
      </div>
    </div>
  );
}
