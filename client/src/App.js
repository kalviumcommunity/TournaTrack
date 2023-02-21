import { Route, Routes } from 'react-router-dom';
import './component/Navbar';
import './App.css'; import React from 'react';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import Home from './component/Home';
import Register from './component/Register';
import Detail from './component/Detail';
import PlayerRegister from './component/PlayerRegister';
console.log("hit")
function App() {
  return (
    <div className="App">
      
     
      
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Register' element={<Register />} /> 
        <Route path = '/Detail' element ={<Detail/>}/>
        <Route path = '/playerRegister' element = {<PlayerRegister/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
