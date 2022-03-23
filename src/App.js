import './App.css';
import {useEffect, useState} from 'react';
import PokeForm from './PokeForm/PokeForm';



function App() {
  const [nombrePokemon, setNombrePokemon] = useState(null);
  const [listaPokemones, setListaPokemones] = useState( [] );

  const buscarPokemones = ( e ) => {
    e.preventDefault();
    setNombrePokemon( (nombrePrev) => 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=806' );
  }

  useEffect(() => {
    fetch( nombrePokemon )
      .then(res => res.json())
      .then(data => {
        setListaPokemones(data.results);
        console.log(data.results);
      })
      .catch(err => {
        console.log( err );
      })
  }, [nombrePokemon])

  return (
    <div className="App">
      <PokeForm buscarPokemones={buscarPokemones}/>
      {
        listaPokemones.map( (pokemon, indice) => {
          return (
            <li key={indice}>
              {indice} - {pokemon.name}
            </li>
          );
        })
      }
    </div>
  );
}

export default App;