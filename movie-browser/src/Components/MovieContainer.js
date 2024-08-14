import { useEffect, useState } from "react";
import MoviesRowList from "./MovieRowList";
import fireRequest from "../Ajax/executeAjax";
import { WaPrepareURLs } from "../Ajax/waPrepareURL";

const movies = [
    { title: 'MCU', content: 'false', id: 1 },
    { title: 'Marvel', content: 'false', id: 2 },
    { title: 'Deedpool', content: 'true', id: 3 },
    { title: 'MCU2', content: 'false', id: 1 },
    { title: 'Marvel2', content: 'false', id: 2 },
    { title: 'Deedpool2', content: 'true', id: 3 },
    { title: 'MCU3', content: 'false', id: 1 },
    { title: 'Marvel3', content: 'false', id: 2 },
    { title: 'Deedpool3', content: 'true', id: 3 },
];
export default function MovieContainer({search,searching,fun,fun2}){
    const [page,setPage] = useState(1);
    const [card,setCard] = useState([]);
    // const [isrunnig,setisrunning] = useState(false);

    const getData = async (page)=>{
        try {
            let obj;
            if(search){
                const searchVal = document.getElementsByClassName('myInput')[0].value;
                obj = WaPrepareURLs('query',page,searchVal);
            }else
                obj = WaPrepareURLs('list',page)
            const JSONdata = await fireRequest(obj.url,obj.options);
            console.log(JSONdata);
            if(search){
                setCard(JSONdata.results);
                // fun(false);
                fun2(false);
            }else{
                debugger;
                try {
                    setCard((prevdata)=>[...(JSONdata.results), ...prevdata])
                } catch (error) {
                    debugger;
                }
                
            }
                
        } catch (error) {
            setCard([movies])
        }
        
        // setCard(JSONdata)
        // const resp = await 
    }

    useEffect(()=>{
        let searchVal = document.getElementsByClassName('myInput')[0].value;
        if(search && (searchVal == "" || searchVal == null )){
            // fun(false);
            return;
        }
        // else{
        //     // setisrunning(true);
        //     window.setTimeout(async()=>{
        //         searchVal = document.getElementsByClassName('myInput')[0].value;
        //         getData(page)
        //         // setisrunning(false);
        //     })
        // }

        getData(page);
        function handleScroll(){
            if(window.innerHeight + document.documentElement.scrollTop + 2 >= document.documentElement.scrollHeight){
                setPage((prev)=>prev+1);
            }
        }
        window.addEventListener("scroll",handleScroll);
        // return function(){window.removeEventListener("scroll",handleScroll)};
    },[page,search]);




    // while(movies.length > idx ){
        // result.push(
            
        // idx+=3;
    // }
    return (
        <>
            <MoviesRowList JSON={card}></MoviesRowList>
        </>
    );
}