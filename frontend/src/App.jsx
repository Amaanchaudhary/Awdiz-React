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
import Mapping from './Components/16-09/Mapping';
import Ternary from './Components/16-09/Ternary'
import { useState } from 'react';
import StyledComponent from './Components/16-09/StyledComponent'
import StateAndEffect from './Components/16-09/StateAndEffect';
import DynamicStyle from './Components/20-09/DynamicStyle'
import ChildrenProps from './Components/22-09/ChildrenProps';
import RegisterReact from './Components/22-09/RegisterReact';
import ClassComponent from './Components/29-09/ClassComponent';
import PageNotFound from './Components/29-09/PageNotFound';
import Product from './Components/30-09/Product'
import SingleProductNew from './Components/01-10/SingleProductNew'
import AddProduct from './Components/04-10/AddProduct';
import UseMemo from './Components/06-10/UseMemo'
import UseCallBack from './Components/07-10/UseCallBack';
import TestReducer from './Components/08-10/TestReducer'
import CustomHook from './Components/13-10/CustomHook';
import CustomHookLS from './Components/13-10/CustomHookLS';
import YourProducts from './Components/24-11/YourProducts';
import UpdateProduct from './Components/25-11/UpdateProduct';
import Navbar from './Components/Common/Navbar';
import Cart from './Components/26-11/Cart';



function App() {

  const [LoggedIn, setloggedIn] = useState(false);

  return (
    <>
    <Navbar/>
    <div className="App">
      <Routes>
        <Route exact path='*' element={<PageNotFound/>} />
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
        <Route exact path='/singleproduct/:id/:name' element={<SingleProduct/>} /> 
        <Route exact path='/mapping' element={<Mapping kuchbhi={"hi"}  names={["amaan","Amaan2","Amaan3", 123]}/>} />
        <Route exact path='/ternary' element={<Ternary isUserLoggedIn={LoggedIn} setloggedIn={setloggedIn} />}/>
        <Route exact path='/styledcomponent' element={<StyledComponent/>}/>
        <Route exact path='/state&effect' element={<StateAndEffect/>}/> 
        <Route exact path='/dynamicstyle' element={<DynamicStyle/>}/>
        <Route exact path='/childrenprops' element={<ChildrenProps/>} />
        <Route exact path='/registerreact' element={<RegisterReact/>} />
        <Route exact path='/classcomponent' element={<ClassComponent/>}/>
        <Route exact path='/product' element={<Product/>} />
        <Route exact path='/single-product/:id' element={<SingleProductNew/>} />
        <Route exact path='/addproduct' element={<AddProduct/>}/>
        <Route exact path='/usememo' element={<UseMemo/>}/>
        <Route exact path='/usecallback' element={<UseCallBack/>}/>
        <Route exact path='/testreducer' element={<TestReducer/>}/>
        <Route exact path='/customhook' element={<CustomHook/>} />
        <Route exact path='/customhookls' element={<CustomHookLS/>} />
        <Route exact path='/yourproducts' element={<YourProducts/>} />
        <Route exact path='/updateproduct/:id' element={<UpdateProduct/>} />
        <Route exact path='/cart' element={<Cart/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;