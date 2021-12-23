import React from "react";

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <article className="Pokemon">
        <div>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.type}</p>
          <p>{`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
        </div>
        <div>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
      </article>
    );
  }
}

export default Pokemon;
