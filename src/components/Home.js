import React,{useState,useEffect} from "react";
import {useNavigate } from 'react-router-dom';
import Questions from "./Questions";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import QCard from "./QCard";
import './Home.css';

function Home(){
    const navigate = useNavigate();
    function handlelogout(){
        navigate('/');
    }
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
      const storedQuestions = localStorage.getItem('questions');
      if (storedQuestions) {
        setQuestions(JSON.parse(storedQuestions));
      }
    }, []);
    const [isOpen, setIsOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const[details,setDetails]=useState(false)
    const handleanswer=()=>{
        setDetails(!details);
    }
    function toggleDropdown() {
        setIsOpen(!isOpen);
      }

    return <div>
        <header >
            <div className="home-header">
                <div style={{color:"rgb(180,0,0)",fontWeight:"bold",fontSize:"xx-large"}}>Quora</div>
                <SearchBar handleSearch={setSearchResults}/>
                <div><Questions/></div>
                <div style={{padding:"5px",marginLeft:"5px"}}><div className="logged"><img onClick={toggleDropdown} style={{height:"30px",weight:"30px",borderRadius:"50%"}} src="https://w7.pngwing.com/pngs/811/233/png-transparent-computer-icons-user-login-desktop-others-blue-computer-prints.png" alt="quest" /></div></div>
                {isOpen && (
                    <div className="dropdown-menu">
                    <ul>
                        <li>Profile</li>
                        <li>Settings</li>
                        <li onClick={handlelogout}>Logout</li>
                        </ul>
                    </div>
                )}
            </div> 
        </header>
        <div className="search-res">
            {searchResults.length?
            searchResults.map((result) => {
                return <div className="res-container">
                    {/* <div className="search-result" key={result.id}>
                        <h6 className="ques" onClick={handleanswer} >{result.question}</h6>
                        {details && <p>{result.answer}</p>}
                    </div> */}
                    <div ><QCard que={result.question} ans={result.answer} id={result.id} avator={result.avator} name={result.name}/></div>
                </div>
            }):null}
        </div>
        <div className="content-main">
        <div className="content-box">
                {questions.map((question) => (
                <QCard key={question.id} que={question.question} />
                ))}
            
        </div>
        <div className="side-container">
            <div className="sidebar-container">
                <h4 style={{paddingLeft:"30px"}}>Explore more</h4>
            <SideBar/>
            </div>
        </div>
        </div>
    </div>

}

export default Home;