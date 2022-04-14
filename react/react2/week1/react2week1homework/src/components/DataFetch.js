import { useContext, useEffect, useState } from 'react';
import { SearchContext } from './UserItem';

export function DataFetch() {
  const UseContext = useContext(SearchContext);
  const query = UseContext.searchInput;

  const [isLoading, SetIsLoading] = useState(false);
  const [userFetched, setUserFetched] = useState([]);
  const [errorHandling, setErrorHandling] = useState();

  const Api = `https://api.github.com/search/users?q=${query}`;
  useEffect(() => {
    if (!Api) {
      setUserFetched([]);
      // return;
    }
    SetIsLoading(true);
    (async () => {
      try {
        const api = await fetch(Api);
        const jsonData = await api.json();
        const fetchMap = jsonData.items.map((data) => data.login);
        setUserFetched(fetchMap);
      } catch (err) {
        // throw err;
        setErrorHandling(err);
        console.log(errorHandling);
      } finally {
        SetIsLoading(false);
      }
    })();
  }, [Api, query]);

  const item = userFetched.map((user, index) => <li key={index}>{user}</li>);
  return (
    <div>
      {isLoading && <p> Loading....</p>}
      {/* {errorHandling} */}
      <div>{userFetched.length === 0 ? ' no items' : item}</div>
    </div>
  );
}
