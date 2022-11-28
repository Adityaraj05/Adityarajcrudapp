import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import About from "./components/About";

import Navbar from "./components/Navbar";
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';
import User from './components/User';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  
  return (
    <Router>
      
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        
        <Route exact path="/adduser" element={<Adduser/>}/>
        <Route exact path="/edituser/:id" element={<Edituser/>}/>
        <Route exact path="/user/:id" element={<User/>}/>
        
      </Routes>
     
    
    </Router>
  
   
  );
}


export default App;
