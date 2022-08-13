import React from 'react'

const FileUploaded = () => {
  return (
    <>
        <div className="fileContainer text">
            <p className='congrats'>¡Felicitaciones!</p>
            <p className='congratsInfo'>Liteflix The Movie fue correctamente subida.</p>
        </div>
        
        <div className='buttonContainer'>
            <button
            className='fileImgButton'
            type='submit'
            //onClick={(e) => onSubmit(e)}
            >
            Ir a Home
            </button>
        </div>
    </>
  )
}

export default FileUploaded