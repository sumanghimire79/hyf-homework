// Counter

import { useState, useEffect } from 'react';

export function Counter() {
  const [useTimer, setUseTimer] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setUseTimer((prev) => prev + 1);
    }, 1000);
  });

  return (
    <div>
      <p>You have used {useTimer} second in this website</p>
    </div>
  );
}
