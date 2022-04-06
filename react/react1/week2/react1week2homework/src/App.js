import './App.css';
import './components/css.css';
import { Counter } from './components/Counter';
import TodoList from './components/TodoList';
import { TodosHeader } from './components/TodosHeader';

function App() {
  return (
    <div className="App">
      <Counter />
      <TodosHeader />
      <TodoList />
    </div>
  );
}
export default App;
