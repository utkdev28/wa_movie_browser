import Card from "./MovieCard";

export default function MoviesColumnList({JSON}) {
    const listItems = JSON.map((mid,i) =>
        <Card
            key={i}
            title={mid.title}
            content={"Year of Release :" + mid.release_date.split('-')[0]}
            imageUrl={mid.backdrop_path}>
        </Card>
    );
  
    return (
        <div className="movierowlistdiv">
           {listItems}       
        </div>
    );
}