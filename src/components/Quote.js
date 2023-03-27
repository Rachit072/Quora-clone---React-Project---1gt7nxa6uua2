import {useEffect,useState} from "react";
import quote from '../quote.json';

function Quote(){
    const [randomquote, setRandomquote] = useState('');
    useEffect(() => {
            const quotes = quote.quote;
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setRandomquote(quotes[randomIndex]);
      }, []);

    return <div>
        <div>
            <p style={{color:"navy",fontWeight:"bolder"}}>Quote of the day</p>
            <p>{randomquote.text}"</p>
            <p style={{fontWeight:"bold",fontSize:"small"}}>- {randomquote.author}</p>
        </div>
    </div>
}
export default Quote;