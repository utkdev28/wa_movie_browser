import { useEffect, useState } from "react";
import '../css/search.css'
import { WaPrepareURLs } from "../Ajax/waPrepareURL";
import fireRequest from "../Ajax/executeAjax";

export default function({fun,searching,fun2}){
    // debugger;
    // const [searchVal,setsearchVal] = useState("")
    // const [isrunnig,setisrunning] = useState(false);
    // var latestVal = null;
    function onValueChangeFunction(oEvent){
        // window.setTimeout
        if(searching)
            return;
        else{
            window.setTimeout(()=>{
                fun2(true);
                fun(true);
            },600);
        }
        // latestVal =  oEvent.target.value;
        // window.setTimeout()
        // setsearchVal(oEvent.target.value);
        // fun(true);
    }
    function onHomePress(oEvent){
        fun(false);
        fun2(false);
        document.getElementsByClassName('myInput')[0].value = null;
    }

    // tried debouncing
    // useEffect(()=>{
    //     let searchVal = document.getElementsByClassName('myInput')[0].value;
    //     if(searchVal == "" || searchVal == null || isrunnig)
    //         return;
    //     else{
    //         setisrunning(true);
    //         window.setTimeout(async()=>{
    //             searchVal = document.getElementsByClassName('myInput')[0].value;
    //             // const obj = WaPrepareURLs('query',1,searchVal);
    //             // const jsondata = await fireRequest(obj.url,obj.options) 
    //             // console.log("search Data" + jsondata);       
    //             setisrunning(false);
    //         },600)
    //     }
    // },[searchVal])
    return(
        <>
            <button className="homeButton" onClick={onHomePress}>Home</button>
            <input className="myInput" type="text" onChange={onValueChangeFunction}/>
            <button type="submit" className="searchButton"></button>
        </>
    );
}