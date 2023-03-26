import React, { useState } from "react";
import { auth,provider } from "./Auth/Firebase";
import { signInWithPopup } from "firebase/auth";
import {useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Home from './Home';


function LoginPage(){
    const [value,setValue] = useState('');
    const handlesignin=()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email);
            localStorage.setItem("email",data.user.email);
        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem("email"));
    })
    const [name, setName] = useState('');
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
    const navigate = useNavigate();
    function handle(){
        navigate('/Home.js');
        localStorage.setItem('username', name);
    }
  
    return <div>
        {value?<Home/>:
        <div className="main-container">
            <div className="container">
                <h1 style={{color:"rgb(150,0,0)"}}>Quora</h1>
                <p style={{color:"gray",fontWeight:"bold"}}>A place to share knowledge and better understand the world</p>
                <div className="form-container">
                    <div className="signup">
                        <div><p style={{color:"gray"}}>By continuing you indicate that you agree to Quora's <span style={{color:"blue"}}>Terms of Service</span> and <span style={{color:"blue"}}>Privacy Policy.</span></p></div>
                        <div className="su-btn" style={{border:"1px solid lightgrey",borderRadius:"3px",padding:"5px",display:"flex"}}>
                            <div>
                                <img style={{height:"24px",weight:"24px",paddingRight:"5px"}} src={"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"} alt=" "/> 
                            </div> 
                            <div style={{paddingTop:"2px"}} onClick={handlesignin}>
                                Continue with Google
                            </div> 
                        </div>
                        <div className="su-btn" style={{border:"1px solid lightgrey",borderRadius:"3px",padding:"5px",display:"flex"}}>
                            <div>
                                <img style={{height:"20px",weight:"20px",paddingRight:"7px",paddingLeft:"3px"}} src={"https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"} alt=" "/> 
                            </div>
                            <div style={{paddingTop:"1px"}}>
                                Continue with Facebook
                            </div>
                        </div>
                        <div><button style={{border:"none", color:"gray",textAlign:"center",backgroundColor:"white",marginLeft:"110px"}}>signup with email</button></div>
                    </div>
                    
                <form onSubmit={handle} className="login-form">
                    <div style={{borderBottom:"1px solid lightgray",padding:"10px 0px"}} >Login</div>
                        <div>
                            <div style={{fontWeight:"bold"}}>Username</div>
                            <div><input className="lg-btn" type="text" required value={name} onChange={handleNameChange} placeholder="Your Username/email" /></div>
                        </div>
                    <div>
                        <div style={{fontWeight:"bold"}}>Password</div>
                        <div><input className="lg-btn" type="password" placeholder="Your password" required/></div>
                    </div>
                    <div style={{color:"gray"}}>Forgot password? <span>
                    
                        <button type="submit" style={{marginLeft:"90px",borderRadius:"15px",border:"none", cursor:"pointer",backgroundColor:"rgb(176, 182, 247)",color:"white",padding:"10px"}}>Login</button>
                    
                        </span></div>
                </form>
                </div>
            <div ><button className="hindi" style={{color:"blue",border:"none",cursor:"pointer",padding:"15px 2px",backgroundColor:"white"}}>हिन्दी</button>&gt;</div>
            <div className="navbar">
                <a href="/" className="nav">About.</a>
                <a href="/about" className="nav">Careers.</a>
                <a href="/contact" className="nav">Contact.</a>
                <a href="/" className="nav">Privacy.</a>
                <a href="/about" className="nav">Terms.</a>
                <a href="/contact" className="nav">Contact.</a>
                <a href="/about" className="nav">Languages.</a>
                <a href="/contact" className="nav">Your Ad Choices.</a>
                <a href="/contact" className="nav">Press.</a>
                <span style={{fontSize:"smaller"}}>© QuorFakea, Inc. 2023</span>
            </div>
            </div>
        </div>}
    </div>

}
export default LoginPage;