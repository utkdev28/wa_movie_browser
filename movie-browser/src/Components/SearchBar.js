import { useEffect, useState } from "react";
import '../css/search.css'

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
        if(searchVal == "" || searchVal == null || isrunnig)
            return;
        else{
            setisrunning(true);
            window.setTimeout(()=>{
                console.log(document.getElementsByClassName('myInput')[0].value);
                setisrunning(false);
            },600)
        }
    },[searchVal])
    return(
        <>
            <input className="myInput" type="text" onChange={onValueChangeFunction}/>
            <button type="submit" className="searchButton">
                <i class="fa fa-search"></i>

            </button>
        </>
    );
}