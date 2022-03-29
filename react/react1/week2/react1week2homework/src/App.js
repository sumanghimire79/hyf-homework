import './App.css';
import './components/css.css';
import { Counter } from './components/Counter';
import TodosMain from './components/TodosMain';
import { TodosHeader } from './components/TodosHeader';

function App() {
  return (
    <div className="App">
      <Counter />
      <TodosHeader />
      <TodosMain />
    </div>
  );
}
export default App;
