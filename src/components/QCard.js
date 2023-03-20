import React,{useState} from "react";

function QCard(){
    const [isHidden, setIsHidden] = useState(false);
    const [undoshown,setUndoshow] = useState(false);
    const handleHide = () => {
        setIsHidden(true);
        setUndoshow(true);
    };
    const handleUndo = () => {
        setIsHidden(false);
        setUndoshow(false);
    }
    const [upcounter,setUpcounter] = useState(0);
    const [downcounter,setDowncounter] = useState(0);
    function increase(){
        setUpcounter(oldvalue=>oldvalue+1)
    }
    function increase2(){
        setDowncounter(oldvalue=>oldvalue+1)
    }

    return <div>
        <div className="card-container">
            <div className="card">
                <div className="profile-main">
                { !undoshown &&
                    <div className="profile-container">
                        <div className="logo"><img style={{height:"70px",width:"70px",margin:"3px",padding:"2px", borderRadius:"50%",  border: "2px solid #cddc39"}} src="https://cdn-icons-png.flaticon.com/512/147/147140.png?w=740&t=st=1679312970~exp=1679313570~hmac=a6ae4f263b971f97d8b80dfeba9b6bee331d95583b64b1848f433b007aa780cc" alt="error" /></div>
                        <div className="profile" style={{height:"60px"}}>
                            <div className="card-name"><p style={{fontWeight:"bold"}}>Anonymous</p></div>
                            <div className="card-details"><p>Lorem ipsum dolor sit amet consectetur</p></div>
                        </div>
                    </div>}
                    <div>
                    {undoshown && <p style={{width:"550px",padding:"10px 0px 10px 100px",borderRadius:"20px",backgroundColor:"rgb(227, 227, 227)",color:"gray"}}>Content hidden</p>}
                    </div>
                { !undoshown &&
                    <div><button onClick={handleHide} className="x-btn">X</button></div>}
                {undoshown &&
                    <div><button onClick={handleUndo} className="undo-btn">Undo</button></div>}
                </div>
                <div>
                {!isHidden &&
                    <div>
                        <p style={{fontWeight:"bold"}}>deserunt dolorum dolores maiores earum architecto.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos consequuntur eveniet nostrum earum cupiditate minima voluptas, iste obcaecati, ad dolor, asperiores laboriosam praesentium. Quia debitis earum cum magni dolorem.</p>
                    </div>
                    }
                </div>
                <div>
                {!isHidden &&
                <div className="vote-container">
                    <div className="vote-box">
                        <button className="vote-btn" onClick={increase}>↑</button><span style={{padding:"3px"}}>{upcounter}</span>
                    </div>
                    <div className="vote-box">
                        <button className="vote-btn"onClick={increase2} >↓</button><span style={{padding:"3px"}}>{downcounter}</span>
                    </div>
                </div>}
                </div>
                
            </div>
          
        </div>
    </div>
}
export default QCard;