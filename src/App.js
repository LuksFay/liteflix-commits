import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import FileUpload from './FileUpload';
function App() {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Banner />
      <FileUpload />
    </div>
    </>
  );
}

export default App;
