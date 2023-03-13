import React,{useState} from 'react';
import './App.css';
import Home from './components/Home';
import LandingPage from './components/LandingPage';


function App() {
  const [lpstatus, setLpstatus] = useState(true);

  const handlelp = () => {
    setLpstatus(false);
  };

  const handlehome = () => {
    setLpstatus(true);
  };
  return (
    <div className="App">
         {lpstatus ? (
        <LandingPage onClick={handlelp} />
      ) : (
        <Home onClick={handlehome} />
      )}
    </div>
  );
}

export default App;
