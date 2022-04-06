import React, { useState } from 'react';
import { ViewShiftList } from './ViewShiftList';
import { SearchShift } from './SearchShift';

import { DataDefaultShiftApi } from './DataDefaultShiftApi';

export function InputShift() {
  const [inputShift, setInputShift] = useState([]);

  const [name, setName] = useState('');
  const [start, setStartTime] = useState('');
  const [end, setEndTime] = useState('');
  const [searchName, setSearchName] = useState('');
  const [dataFechingState, setDataFechingState] = useState(false);

  function addShift() {
    const addedShift = [...inputShift, { name, start, end }];
    setInputShift(addedShift);
  }

  function deleteShift(name) {
    setInputShift((shifts) => {
      const shiftsAfterDelete = shifts.filter((shift) => shift.name !== name);
      return shiftsAfterDelete;
    });
  }

  const shifts = inputShift
    .filter((val) => val.name.toLowerCase().includes(searchName.toLowerCase()))
    .map((item) => {
      return (
        <ViewShiftList
          name={item.name}
          start={item.start}
          end={item.end}
          key={item.name}
          deleteShift={deleteShift}
        />
      );
    });
  console.log(inputShift);

  return (
    <div>
      <h4> Submit Shift</h4>
      <div className="submitShift">
        <input
          type="text"
          placeholder="Employee Name"
          onChange={(e) => setName(e.target.value)}
        />
        <span>
          <label htmlFor=""> Start Time:</label>{' '}
          <input type="time" onChange={(e) => setStartTime(e.target.value)} />
        </span>
        <span>
          <label htmlFor=""> End Time: </label>
          <input type="time" onChange={(e) => setEndTime(e.target.value)} />
        </span>

        <button
          type="submit"
          onClick={() => {
            addShift();
            alert('shift saved');
          }}
        >
          Save Shift
        </button>
      </div>
      <div>
        <h4>Search Shift</h4>
        <SearchShift setSearchName={setSearchName} />
        <h4>ViewShift</h4>

        {!dataFechingState ? 'loading...' : null}
        {shifts}
        <DataDefaultShiftApi
          setDataFechingState={setDataFechingState}
          setInputShift={setInputShift}
        />
      </div>
    </div>
  );
}
