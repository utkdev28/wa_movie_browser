import { useEffect, useState } from "react";
import '../css/search.css'
import { WaPrepareURLs } from "../Ajax/waPrepareURL";
import fireRequest from "../Ajax/executeAjax";

export default function(){
    const [searchVal,setsearchVal] = useState("")
    const [isrunnig,setisrunning] = useState(false);
    var latestVal = null;
    function onValueChangeFunction(oEvent){
        // window.setTimeout
        latestVal =  oEvent.target.value;
        setsearchVal(oEvent.target.value);
    }

    // tried debouncing
    useEffect(()=>{
        let searchVal = document.getElementsByClassName('myInput')[0].value;
        if(searchVal == "" || searchVal == null || isrunnig)
            return;
        else{
            setisrunning(true);
            window.setTimeout(async()=>{
                searchVal = document.getElementsByClassName('myInput')[0].value;
                const obj = WaPrepareURLs('query',1,searchVal);
                const jsondata = await fireRequest(obj.url,obj.options) 
                console.log("search Data" + jsondata);       
                setisrunning(false);
            },600)
        }
    },[searchVal])
    return(
        <>
            <input className="myInput" type="text" onChange={onValueChangeFunction}/>
            <button type="submit" className="searchButton"></button>
        </>
    );
}