import React,{useState,useEffect} from "react";
import {useNavigate } from 'react-router-dom';
import Questions from "./Questions";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import QCard from "./QCard";
import Quote from "./Quote";
import './Home.css';

function Home(){
    const [name, setName] = useState('');
    const [questions, setQuestions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [show,setShow]=useState(false);
    const navigate = useNavigate();

    function handlelogout(){
        navigate('/');
        localStorage.removeItem("email");
    }
    useEffect(() => {
        const username = localStorage.getItem('username');
        setName(username);
    }, []);
    
    useEffect(() => {
      const storedQuestions = localStorage.getItem('questions');
      if (storedQuestions) {
        setQuestions(JSON.parse(storedQuestions));
      }
    }, []);
    function toggleDropdown() {
        setIsOpen(!isOpen);
    }
    function togglemessage(){
        setShow(true);
    }
    function close(){
        setShow(false);
    }

    return <div>
        <header >
            <div className="home-header">
                <div style={{color:"rgb(180,0,0)",fontWeight:"bold",fontSize:"xx-large"}}>Quora</div>
                <SearchBar handleSearch={setSearchResults}/>
                <div><Questions/></div>
                <div style={{padding:"5px",marginLeft:"5px"}}><div className="logged"><img onClick={toggleDropdown} style={{height:"30px",weight:"30px",borderRadius:"50%"}} src="https://w7.pngwing.com/pngs/811/233/png-transparent-computer-icons-user-login-desktop-others-blue-computer-prints.png" alt="quest" /></div></div>
                    {isOpen && (<div className="dropdown-menu">
                                <ul>
                                    <li>Profile</li>
                                    <li>Settings</li>
                                    <li onClick={handlelogout}>Logout</li>
                                </ul>
                    </div>)}
            </div> 
        </header>
        <div className="search-res">
        {searchResults.length?
            searchResults.map((result) => {
                return <div className="res-container">
                    <div ><QCard que={result.question} ans={result.answer} id={result.id} avator={result.avator} name={result.name}/></div>
                </div>
        }):null}
        </div>
        <div className="content-main">
            <div>
                <div className="quote-container">
                    <div style={{height:"420px",width:"150px"}}><Quote/></div>
                    <div onClick={togglemessage}>
                        <img  style={{height:"100px",width:"100px",borderRadius:"50%"}} src="https://i.kym-cdn.com/photos/images/original/002/429/796/96c.gif" alt="" />
                    </div>
                </div>
                <div>
                    {show && (<div className="message-cloud">
                        <img src="https://i.gifer.com/ZdPA.gif" alt="" />
                        <div className="message-res">
                        <button style={{border:"none",fontWeight:"bold",color:"rgb(160,0,0)",paddingLeft:"25px",backgroundColor:"white"}} onClick={close}>X</button>
                            <ul>
                                <li style={{fontSize:"small"}}>Click "Add Question" to ask questions.</li>
                                <li style={{fontSize:"small"}}>Click "Answer" to give your response.</li>
                                <li style={{fontSize:"small"}}>You can search as well from saved queries.</li>
                            </ul>
                        </div>
                        </div>)}
                </div>
            </div>
        <div className="content-box">
                {questions.map((question) => (
                <QCard id={question.id} que={question.question} name={name} avator={"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/738.jpg"} />
                ))}
                <QCard que={"What Have You Been Up To?"}/>
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