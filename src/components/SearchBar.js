import React,{useEffect, useState} from "react";

// import data from '../data.json';

function SearchBar({handleSearch}){
    const [search,setSearch]=useState("");
    const [query, setQuery] = useState([]);

    useEffect(() => {
        const res = JSON.parse(localStorage.getItem('questions')) || [];
        setQuery(res);
    },[]);

    useEffect(()=>{
        const id = setTimeout(() => {
            if(search){
                const results = query.filter((d) =>
                d.question.toLowerCase().includes(search.toLowerCase()))
                handleSearch(results);
            } 
            else{
                handleSearch([]);
            }
        }, 300);
            return () => {
                clearTimeout(id);
            };
        },[search]);

    return <div>
        <div><input onChange={(e) => {
          setSearch(e.target.value);
        }} style={{width:"890px",height:"30px",padding:"5px 10px",marginLeft:"20px",border:"1px solid lightgray"}} type="text" placeholder="🔍 Search for questions, people and topics" /></div>
    
    </div>
}

export default SearchBar;