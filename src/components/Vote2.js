import React,{useState,useEffect} from 'react'
import "./Vote2.css"; 

export default function Vote2({id}) {

  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  const localStorageKey = `voteStatus_${id}`;


  useEffect(() => {
    const storedStatus = localStorage.getItem(localStorageKey);
    if (storedStatus === 'upvoted') {
      setUpvoted(true);
    } else if (storedStatus === 'downvoted') {
      setDownvoted(true);
    }
  }, [localStorageKey]);
  const handleUpvote = () => {
    setUpvoted(true);
    setDownvoted(false);
    localStorage.setItem(localStorageKey, 'upvoted');
  };

  const handleDownvote = () => {
    setDownvoted(true);
    setUpvoted(false);
    localStorage.setItem(localStorageKey, 'downvoted');
  };
  
  return (
    <div>
      <button style={{fontSize:"large"}}
        className={upvoted ? 'upvoted' : ''}
        onClick={handleUpvote}
      >
        ⇧
      </button>
      <button style={{fontSize:"large"}}
        className={downvoted ? 'downvoted' : ''}
        onClick={handleDownvote}
      >
        ⇩
      </button>
    </div>
  )
}
