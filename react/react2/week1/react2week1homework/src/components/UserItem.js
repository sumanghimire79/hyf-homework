import { createContext, useState } from 'react';
import { DataFetch } from './DataFetch';
export const SearchContext = createContext();

export function UserItem() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div>
      <h1>Git-hub user search </h1>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <SearchContext.Provider value={{ searchInput }}>
        <DataFetch />
      </SearchContext.Provider>
    </div>
  );
}
