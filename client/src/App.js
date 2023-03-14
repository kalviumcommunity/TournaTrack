import { Route, Routes } from 'react-router-dom';
import './component/Navbar';
import Navbar from './component/Navbar';
import './App.css'; import React from 'react';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Home from './component/Home';
import Register from './component/Register';
import Detail from './component/Detail';
import GeoLocation from './component/GeoLocation';
import PlayerRegister from './component/PlayerRegister';
import { useState } from 'react';

function App() {
  const[input, setInput] =  useState("");
  const[sportType ,setSportType] = useState("");
  return (
    <div className="App">
      <Navbar input={input} setInput={setInput} sportType={sportType}  setSportType={setSportType}/>
    
       <Routes>
        <Route path='/' element={<Home value={input.toLowerCase()} sport={sportType.toLowerCase()} />}/>
        <Route path='/register' element={<Register />} /> 
        <Route path='/signin' element={<Signin/>} /> 
        <Route path='/signup' element={<Signup/>} /> 
        <Route path = '/Detail' element ={<Detail/>}/>
        <Route path = '/PlayerRegister' element = {<PlayerRegister/>}/>
      </Routes>
      < GeoLocation/>
      
    </div>
  );
}

export default App;
