import React, { useState, useEffect } from 'react';

export function WatchCount() {
  const [count, setCount] = useState(0);
  const [inputState, setInputState] = useState('');

  useEffect(() => {
    const timeID = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    // clean up function return.. here useeffect comes to play a role ..
    return () => clearTimeout(timeID);
  }, [count]);

  const settoZero = () => {
    setCount(0);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h3> {count}</h3>
      <button onClick={decrement}> decrese count by one </button>
      <button onClick={settoZero}> set to Zero </button>
      <input
        type="text"
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
      />
    </div>
  );
}
