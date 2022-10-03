import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import './App.css';

//Routes
import Home from './routes/Home';
import Pricing from './routes/Pricing';
import Training from './routes/Training';
import Contact from './routes/Contact';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/Training' element={<Training />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </div>
   
  );
}

export default App;
