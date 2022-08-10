import React, { useEffect, useState } from 'react';
import './FileUpload.css'
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

    const handleDragOver = (event) => {
      event.preventDefault()
  }
  const handleDrag = (evt) => {
    console.log(evt.currentTarget.id)
  }

  return (
    <>
    <div className='fileContainer'>
        <div className='fileImgContainer'
         draggable={true}
         onDragOver={handleDragOver}
         onDragStart={handleDrag}
         onDrop={(e) => handleImage(e.target.files[0])}
        >
          <label htmlFor="imgfiles" className='fileImgLabel'
          >
            Agregá un archivo o arrastralo y soltalo aquí  
          </label>  
          <input
              className='fileImgInput'
              id='imgfiles'
              type='file'
              defaultValue=''
              accept='image/png,image/jpeg'
              onChange={(e) => handleImage(e.target.files[0])}
            />
        </div>
        <div className='fileInputContainer'>
          <input
            className='fileTitleInput'
            value={form.title}
            placeholder='Título'
            type='text'
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className='buttonContainer'>
          <button
            className='fileImgButton'
            type='submit'
            onClick={(e) => onSubmit(e)}
          >
            Subir película
          </button>
        </div>
       


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