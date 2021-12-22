import React from "react";

class Pokemon extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <section>
        {pokemons.map((pokemon, index) => (
          <article key={index}>
            <h1>{pokemon.name}</h1>
            <p>{pokemon.type}</p>
            <p>{`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
            <img src={pokemon.image} alt={pokemon.name} />
          </article>
        ))}
      </section>
    );
  }
}

export default Pokemon;
