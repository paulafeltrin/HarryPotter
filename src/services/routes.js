import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HarryPotter from '../HarryPotter/index';
import Home from '../Home/index';

export default function Rotas(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/harrypotter' element={<HarryPotter/>}/>
      </Routes>
    </Router>
  )
}