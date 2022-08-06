import { useEffect, useState } from 'react';
import './App.css';
import Column from './Column';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
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
      <Navbar/>
      <Home/>
      <select onChange={handleOnChange}>
        <option>POPULARES</option>
        <option>MIS PELICULAS</option>
      </select>
      
      {populares && <Column title ="POPULARES" fetchUrl={request.populares}/>}
      {misPeliculas && <Column title ="Mis Peliculas" fetchUrl={request.misPeliculas}/>}

    </>
  );
}

export default App;

//<Column title ="POPULARES" fetchUrl={request.populares}/>
//<Column title="Mis Peliculas" fetchUrl={request.comedy}/>