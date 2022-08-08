import {useState, useEffect} from 'react';
import './App.css';
import Column from './Column';
import Navbar from './Navbar';
import Banner from './Banner';
import request from './request';
function App() {
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
  
  return (
    <>
    <div className='app'>
      
      <Navbar/>
      <Banner />
      <div className='movie_list'>
        <select onChange={handleOnChange}>
          <option>POPULARES</option>
          <option>MIS PELICULAS</option>
        </select>
        {populares && <Column title ="POPULARES" fetchUrl={request.populares}/>}
        {misPeliculas && <Column title ="MIS PELICULAS" fetchUrl={request.misPeliculas}/>}
      </div>
      
    </div>
     
    </>
  );
}

export default App;
