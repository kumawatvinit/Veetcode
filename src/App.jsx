import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './components/Home'
import SignIn from './components/SignIn'
import Register from './components/register'
import Explore from './components/Explore'
import Problems from './components/Problems'
import Showproblem from './components/showproblem'
import Interview from './components/Interview'
import Contest from './components/Contest'
import Discuss from './components/Discuss'
import Store from './components/Store'




function App() {
  return (
    <Router>
      <div id="container">

        <div className='content-container'>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/signup" element={<Register/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/problems" element={<Problems/>}/>
            <Route path="/showproblem" element={<Showproblem/>}/>
            <Route path="/interview" element={<Interview/>}/>
            <Route path="/contest" element={<Contest/>}/>
            <Route path="/discuss" element={<Discuss/>}/>
            <Route path="/store" element={<Store/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;