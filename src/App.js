import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Add from './Add';
import Home from './Home';
import Update from './Update';
import Read from './Read';
import Delete from './Delete';


function App() {


  return (


<Routes>
  <Route path='/' element={<Home/>} />
   <Route path='/add' element={<Add/>} />
   <Route path='/update/:Id' element={<Update/>} />
   <Route path='/read/:Id' element={<Read/>} />
   <Route path='/delete/:Id' element={<Delete/>} />



</Routes>



  );
}

export default App;
