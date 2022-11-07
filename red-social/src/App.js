import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <Routes>
        <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>          
=======

      <div className="nav-bar">
        <form className="search">
	        <input type="text" placeholder="Buscar..." className="input"></input>
	      </form>
      </div>

      <div className="seccion-1">
          
      </div>

      <div className="seccion-2">
        <div className="Publicaciones">
          hellow
        </div>
      </div>

      <div className="seccion-3">
          <button name="button">Click 1</button>
          <button name="button">Click 2</button>
          <button name="button">Click 3</button>
          <button name="button">Click 5</button>
          <button name="button">Click 6</button> 
      </div>
     

>>>>>>> e830882732177b9edb3261c7d0f28933894184e8
    </div>
  );
}

export default App;
