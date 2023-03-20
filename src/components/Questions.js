import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Questions(){
    const [questions,setQuestions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
      setShowModal(false);
    };

    const handleAddQuestion = () => {
    const newQuestion = {
          id: uuidv4(),
          question: "",
          answer: "",
        };
        setQuestions([...questions, newQuestion]);
        setShowModal(true);
        
      };
      

    return <div>
        <div className="Q-A">
            <div>
              <button className="btn" onClick={handleAddQuestion}>Add Question</button>
            </div>
            <div>
              <button className="btn">Answer Questions</button>
            </div>
        </div>
        <div>
          <div>
              {showModal && questions.map((question) => (
                <div className="flex-col qwindow">
                  <div><h3 style={{color:"white"}} >Question:</h3></div>
                  <div>
                    <textarea placeholder="Type your question here" style={{padding:"10px",width:"400px"}}
                      value={question.text}
                      onChange={(e) =>
                       setQuestions(
                        questions.map((q) =>
                        q.id === question.id ? { ...q, text: e.target.value } : q
                    ))}/>
                  </div>
                  <div className="flex-row">
                    <div><button className="btn"onClick={toggleModal} >Cancel</button></div>
                    <div> <button className="btn">Add</button></div>
                  </div>
                </div>
                ))}
            </div>
        </div>
      </div>
}

export  default Questions;