import React, {useState, useEffect} from 'react'
import axios from './axios';
import requests from './request';
import './Banner.css';


const base_url = "https://image.tmdb.org/t/p/original"
const Banner = () => {
  const [movie, setMovie]=useState([]);
  
  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(requests.peliculaDestacada)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
    }
    fetchData();
  },[]);
  return (
    <>
    <header className='banner'
      style={{
        backgroundSize:"cover",
        backgroundImage:`url("${base_url}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    > {/* imagen de fondo */}
      <div className='banner_contents'>
        <div> {/* titulo */}
          <p className='banner_original_thin'>ORIGINAL DE <span className='banner_original_bold'>LITEFLIX</span></p>
          <h1 className='banner_title'>
          {movie?.title || movie?.name || movie.original_name}
          </h1>
          
        </div>
        
        <div className='banner_buttons'> {/* botones */}
          <button className='banner_button'>REPRODUCIR</button>
          <button className='banner_button banner_button_lista'>MI LISTA</button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Banner

