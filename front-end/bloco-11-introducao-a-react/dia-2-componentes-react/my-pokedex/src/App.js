import './App.css';
import pokemons from './ data';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
