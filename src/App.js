import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';


function App() {
  // const [login,SetLogin] = useState(false);
  // let show;
  // if(!login){
  //   show = <LoginPage/>
  // }
  // else 
  // show = <Home/>
  return (
    <div className="App">
      {/* { lpstatus ? <LoginPage/> : <Home/>}
      <button onClick={handlelp}>Enter</button> */}
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/Home.js" element={<Home/>} />
      </Routes>
    </Router>
    {/* {show} */}
    </div>
  );
}

export default App;
