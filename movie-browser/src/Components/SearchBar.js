import { useState } from "react";
import '../css/search.css'

export default function(){
    const [searchVal,setsearchVal] = useState("")
    function onValueChangeFunction(oEvent){
        setsearchVal(oEvent.target.value);
        !window.timer && (window.timer = window.setTimeout((val)=>{
            debugger;
            clearTimeout(window.timer);
        },600,searchVal));
    }
    return(
        <>
            <input className="myInput" type="text" onChange={onValueChangeFunction}/>
            <button type="submit" className="searchButton">
                <i class="fa fa-search"></i>

            </button>
        </>
    );
}