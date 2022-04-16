import './App.css';
import './components/shift.css';
import { Counter } from './components/Counter';
import { InputShift } from './components/InputShift';
import { FancyStyle } from './components/FancyStyle';
function App() {
  return (
    <div className="App">
      <Counter />
      <FancyStyle>
        <InputShift />
      </FancyStyle>
    </div>
  );
}

export default App;
