import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Register from './Components/Register';
import {Profile} from './Components/Profile';
import Counter from './Components/Counter';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/amaan' element={<Counter/>}/> 
      </Routes>
    </div>
  );
}

export default App;