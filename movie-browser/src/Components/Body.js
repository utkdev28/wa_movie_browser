import { useState } from "react"
import MovieContainer from "./MovieContainer"
import SearchBar from "./SearchBar"

export default function Body(){
  // const [searchVal,setsearchVal] = useState("")
  const [page,setPage] = useState(1);
  const [card,setCard] = useState([]);
    return (
      <>
        <div className="searchWrapper">
          <SearchBar/>
        </div>
        <div>
          <MovieContainer />
        </div>
      </>
    )
};