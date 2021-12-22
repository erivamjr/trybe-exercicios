import React from 'react';
import pokemons from '../ data';
import Pokemon from './Pokemon';

export class Pokedex extends React.Component {
    render() {
        return (
            <div className="App">
      <h1>My Pokedex</h1>
      <Pokemon pokemons={pokemons} />
    </div>
        )
    }
}

export default Pokedex;
