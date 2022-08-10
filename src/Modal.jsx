import React from 'react';
import FileUpload from './FileUpload';
import './Modal.css';

const Modal = ({modalOpen, setModalOpen}) => {
  return (
    <>
    {modalOpen && 
        <div className='overlay'>
            <div className='modalContainer'>
                <div className='modalHeader'>
                    <h4>Agregar Película</h4>
                </div>

                <button className='closeButton' onClick={()=>setModalOpen(!modalOpen)}>
                    <img src={require('./assets/menu_close.png')} alt="close"/>
                </button>    
            <FileUpload />
            </div>
        </div>
    }
    </>
  )
}

export default Modal