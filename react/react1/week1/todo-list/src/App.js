import './App.css';
import Todolist from './components/Todolist';
import DataMyTodo from './components/Data/DataMyTodo';
import DataYourTodo from './components/Data/DataYourTodo';
import DataHerTodo from './components/Data/DataHerTodo';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="h1">My todo list </h1>
        <Todolist TodoData={DataMyTodo} />
      </div>
      <div>
        <h1 className="h1">Your todo list </h1>
        <Todolist TodoData={DataYourTodo} />{' '}
      </div>
      <div>
        <h1 className="h1">Her todo list </h1>
        <Todolist TodoData={DataHerTodo} />{' '}
      </div>
    </div>
  );
}

export default App;
