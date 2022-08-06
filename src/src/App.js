import { useEffect, useState } from 'react';
import './App.css';
import Column from './Column';
import request from './request';

function App() {
  const [category, setCategory] = useState("POPULARES")
  const [populares, setPopulares] = useState(true)
  const [comedy, setComedy] = useState(false)

  useEffect(()=>{
    category === "POPULARES" ? setPopulares(true) : setPopulares(false);
    category === "MIS PELICULAS" ? setComedy(true) : setComedy(false);
  }, [category])


  const handleOnChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <>
      <select onChange={handleOnChange}>
        <option>POPULARES</option>
        <option>MIS PELICULAS</option>
      </select>
      
      {populares && <Column title ="POPULARES" fetchUrl={request.populares}/>}
      {comedy && <Column title ="Mis Peliculas" fetchUrl={request.comedy}/>}
    </>
  );
}

export default App;

//<Column title ="POPULARES" fetchUrl={request.populares}/>
//<Column title="Mis Peliculas" fetchUrl={request.comedy}/>