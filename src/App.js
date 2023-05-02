import React from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio01 from './pages/portfolio/Portfolio01';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/portfolio01' element={<Portfolio01 />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
