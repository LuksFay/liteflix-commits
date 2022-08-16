import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Modal from './Modal';
function App() {
  const [modalOpen, setModalOpen] = useState(false);

  
  return (
    <>
    <div className='app'>
      <Navbar 
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen}
      />
      <Banner   
      />
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
       />
    </div>
    </>
  );
}

export default App;
