import './App.css';
import Column from './Column';
import request from './request';

function App() {
  return (
    <>
      <Column title ="POPULARES" fetchUrl={request.populares}/>
      <Column title="Mis Peliculas" fetchUrl={request.comedy}/>
      <select>
        <option>POPULARES</option>
        <option>MIS PELICULAS</option>
      </select>
      {this.state.value === "test" ? <Column title ="POPULARES" fetchUrl={request.populares}/>: <Component2 title="Mis Peliculas" fetchUrl={request.comedy}/>}
    </>
  );
}

export default App;
