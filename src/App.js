import React from 'react'
import {  Routes ,  Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';


function App() {
    
  return (
    <Routes>
         <Route exact path='/' element={<Home />}/>
         <Route path='/register' element={<Register />}/>
    </Routes>
  );
}

export default App;
