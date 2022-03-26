import './App.css';
import { Counter } from './components/Counter';
import TodosMethods from './components/TodosMethods';
// import AddRandomTodo from './components/AddRandomTodo';
function App() {
  return (
    <div className="App">
      <Counter />
      <h1>ToDo List</h1>
      <TodosMethods />
    </div>
  );
}
export default App;
