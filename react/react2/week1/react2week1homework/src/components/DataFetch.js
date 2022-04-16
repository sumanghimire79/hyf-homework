import { useContext, useEffect, useState } from 'react';
import { SearchContext } from './UserItem';

export function DataFetch() {
  const UseContext = useContext(SearchContext);
  const query = UseContext.searchInput;

  const [isLoading, setIsLoading] = useState(false);
  const [userFetched, setUserFetched] = useState([]);
  const [errorHandling, setErrorHandling] = useState();

  const api = `https://api.github.com/search/users?q=${query}`;
  useEffect(() => {
    if (query.length === 0) {
      setUserFetched([]);
      setErrorHandling();
      return;
    }

    setIsLoading(true);
    (async () => {
      try {
        const responce = await fetch(api);
        const jsonData = await responce.json();
        if (responce.ok) {
          const fetchMap = jsonData.items.map((data) => data.login);
          setUserFetched(fetchMap);
          setErrorHandling();
        } else {
          setErrorHandling(jsonData.message);
          setUserFetched([]);
        }
      } catch (err) {
        setErrorHandling(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [api, query]);

  const item = userFetched.map((user, index) => <li key={index}>{user}</li>);

  if (isLoading) {
    return <p>loading...</p>;
  }
  if (errorHandling) {
    return <p> {errorHandling} </p>;
  }
  return <div>{userFetched.length === 0 ? ' no items' : item}</div>;
}
