import React, { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function Questions(){
    const [questions,setQuestions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [question,setQuestion] = useState({
      id: '',
      question: '',
      answer: '',
    });

    useEffect(() => {
      const storedQuestions = JSON.parse(localStorage.getItem('questions'));
      if (storedQuestions) {
        setQuestions(storedQuestions);
      }
    }, []);
    const toggleModal = () => {
      setShowModal(false);
    };
    const handleAddQuestion = () => {
      setShowModal(true);
      };
    const handlesubmit = () => {
        const newQuestion = { ...question, id: uuidv4() };
        setQuestions([...questions, newQuestion]);
        localStorage.setItem('questions',JSON.stringify([...questions, newQuestion]));
      };
    const handlechange = (e) => {
          setQuestion({ ...question, [e.target.name]: e.target.value });
      };

    return <div>
        <div className="Q-A">
            <div>
              <button className="btn" onClick={handleAddQuestion}>Add Question</button>
            </div>
        </div>
        <div>
          {showModal &&
          <form  onSubmit={handlesubmit} >
            <div className="qcontainer">
              <div className="flex-col qwindow">
                <div><h3 style={{color:"darkgray"}} >Question:</h3></div>
                  <div>
                    <textarea placeholder="Type your question here" style={{padding:"10px",width:"400px"}}
                      value={question.question} name="question" onChange={handlechange} />
                  </div>
                  <div className="flex-row">
                    <div><button className="btn"onClick={toggleModal} >Cancel</button></div>
                    <div><button className="btn" type="submit">Add</button></div>
                  </div>
                </div>
            </div>
          </form>}
        </div>
      </div>
}

export  default Questions;