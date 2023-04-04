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
import Reset from './component/Reset';
import Newpassword from './component/Newpassword';
import Profile from './component/Profile';
import { useState } from 'react';
import Tournament from './component/Tournament';
import AboutUs from './component/AboutUs';
import Participated from './component/Participated';
import Created from './component/Created';
import Premium from './component/Premium';
import PaymentForm from './component/PaymentForm';
import PaymentSuccess from './component/PaymentSucces';

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
        <Route path = '/detail/:id' element ={<Detail/>}/>
        <Route path = '/playerregister/:id' element = {<PlayerRegister/>}/>
        <Route path='/reset' element={<Reset/>} /> 
        <Route path='/profile' element={<Profile/>} /> 
        {/* <Route path='/tournament' element={<Tournament/>} />  */}
        <Route path='/about' element={<AboutUs/>} /> 
        <Route path='/premium' element={<Premium/>} /> 
        <Route path='/payment' element={<PaymentForm/>} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} /> 
        <Route path='tournamentparticipated' element={<Participated/>} /> 
        <Route path='tournamentcreated' element={<Created/>} /> 
        <Route path='/newpassword/:id/:token' element={<Newpassword/>} /> 
      </Routes>
      < GeoLocation/>
      
    </div>
  );
}

export default App;
