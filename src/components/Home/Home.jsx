import React, {useState, useEffect} from 'react'
import axios from '../../axios';
import request from '../../request'
const Home = () => {
  const [movie, setMovie]=useState([]);
  
  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(request.peliculaDestacada)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
    }
    fetchData();
  },[]);
  console.log(movie);
  return (
    <>
    <header className='banner'
      style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    > {/* imagen de fondo */}
      <div className='banner_contents'>
        <div> {/* titulo */}
          <p>ORIGINAL DE <span>LITEFLIX</span></p>
          <h1>
          {movie?.title || movie?.name || movie.original_name}
          </h1>
        </div>
        
        <div clasName='banner_buttons'> {/* botones */}
          <button clasName='banner_button'>REPRODUCIR</button>
          <button clasName='banner_button'>MI LISTA</button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Home 