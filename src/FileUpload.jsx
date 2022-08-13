import React, { useState } from 'react';
import './FileUpload.css'
import './Column.css';
import ProgressBar from './ProgressBar';


const FileUpload = ({setFormComplete}) => {

    const [form, setForm] = useState({
        title: '',
        backdrop_path: '',
      });
    const[image, setImage] = useState(false)
    //const [error, setError] = useState(false)



    // FUNCION CARGAR IMAGEN
    const handleImage = (files) => {

        const fileReader = new FileReader();


        {/*fileReader.onerror = () => {
          setError(true);
        };
    
        fileReader.onloadstart = (data) => {
          if (fileReader.readyState === 1) {
           // let valueProgress = parseInt(data.loaded);
           // setProgress(valueProgress);
          }
        };
    
        fileReader.onprogress = (data) => {
          if (fileReader.readyState === 1) {
            //let valueProgress = parseInt((data.loaded / data.total) * 50, 10);
            //setProgress(valueProgress);
          }
        };*/}


        fileReader.onloadend = () => {
          if (fileReader.readyState === 2) {
            setForm({ ...form, backdrop_path: fileReader.result });
          }
        };

        fileReader.readAsDataURL(files);
        setImage(true)
        return image
};


    //FUNCION CARGAR EL FORMULARIO 

    const onSubmit = (e) => {
        e.preventDefault();
        const { title, backdrop_path } = form;
    
        if (title === '' || backdrop_path === '') return;
    
        const movie = {
          title,
          backdrop_path,
        };
    
        localStorage.setItem('MyUploadedMovies', JSON.stringify(movie));
        setFormComplete(true)
      };




      //FUNCION REACT ONDROP
    const handleDragOver = (event) => {
      event.preventDefault()
    }

    const handleDrag = (evt) => {
      console.log(evt.currentTarget.id)
    }


  return (
    <>
      <div className='fileContainer'>

      { image ? 
              <ProgressBar/>
              
              :
          <div className='fileImgContainer'
            draggable={true}
            onDragOver={handleDragOver}
            onDragStart={handleDrag}
            onDrop={(e) => handleImage(e.target.files[0])}
          >
            <label htmlFor="imgfiles" className='fileImgLabel'>
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
      }

          <div className='fileInputContainer'>
            <input
              className='fileTitleInput'
              value={form.title}
              placeholder='Título'
              type='text'
              onChange={(e) => setForm({ ...form, title: e.target.value})}
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
    </>
  )
}
export default FileUpload