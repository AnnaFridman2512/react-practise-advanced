
import './App.css';
import UseReducerHook from './components/useReducerHook.js';
import UseRefHook from './components/useRefHook';
import Parent from './components/useImperativeHandle/Parent.js';
import UseContextHook from './components/useContext/useContextHook.js';
import UseMemoHook from './components/useMemoHook.js';

function App() {
  return (
    <div className="App">   
      <UseReducerHook />
      <UseRefHook />
      <br/>
      <Parent />
      <br/>
      <UseContextHook />
      <br/>
      <UseMemoHook />
    </div>
  );
}

export default App;
