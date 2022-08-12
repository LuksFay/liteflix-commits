import { useState, useEffect } from 'react';
import './Column.css'

const MyColumn = () => {

    const [myMovies, setMyMovies] = useState([]);

    useEffect(() => {
    const storageMovie = JSON.parse(localStorage.getItem('MyUploadedMovies')) ?? [];
    setMyMovies([storageMovie]);
    }, []); 
    
    return (
    <div className='column'>
        {myMovies.length > 0 &&(
            <div className="column_posters">
                {myMovies.map((movie) =>(
                <div className='poster_container' key={movie.title}>
                    <div className='column_poster_info'>
                    <p className='column_poster_name'>{movie.title}</p>
                    </div> 
                    <img
                    className='column_poster'
                    src={movie.backdrop_path}
                    alt={movie.title}
                    /> 
                    <div className='poster--fadeBottom' />  
                </div>
                ))}
            </div>

            )}
    </div>
  )
}

export default MyColumn;