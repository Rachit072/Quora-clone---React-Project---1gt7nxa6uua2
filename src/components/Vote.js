import React,{useState,useEffect} from 'react'

export default function Vote({id}) {
    const [voteData, setVoteData] = useState({ upvotes: 0, downvotes: 0 });

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
  return (
    <div>{
        <div className="vote-container">
         <div className="vote-box">
                <button className="vote-btn" 
                onClick={handleUpvote}
                ><img style={{ paddingTop:"2px", height:"15px",weight:"15px"}} src="https://e7.pngegg.com/pngimages/764/817/png-clipart-triangle-point-green-leaf-up-arrow-file-angle-web-design.png" alt="↑" /></button><span style={{padding:"0px 2px ",fontSize:"medium"}}>{voteData.upvotes}</span>
                </div>
            <div className="vote-box">
                <button className="vote-btn"
                onClick={handleDownvote}
                ><img style={{paddingTop:"2px",height:"15px",weight:"15px"}} src="https://e7.pngegg.com/pngimages/55/247/png-clipart-dainese-logo-line-triangle-point-red-down-arrow-s-angle-web-design.png" alt="↓" /></button><span style={{padding:"0px 2px"}}>{voteData.downvotes}</span>
            </div>
            <div>
            </div>
        </div>}
    </div>  
  )
}
