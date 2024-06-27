"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import { Card, CardText } from "react-bootstrap";

type Movie = {
    foto: string;
    judul: string;
    rating: number;
};

const MovieCard = () => {
    const [movieData, setMovieData] = useState<Movie[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/movies');
                setMovieData(response.data.data);
                console.log(response.data);
            } catch (error) {
                console.log('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {movieData && (
                <div className="row">
                    {movieData.map((movie, index) => (
                        <div key={index} className="col-md-4">
                            <Card className='bg-transparent text-white text-center movieImage'>
                                <img 
                                    className="card-img-top"
                                    src={movie.foto}
                                    alt="Card image cap"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="bg-dark p-2 m-1">
                                    <CardText>{movie.judul}</CardText>
                                    <CardText>Rating: {movie.rating}</CardText>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MovieCard;
