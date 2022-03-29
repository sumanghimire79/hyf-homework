import '../App.css';
export function TodoItem({ description, checked, id, markTodo, deleteTodo }) {
  return (
    <div>
      <li>
        <span className={checked ? 'checked' : 'unchecked'}>
          {description}
          <input type="checkbox" onChange={() => markTodo(id)}></input>
        </span>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </li>
    </div>
  );
}
