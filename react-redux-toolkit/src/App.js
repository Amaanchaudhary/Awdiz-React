import './App.css';
import DisplayCounter from './components/DisplayCounter';
import Header from './components/Headerr';
import Control from './components/Control';

function App() {
  return (
    <div className="App">
      <Header/>
      <DisplayCounter/>
      <Control/>
      <h2>React + Redux</h2>
    </div>
  );
}

export default App;
