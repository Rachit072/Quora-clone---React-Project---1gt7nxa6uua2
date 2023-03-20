import React, { useState } from "react";

function SideBar(){
    const [questions, setQuestions] = useState([
        { text: "React ?", url: "https://react.dev/" },
        { text: "What is jsx ?", url: "https://legacy.reactjs.org/docs/introducing-jsx.html" },
        { text: "What are components in react ?", url: "https://legacy.reactjs.org/docs/components-and-props.html" },
        { text: "What is useEffect in React Hooks ?", url: "https://legacy.reactjs.org/docs/hooks-effect.html" },
        { text: "What is code splitting in React ?", url: "https://legacy.reactjs.org/docs/code-splitting.html" },
      ]); 
      const handleQuestionClick = (url) => {
        window.location.href = url;
      };

    return <div>
        <ul>
            {questions.map((question, index) => (
                <li className="sb-questions" key={index} onClick={() => handleQuestionClick(question.url)}>
                    {question.text}
                </li>
            ))}
        </ul>
    </div>
}

export default SideBar;