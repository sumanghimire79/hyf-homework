import '../App.css';
export function TodoItem({ description, checked, id, MarkTodo, DeleteTodo }) {
  function TodoMark() {
    MarkTodo(id);
  }
  function TodoDelete() {
    DeleteTodo(id);
  }
  return (
    <li>
      <span className={checked ? 'checked' : 'unchecked'}>
        {description}
        <input type="checkbox" onChange={TodoMark}></input>
      </span>
      <button onClick={TodoDelete}>Delete</button>
    </li>
  );
}
