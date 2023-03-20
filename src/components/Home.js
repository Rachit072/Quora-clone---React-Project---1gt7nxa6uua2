import React,{useState} from "react";
import Questions from "./Questions";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import QCard from "./QCard";

function Home(){
    const [searchResults, setSearchResults] = useState([]);
    const[details,setDetails]=useState(false)
    const handleanswer=()=>{
        setDetails(!details);
    }

    return <div>
        <header>
            <div className="home-header">
                <div style={{color:"rgb(180,0,0)",fontWeight:"bold",fontSize:"xx-large"}}>Quora</div>
                <SearchBar handleSearch={setSearchResults}/>
                <div style={{padding:"5px"}}><button style={{backgroundColor:"rgb(180,0,0)",borderRadius:"15px",border:"none",color:"white",padding:"8px"}} >Sign In</button></div>
            </div> 
        </header>
        <div>
            {searchResults.length?
            searchResults.map((result) => {
                return <div className="res-container">
                    <div className="search-result" key={result.id}>
                        <h6 className="ques" onClick={handleanswer} >{result.question}</h6>
                        {details && <p>{result.answer}</p>}
                    </div>
                </div>
            }):null}
        </div>
        <Questions/>
        <div className="content">
        <div><QCard/></div>
        <div className="side-container">
            <div className="sidebar-container">
                <h4 style={{paddingLeft:"30px"}}>Explore more</h4>
            <SideBar />
            </div>
        </div>
        </div>
        
    </div>

}

export default Home;