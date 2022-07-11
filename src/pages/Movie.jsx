import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarnarkTextFill } from 'react-icons/bs';

import { MovieCard } from '../components/MovieCard';

import './Movie.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export function Movie(){

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?api_key=${apiKey}`
    // const topRatedUrl = `${moviesURL}top_rated?api_key=${apiKey}`;
    getMovie(movieUrl)
  }, [])

  return(
    <div className='movie-page'>
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className='info'>
            <h3>Orçamento:</h3>
            <p>{movie.budget}</p>
          </div>
          <div className='info'>
            <h3>Receita:</h3>
            <p>{movie.revenue}</p>
          </div>
          <div className='info'>
            <h3>Duração:</h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className='info description'>
            <h3>Descrição:</h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
}