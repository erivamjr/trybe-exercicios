import PokemonShow from './Components/PokemonShow';
import pokemons from './data';

import './App.css';

function App() {
  

  return (
    <div className="App">
      <h1>My Pokedex</h1>
      <PokemonShow pokemons = {pokemons}/>
    </div>
  );
}

export default App;
