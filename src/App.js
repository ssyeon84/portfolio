import React from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
