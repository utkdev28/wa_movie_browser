import Card from "./MovieCard";

export default function MoviesRowList({JSON}) {
    const listItems = JSON.map((mid,i) =>
        <Card
            key={i}
            title={mid.title}
            content={mid.content}
            imageUrl="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg">
        </Card>
    );
  
    return (
        <div className="movielistdiv">
            {listItems}        
        </div>
    );
}