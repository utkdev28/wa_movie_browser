import { useState } from "react"
import MovieContainer from "./MovieContainer"
import SearchBar from "./SearchBar"

export default function Body(){
    const [issearch,setissearch] = useState(false);
    const [issearchRunning,setissearchRunning] = useState(false);
      return (
        <>
          <div className="searchWrapper">
            <SearchBar  fun={setissearch} searching={issearchRunning} fun2={setissearchRunning}/>
          </div>
          <div>
            <MovieContainer search={issearch} searching={issearchRunning} fun={setissearch} fun2={setissearchRunning}/>
          </div>
        </>
      )
};