import React from "react";

function Home(handlehome){
    return <div>
        <header>
            <div className="home-header">
                <div style={{color:"rgb(180,0,0)",fontWeight:"bold",fontSize:"xx-large"}}>Quora</div>
                <div><input style={{width:"900px",height:"30px",padding:"5px 10px",border:"1px solid lightgray"}} type="text" placeholder="🔍 Search for questions, people and topics" /></div>
                <div style={{padding:"5px"}}><button style={{backgroundColor:"rgb(180,0,0)",borderRadius:"15px",border:"none",color:"white",padding:"8px"}} onClick={handlehome}>Sign In</button></div>
            </div> 
        </header>
    </div>

}

export default Home;