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
        console.log(files)
          const fileReader = new FileReader();
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
      console.log("File(s) in drop zone")
      event.preventDefault()
    }

     
    const handleDrag = (event) => {
      console.log(event.currentTarget.id)
      event.preventDefault()
    }

    const handleDrop = (ev) => {
      ev.preventDefault();
      if (ev.dataTransfer.items) {
        // DataTransferItemList accede a los archivos
        for (let i = 0; i < ev.dataTransfer.items.length; i++) {
          // Si los elementos descartados no son archivos, rechazados!
          if (ev.dataTransfer.items[i].kind === 'file') {
            const file = ev.dataTransfer.items[i].getAsFile();
            handleImage(file)
          }
        }
      } else {
        // DataTransferItemList accede a los archivos
        for (let i = 0; i < ev.dataTransfer.files.length; i++) {
          handleImage(ev.dataTransfer.files[i])
        }
      }
    }
  return (
    <>
      <div className='fileContainer'>

      { image ? 
              <ProgressBar/>
              
              :
          <div className='fileImgContainer'
            onDragOver={handleDragOver}
            onDragStart={handleDrag}
            onDrop={handleDrop}
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