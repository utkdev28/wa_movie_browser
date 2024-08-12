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
export default function MovieContainer(){
    const result =[] ;
    let idx = 0
    
    const [card,setCard] = useState({'page':1,'results':[]});

    const getData = async ()=>{
        try {
            const obj = WaPrepareURLs('list')
            const JSONdata = await fireRequest(obj.url,obj.options);
            console.log(JSONdata);
            setCard(JSONdata)
        } catch (error) {
            setCard({
                'page' :1,
                'results' :movies
            })
        }
        
        // setCard(JSONdata)
        // const resp = await 
    }

    useEffect(()=>{
        getData();
    },[]);

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