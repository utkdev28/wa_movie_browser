import Card from "./MovieCard";
import MoviesColumnList from "./MoviesColumnList";

export default function MoviesRowList({JSON}) {
    let listrowItem= [];
    let idx = 0
    while(JSON.results.length > 0 && idx < JSON.results.length){
        let arr = JSON.results.slice(idx,idx+4);
        listrowItem.push(
            <MoviesColumnList
                key={idx}
                JSON={arr}
            >     
            </MoviesColumnList>
        )
        idx+=4;
    }
    return (
        <div className="MovieColumndiv">
           {listrowItem}       
        </div>
    );
}