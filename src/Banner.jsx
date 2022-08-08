import React, {useState, useEffect} from 'react';
import Column from './Column';
import axios from './axios';
import requests from './request';
import request from './request';
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
  const [category, setCategory] = useState("POPULARES")
  const [populares, setPopulares] = useState(true)
  const [misPeliculas, setMisPeliculas] = useState(false)
  
  useEffect(()=>{
      category === "POPULARES" ? setPopulares(true) : setPopulares(false);
      category === "MIS PELICULAS" ? setMisPeliculas(true) : setMisPeliculas(false);
    }, [category])
  
  const handleOnChange = (e) => {
    setCategory(e.target.value);
  };

  //const truncate = (str, n) =>{
 //   return str?.length > n ? str.substr(0, n-1) + "..." : str;
 //word-wrap: break-word;
  //}

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
          {/*truncate(movie?.title,16) || truncate(movie?.name,16) || truncate(movie?.original_name,16)*/}
          {movie?.title || movie?.name || movie.original_name}
          </h1>
        </div>
        
        <div className='banner_buttons'> {/* botones */}
          <button className='banner_button'>REPRODUCIR</button>
          <button className='banner_button banner_button_lista'>MI LISTA</button>
        </div>
      </div>

      <div className='movie_list'>
        <span>ver:</span>
        <select onChange={handleOnChange}>
          <option>POPULARES</option>
          <option>MIS PELICULAS</option>
        </select>
        {populares && <Column fetchUrl={request.populares}/>}
        {misPeliculas && <Column fetchUrl={request.misPeliculas}/>}
      </div>

    </header>
    </>
  )
}

export default Banner

