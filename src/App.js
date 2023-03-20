import React,{useState} from 'react';
import './App.css';
import Home from './components/Home';
import LandingPage from './components/LandingPage';


function App() {
  const [login,SetLogin] = useState(false);
  let show;
  if(login){
    show = <LandingPage/>
  }
  else 
  show = <Home/>
  return (
    <div className="App">

      {/* { lpstatus ? <LandingPage/> : <Home/>}
      <button onClick={handlelp}>Enter</button> */}
      {/* <Router>
      <Routes>
        <Route exact path="/" component={<LandingPage/>} />
        <Route path="/main" component={<Home/>} />
      </Routes>
    </Router> */}
    {show}
    </div>
  );
}

export default App;
