import Poster from "./Poster";
import Tag from "./Tag";
import img from "../assets/poster.jpg";

const movies = [
    {
        title: "Inception",
        genre: "Sci-Fi",
        posterUrl: img,
        rating: 2.8,
    },
    {
        title: "The Shawshank Redemption",
        genre: "Drama",
        posterUrl: img,
        rating: 9.3,
    },
    {
        title: "The Dark Knight",
        genre: "Action",
        posterUrl: img,
        rating: 9.0,
    },
    {
        title: "Parasite",
        genre: "Thriller",
        posterUrl: img,
        rating: 8.6,
    },
    {
        title: "Interstellar",
        genre: "Adventure",
        posterUrl: img,
        rating: 8.6,
    },
    {
        title: "Forrest Gump",
        genre: "Drama",
        posterUrl: img,
        rating: 7.8,
    },
    {
        title: "The Matrix",
        genre: "Sci-Fi",
        posterUrl: img,
        rating: 8.7,
    },
    {
        title: "Gladiator",
        genre: "Action",
        posterUrl: img,
        rating: 8.5,
    },
    {
        title: "The Grand Budapest Hotel",
        genre: "Comedy",
        posterUrl: img,
        rating: 8.1,
    },
    {
        title: "La La Land",
        genre: "Musical",
        posterUrl: img,
        rating: 3.0,
    }
];


export default function MovieCard() {
    return (
        <div className="movie-row">
            {movies.map((p, index) => (
                <div key={index} className="movie-card">
                    <div className="movie-content">
                        <Poster src={p.posterUrl} alt={p.title} />
                        <div className="movie-info">
                            <h3>{p.title}</h3>
                            <p>{p.genre}</p>
                            <Tag rate={p.rating} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

