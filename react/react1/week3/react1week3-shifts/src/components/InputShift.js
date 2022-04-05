import React, { useState } from 'react';
import { ViewShiftList } from './ViewShiftList';
import { SearchShift } from './SearchShift';
import { dataDfaultShift } from './DataDefaultShifts';

export function InputShift() {
  const [inputShift, setInputShift] = useState(dataDfaultShift);
  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [searchName, setSearchName] = useState('');

 
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

  const shifts = inputShift
    .filter((val) => val.name.toLowerCase().includes(searchName.toLowerCase()))
    .map((item) => {
      return (
        <ViewShiftList
          name={item.name}
          startTime={item.startTime}
          endTime={item.endTime}
          key={item.id}
          id={item.id}
          deleteShift={deleteShift}
        />
      );
    });
   
  return (
    <div>
      <h4> Submit Shift</h4>
      <div className="submitShift">
        <input
          type="text"
          placeholder="Employee Name"
          onChange={(e) => setName(e.target.value)}
        />
        <span><label htmlFor=""> Start Time:</label>  <input type="time" onChange={(e) => setStartTime(e.target.value)} /></span>
        <span><label htmlFor=""> End Time: </label><input type="time" onChange={(e) => setEndTime(e.target.value)} /></span>
       
        <button
          type="submit"
          onClick={() => {
            addShift();
            alert('shift saved')
          }}
        >
          Save Shift
        </button>
      </div>
      <div>
        <h4>Search Shift</h4>
        <SearchShift  setSearchName={setSearchName}/>
        <h4>ViewShift</h4>
        {shifts}
      </div>
    </div>
  );
}
