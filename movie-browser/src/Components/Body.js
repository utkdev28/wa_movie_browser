import MovieContainer from "./MovieContainer"
import SearchBar from "./SearchBar"

export default function Body(){
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