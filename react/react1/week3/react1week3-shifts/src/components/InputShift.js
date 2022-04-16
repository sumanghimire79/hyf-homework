import React, { useState, useEffect } from 'react';
import { ViewShiftList } from './ViewShiftList';
import { SearchShift } from './SearchShift';

const Api =
  'https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw';

export function InputShift() {
  const [inputShift, setInputShift] = useState([]);
  const [name, setName] = useState('');
  const [start, setStartTime] = useState('');
  const [end, setEndTime] = useState('');
  const [searchName, setSearchName] = useState('');
  const [dataFechingState, setDataFechingState] = useState(false);

  useEffect(() => {
    if (setInputShift) {
      fetch(Api)
        .then((res) => res.json())
        .then((data) => {
          const fetchMap = data.map((data, index) => ({
            id: index,
            name: data.name,
            start: data.start.split('T')[1],
            end: data.end.split('T')[1],
          }));
          setInputShift(fetchMap);
          setDataFechingState(true);
        });
    }
  }, [setInputShift]);

  function addShift() {
    const startEntry = start.split(':');
    const startMinutes = Number(startEntry[0]) * 60 + Number(startEntry[1]);
    const endEntry = end.split(':');
    const endMinutes = Number(endEntry[0]) * 60 + Number(endEntry[1]);
    const totalMinutes = endMinutes - startMinutes;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    //  to automatically add id : find the highest id and add 1 to that
    let id;
    if (inputShift.length === 0) {
      id = 1;
    } else {
      id = inputShift[inputShift.length - 1].id + 1;
    }
    if (hours > 0 || minutes > 0) {
      const addedShift = [...inputShift, { id, name, start, end }];
      setInputShift(addedShift);
      alert('shift saved');
    } else {
      alert('check the time');
    }
  }
  console.log(inputShift);
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
          start={item.start}
          end={item.end}
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
      </div>
    </div>
  );
}
