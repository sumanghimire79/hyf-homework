import { useEffect } from 'react';
const Api =
  'https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw';
export function DataDefaultShiftApi({ setDataFechingState, setInputShift }) {
  useEffect(() => {
    if (setInputShift) {
      fetch(Api)
        .then((res) => res.json())
        .then((data) => {
          const fetchMap = data.map((data) => ({
            name: data.name,
            start: data.start.split('T')[1],
            end: data.end.split('T')[1],
          }));
          setInputShift(fetchMap);
          setDataFechingState(true);
        });
    }
  }, [setInputShift]);
}
