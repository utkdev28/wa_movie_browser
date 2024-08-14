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
    const [dataFound,setDataFound] = useState(true);
    const [oopsshow,setoopshsow] = useState({
        'display': 'none'
    })

    // Main method loading screen Data for search, home ,intial load
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
                fun2(false);
            }else{
                setCard((prevdata)=>[...(JSONdata.results), ...prevdata])
            }
            // if no data found Screen with OOPs
            if(JSONdata.results.length ==0){
                setDataFound(false);
                setoopshsow({
                    'display':'block'
                })
            }else{
                setoopshsow({
                    'display':'none'
                })
            }
                
        } catch (error) {
            setCard([movies])
        }
    }
    // useEffect hook for page change and searching
    useEffect(()=>{
        let searchVal = document.getElementsByClassName('myInput')[0].value;
        if(search && (searchVal == "" || searchVal == null )){
            return;
        }
        getData(page);
        function handleScroll(){
            if(window.innerHeight + document.documentElement.scrollTop + 2 >= document.documentElement.scrollHeight){
                setPage((prev)=>prev+1);
            }
        }
        window.addEventListener("scroll",handleScroll);
    },[page,search]);
    return (
        <>
            <MoviesRowList JSON={card}></MoviesRowList>
            <h1 style={oopsshow}>OPPS!!! No data Found in Database</h1>
        </>
    );
}