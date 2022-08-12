import { useState, useEffect } from 'react';
import axios from './axios';
import './Column.css'

const base_url = "https://image.tmdb.org/t/p/original/"
const Column = ({fetchUrl}) => {
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

        <div className="column_posters">
            {movies.map((movie) =>(
                <div className='poster_container' key={movie.id}>
                    <div className='column_poster_info'>
                        <p className='column_poster_name'>{movie.title}</p>
                    </div> 
                    <img
                        className='column_poster'
                        src={`${base_url}${movie.backdrop_path}`}
                        alt={movie.title}
                    /> 
                    <div className='poster--fadeBottom' />  
                </div>
            ))}
        </div>
    </div>
  )
}

export default Column;