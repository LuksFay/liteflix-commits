import {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
function App() {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Banner />
    </div>
    </>
  );
}

export default App;
