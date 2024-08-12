import Card from "./MovieCard";
import MoviesRowList from "./MovieRowList";

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
    while(movies.length > idx ){
        result.push(
            <MoviesRowList
                key={idx}
                JSON={movies.slice(idx,idx+3)}
            ></MoviesRowList>);
        idx+=3;
    }
    return result;
}