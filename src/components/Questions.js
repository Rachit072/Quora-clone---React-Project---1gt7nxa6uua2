import React, { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function Questions(){
    const [questions,setQuestions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showanswer, setShowAnswer] = useState(false);
    useEffect(() => {
      const storedQuestions = JSON.parse(localStorage.getItem('questions'));
      if (storedQuestions) {
        setQuestions(storedQuestions);
      }
    }, []);
    const toggleModal = () => {
      setShowModal(false);
    };
    const toggleanswer = () => {
      setShowModal(false);
    };
    const handlesubmit=(event)=>{
      const newQuestion = {
        id: uuidv4(),
        question: "",
        answer: "",
      };
      setQuestions([...questions, newQuestion]);
      localStorage.setItem('questions', JSON.stringify([...questions, newQuestion]));

    }
    const handleAddQuestion = () => {
      const newQuestion = {
        id: uuidv4(),
        question: "",
        answer: "",
      };
      setQuestions([...questions, newQuestion]);
      localStorage.setItem('questions', JSON.stringify([...questions, newQuestion]));
      setShowModal(true);
      };
    const handleAnswer=()=>{
      setShowAnswer(true);
    }
    const handleSaveAnswer = (id, answer) => {
      const updatedQuestions = questions.map((q) =>
        q.id === id ? { ...q, answer } : q
      );
      setQuestions(updatedQuestions);
      localStorage.setItem("questions", JSON.stringify(updatedQuestions));
    };
      

    return <div>
        <div className="Q-A">
            <div>
              <button className="btn" onClick={handleAddQuestion}>Add Question</button>
            </div>
            {/* <div>
              <button className="btn" onClick={handleAnswer}>Answer Questions</button>
            </div> */}
        </div>
        <div>
          <form onSubmit={handlesubmit}>
              {showModal && questions.map((question) => (
                <div className="flex-col qwindow">
                  <div><h3 style={{color:"white"}} >Question:</h3></div>
                  <div>
                    <textarea placeholder="Type your question here" style={{padding:"10px",width:"400px"}}
                      value={question.question}
                      onChange={(e) =>
                       setQuestions(
                        questions.map((q) =>
                        q.id === question.id ? { ...q, question: e.target.value } : q
                    ))}/>
                  </div>
                  <div className="flex-row">
                    <div><button className="btn"onClick={toggleModal} >Cancel</button></div>
                    <div> <button className="btn" type="submit">Add</button></div>
                  </div>
                </div>
                ))}
            </form>
            <form onSubmit={handleSaveAnswer}>
            {showanswer && questions.map((question) => (
                <div className="flex-col qwindow">
                  <div><h3 style={{color:"white"}} >Answer:</h3></div>
                  <div>
                    <textarea placeholder="Type your Answer here" style={{padding:"10px",width:"400px"}}
                      value={question.answer}
                      onChange={(e) =>
                        setQuestions(
                          questions.map((q) =>
                            q.id === question.id ? { ...q, answer: e.target.value } : q
                          )
                        )
                      }/>
                  </div>
                  <div className="flex-row">
                    <div><button className="btn"onClick={toggleanswer} >Cancel</button></div>
                    <div> <button className="btn" type="submit">Add</button></div>
                  </div>
                </div>
                ))}
            </form>
        </div>
      </div>
}

export  default Questions;