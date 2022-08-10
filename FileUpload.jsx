import React, { useEffect, useState } from 'react';
import './Column.css';


const FileUpload = () => {

    const [form, setForm] = useState({
        title: '',
        backdrop_path: '',
      });
    
    const [myMovies, setMyMovies] = useState([]);

    const handleImage = (files) => {
        const fileReader = new FileReader();
    
       
        fileReader.onloadend = () => {
          if (fileReader.readyState === 2) {
            setForm({ ...form, backdrop_path: fileReader.result });
          }
        };
    
        fileReader.readAsDataURL(files);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { title, backdrop_path } = form;
    
        if (title === '' || backdrop_path === '') return;
    
        const movie = {
          title,
          backdrop_path,
        };
    
        localStorage.setItem('MyUploadedMovies', JSON.stringify(movie));
      };

    useEffect(() => {
    const storageMovie = JSON.parse(localStorage.getItem('MyUploadedMovies')) ?? [];

    setMyMovies([storageMovie]);
    }, []);


  return (
    <>
    <div>
        
        <input
            type='file'
            defaultValue=''
            accept='image/png,image/jpeg'
            onChange={(e) => handleImage(e.target.files[0])}
            onDrop={(e) => handleImage(e.target.files[0])}
          />

        <input
          value={form.title}
          placeholder='Título'
          type='text'
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <button
          title='Subir Película'
          type='submit'
          onClick={(e) => onSubmit(e)}
        >SUBIR</button>


    </div>

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
          </div>
        ))}
      </div>

    )}
   

    </>

  )
}

export default FileUpload