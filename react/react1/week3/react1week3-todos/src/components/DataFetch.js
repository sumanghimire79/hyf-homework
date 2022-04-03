// data fetch

import { useEffect } from 'react';
const Api =
  'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw';

export function DataFetch({ setFetchTodo }) {
  useEffect(() => {
    fetch(Api)
      .then((res) => res.json())
      .then((data) => {
        const result = data.map((todo) => ({
          id: todo.id,
          description: todo.description,
          deadline: todo.deadline,
        }));
        setFetchTodo((prev) => [...prev, ...result]);
      });
  }, [setFetchTodo]);
}
