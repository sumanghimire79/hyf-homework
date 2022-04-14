import { useContext, useEffect, useState } from 'react';
import { SearchContext } from './UserItem';

export function DataFetch() {
  const UseContext = useContext(SearchContext);
  const query = UseContext.searchInput;

  const [isLoading, SetIsLoading] = useState(true);
  const [userFetched, setUserFetched] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const Api = `https://api.github.com/search/users?q=${query}`;
  useEffect(() => {
    SetIsLoading(true);

    fetch(Api)
      .then((res) => res.json())
      .then((data) => {
        console.log('data??', data.message);

        if (query.length === 0) {
          setUserFetched([]);
        } else {
          if (data.length === 0) {
            setUserFetched([]);
          } else {
            const fetchMap = data.items.map((data) => <li>{data.login}</li>);

            setUserFetched(fetchMap);
          }
        }
        SetIsLoading(false);
      })
      .catch((error) => {
        console.log(` error is ${error}`);

        setErrorMessage(` ${error}`);
      });
  }, [Api, query.length]);

  console.log(userFetched);
  console.log(query);

  return (
    <div>
      {/* {isLoading ? (
        'Loading....'
      ) : (
        <div> {userFetched.length === 0 ? ' no items' : userFetched}</div>
      )} */}

      {isLoading && <p> Loading....</p>}

      {errorMessage ? (
        errorMessage
      ) : (
        <div> {userFetched.length === 0 ? ' no items' : userFetched}</div>
      )}
    </div>
  );
}
