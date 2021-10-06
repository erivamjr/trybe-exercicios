import PokemonShow from './Components/PokemonShow';

import './App.css';

function App() {
  const pokemons = 
    {
        id: 25,
        name: "Pikachu",
        type: 'Electric',
        averageWeight: {
            value: 6.0,
            measurementUnit: "kg"
        },
        image: "https:\/\/cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
        moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
    };

  return (
    <div className="App">
      <h1>My Pokedex</h1>
      <section>
        <article>
        <h1>{pokemons.name}</h1>
        <p>{pokemons.type}</p>
        <p>{`${pokemons.averageWeight.value} ${pokemons.averageWeight.measurementUnit}`}</p>
        <img src ={pokemons.image} alt={pokemons.name} />
        </article>
      </section>
    </div>
  );
}

export default App;
