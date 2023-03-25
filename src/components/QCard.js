import React,{useState,useEffect} from "react";

function QCard({que,ans,id,name,avator}){
    const [text, setText] = useState(() => localStorage.getItem(`text-${id}`) || '');
    function handleanswerChange(event) {
        setText(event.target.textContent);
    }
    useEffect(() => {
        localStorage.setItem(`text-${id}`, text);
    }, [id, text]);

    const [isEditable, setIsEditable] = useState(false);
    const makeEditable=()=> {
        setIsEditable(!isEditable);
    }
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
                        <div className="logo"><img style={{height:"36px",width:"36px",margin:"3px",padding:"2px", borderRadius:"50%",  border: "2px solid #cddc39"}} src={avator} alt="_" /></div>
                        <div className="profile">
                            <div style={{display:"border-box",fontWeight:"bold",fontSize:"small"}} className="name-div" placeholder="Anonymous">{name}</div>
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
                            {isEditable &&
                            <p className="answer-p" contentEditable={true} placeholder="  Type your Answer here" onInput={handleanswerChange} >{text}</p>}
                        </div>
                        <div style={{paddingBottom:"10px"}}>
                            <button className="btn" onClick={makeEditable}>Answer</button>
                        </div>
                    </div>
                    }
                </div>
                <div>
                {!isHidden &&
                <div className="vote-container">
                    <div className="vote-box">
                        <button className="vote-btn" onClick={increase}><img style={{ paddingTop:"2px", height:"15px",weight:"15px"}} src="https://e7.pngegg.com/pngimages/764/817/png-clipart-triangle-point-green-leaf-up-arrow-file-angle-web-design.png" alt="↑" /></button><span style={{padding:"0px 2px ",fontSize:"medium"}}>{upcounter}</span>
                    </div>
                    <div className="vote-box">
                        <button className="vote-btn"onClick={increase2} ><img style={{paddingTop:"2px",height:"15px",weight:"15px"}} src="https://e7.pngegg.com/pngimages/55/247/png-clipart-dainese-logo-line-triangle-point-red-down-arrow-s-angle-web-design.png" alt="↓" /></button><span style={{padding:"0px 2px"}}>{downcounter}</span>
                    </div>
                </div>}
                </div>     
            </div>
        </div>
    </div>
}
export default QCard;