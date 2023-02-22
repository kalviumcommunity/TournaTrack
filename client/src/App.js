import { Route, Routes } from 'react-router-dom';
import './component/Navbar';
import './App.css'; import React from 'react';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import Home from './component/Home';
import Register from './component/Register';
import Detail from './component/Detail';
import PlayerRegister from './component/PlayerRegister';

function App() {
  return (
    <div className="App">
      
     
      
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register />} /> 
        <Route path='/signup' element={<Signup/>} /> 
        <Route path = '/Detail' element ={<Detail/>}/>
        <Route path = '/player_register' element = {<PlayerRegister/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
