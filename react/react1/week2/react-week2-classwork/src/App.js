import './App.css';
import { TodoList } from './TodoList';
// import { Counter } from './Counter';
import { WatchCount } from './Counter';
function App() {
  return (
    <div className="App">
      <h3> Todo List</h3>
      <TodoList />
      ***************
      <h3> Counter</h3>
      <WatchCount />
    </div>
  );
}

export default App;
