import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';


function App() {
  return (
  <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/Home.js" element={<Home/>} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
