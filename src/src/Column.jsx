import { useState, useEffect } from 'react';
import axios from './axios';
import './Column.css'

const base_url = "https://image.tmdb.org/t/p/original"
const Column = ({title, fetchUrl}) => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results.sort(() => 0.5 - Math.random()).slice(0, 4));
            return request;
        }
        fetchData();
    },[fetchUrl]);
    return (
    <div className='column'>
        <h2>{title}</h2>

        <div className="column_posters">
            {movies.map(movie =>
                <img className='column_poster' src={`${base_url}${movie.poster_path}`} alt={movie.title} key={movie.title}/>    
            )}
        </div>
    </div>
  )
}

export default Column;