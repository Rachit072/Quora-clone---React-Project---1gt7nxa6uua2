import React,{useState,useEffect} from "react";

function QCard({que,ans,id,name,avator}){
    const [text, setText] = useState(localStorage.getItem(`question_${id}`) || "");
    const [editing, setEditing] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [undoshown,setUndoshow] = useState(false);
    const [voteData, setVoteData] = useState({ upvotes: 0, downvotes: 0 });

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
    
    useEffect(() => {
        const storedVoteData = JSON.parse(localStorage.getItem(`voteData-${id}`));
        if (storedVoteData) {
            setVoteData(storedVoteData);
        }
    }, [id]);

    const handleUpvote = () => {
    const newVoteData = { upvotes: voteData.upvotes + 1, downvotes: voteData.downvotes };
        localStorage.setItem(`voteData-${id}`, JSON.stringify(newVoteData));
        setVoteData(newVoteData);
    };

    const handleDownvote = () => {
    const newVoteData = { upvotes: voteData.upvotes, downvotes: voteData.downvotes + 1 };
        localStorage.setItem(`voteData-${id}`, JSON.stringify(newVoteData));
        setVoteData(newVoteData);
    };
    return <div>
        <div className="card-container">
            <div className="card">
                <div className="profile-main">
                { !undoshown &&
                    <div className="profile-container">
                        <div className="logo"><img style={{height:"36px",width:"36px",margin:"3px",padding:"2px", borderRadius:"50%",  border: "2px solid #cddc39"}} src={avator} alt="_" /></div>
                        <div className="profile">
                            <div style={{display:"border-box",fontWeight:"bold",fontSize:"small",paddingTop:"5px"}} className="name-div" placeholder="Anonymous">{name}</div>
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
                            <div>
                                {editing ? (
                                <div>
                                    <textarea type="text" value={text} style={{width:"650px",height:"125px",fontSize:"12px",resize:"none",padding:"8px 15px",margin:"5px",borderRadius:"5px",border:"0.5px solid lightgrey"}} onChange={handleInputChange} />
                                    <div style={{margin:"5px"}}>
                                        <button className="btn"  onClick={handleSaveClick}>Save</button>
                                    </div>
                                </div>
                                ) : (
                                <div>
                                    <p>{text}</p>
                                    <div style={{paddingBottom:"10px"}}>
                                        <button className="btn" onClick={handleButtonClick}>Answer</button>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>}
                </div>
                <div>{!isHidden &&
                    <div className="vote-container">
                        <div className="vote-box">
                            <button className="vote-btn" onClick={handleUpvote}><img style={{ paddingTop:"2px", height:"15px",weight:"15px"}} src="https://e7.pngegg.com/pngimages/764/817/png-clipart-triangle-point-green-leaf-up-arrow-file-angle-web-design.png" alt="↑" /></button><span style={{padding:"0px 2px ",fontSize:"medium"}}>{voteData.upvotes}</span>
                        </div>
                        <div className="vote-box">
                            <button className="vote-btn"onClick={handleDownvote} ><img style={{paddingTop:"2px",height:"15px",weight:"15px"}} src="https://e7.pngegg.com/pngimages/55/247/png-clipart-dainese-logo-line-triangle-point-red-down-arrow-s-angle-web-design.png" alt="↓" /></button><span style={{padding:"0px 2px"}}>{voteData.downvotes}</span>
                        </div>
                    </div>}
                </div>     
            </div>
        </div>
    </div>
}
export default QCard;