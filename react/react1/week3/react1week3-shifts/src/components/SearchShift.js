export function SearchShift({ setSearchName }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search ..."
        onChange={(e) => setSearchName(e.target.value)}
      ></input>
    </div>
  );
}
