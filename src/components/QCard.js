import React,{useState,useEffect} from "react";
import Vote from "./Vote";
// import Vote2 from "./Vote2";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function QCard({que,ans,id,name,avator}){
    const [text, setText] = useState(localStorage.getItem(`question_${id}`) || "");
    const [editing, setEditing] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [undoshown,setUndoshow] = useState(false);
    const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayName(user.displayName);
      } else {
        setDisplayName('');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

    const handleButtonClick = () => {
        setEditing(true);
    };
    const handleInputChange = (e) => {
        setText(e.target.value);
    };
    const handleSaveClick = () => {
        setEditing(false);
        localStorage.setItem(`question_${id}`, text);
    };
    const handleHide = () => {
        setIsHidden(true);
        setUndoshow(true);
    };
    const handleUndo = () => {
        setIsHidden(false);
        setUndoshow(false);
    }
    
    return <div>
        <div className="card-container">
            <div className="card">
                <div className="profile-main">
                { !undoshown &&
                    <div className="profile-container">
                        <div className="logo"><img style={{height:"36px",width:"36px",margin:"3px",padding:"2px", borderRadius:"50%",  border: "2px solid #cddc39"}} src={avator} alt="_" /></div>
                        <div className="profile">
                            <div style={{display:"border-box",fontWeight:"bold",fontSize:"small",paddingTop:"5px"}} className="name-div" placeholder="Anonymous">
                            {displayName ? displayName : name}
                            </div>
                            <div style={{display:"border-box",fontSize:"x-small",color:"#636466"}}></div>
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
                    <div key={id} className="card-result">
                        <div>
                            <p style={{fontWeight:"bold"}}>{que}</p>
                            <div>{editing ? (
                                <div>
                                    <textarea type="text" value={text} style={{width:"650px",height:"125px",fontSize:"12px",resize:"none",padding:"8px 15px",margin:"5px",borderRadius:"5px",border:"0.5px solid lightgrey"}} onChange={handleInputChange} />
                                    <div style={{margin:"5px"}}>
                                        <button className="btn"  onClick={handleSaveClick}>Save</button>
                                    </div>
                                </div>) : (
                                <div><p>{text}</p>
                                    <div style={{paddingBottom:"10px"}}>
                                        <button className="btn" onClick={handleButtonClick}>Answer</button>
                                    </div>
                                </div>)}
                            </div>
                            {/* <Vote id={id}/> */}
                            <Vote id={id}/>
                        </div>
                    </div>}
                </div>   
            </div>
        </div>
    </div>
}
export default QCard;