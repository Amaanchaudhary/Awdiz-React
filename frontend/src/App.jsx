import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Register from './Components/Register';
import {Profile} from './Components/Profile';
import Counter from './Components/Counter';
import Effect1Func from './Components/13-09/Effect1';
import { Effect2Func } from './Components/13-09/Effect2';
import Effect3Func from './Components/15-09/Effect3';
import Effect4Func from './Components/15-09/Effect4';
import Params from './Components/15-09/Params';
import SingleProduct from './Components/15-09/SingleProduct';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/counter' element={<Counter/>}/> 
        <Route exact path='/effect1' element={<Effect1Func/>}/>
        <Route exact path='/effect2' element={<Effect2Func/>}/>
        <Route exact path='/effect3' element={<Effect3Func/>}/>
        <Route exact path='/effect4' element={<Effect4Func/>} />
        <Route exact path='/params' element={<Params/>} />
        <Route exact path='/singleproduct/:id/' element={<SingleProduct/>} />
      </Routes>
    </div>
  );
}

export default App;