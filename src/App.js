
import './App.css';
import UseReducerHook from './components/useReducerHook.js';
import UseRefHook from './components/useRefHook';
import Parent from './components/useImperativeHandle/Parent.js';

function App() {
  return (
    <div className="App">   
      <UseReducerHook />
      <UseRefHook />
      <br/>
      <Parent />
    </div>
  );
}

export default App;
