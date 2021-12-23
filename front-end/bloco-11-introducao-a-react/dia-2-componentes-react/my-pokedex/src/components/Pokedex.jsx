import React from 'react';
import Pokemon from './Pokemon';

export class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props;
        return (
          <div className="App">
            <h1>My Pokedex</h1>
            <section className="Pokedex">
              {pokemons.map((pokemon) => <Pokemon key={pokemon.id}pokemon={pokemon} />)}
            </section>
          </div>
        )
    }
}

export default Pokedex;
