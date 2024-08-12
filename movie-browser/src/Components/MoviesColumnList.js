import Card from "./MovieCard";

export default function MoviesColumnList({JSON}) {
    const listItems = JSON.map((mid,i) =>
        <Card
            key={i}
            title={mid.title}
            content={mid.overview}
            imageUrl={mid.backdrop_path}>
        </Card>
    );
  
    return (
        <div className="movierowlistdiv">
           {listItems}       
        </div>
    );
}