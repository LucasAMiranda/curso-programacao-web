import React, { Component } from "react";
import axios from "axios";

class PokeListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonDetails: [],
    };
  }

  async componentDidMount() {
    const fetchData = async () => {
      if (this.props.pokemons && Array.isArray(this.props.pokemons)) {
        const details = await Promise.all(
          this.props.pokemons.map(async (pokemon) => {
            const response = await axios.get(pokemon.url);
            return response.data;
          })
        );
        this.setState({
          pokemonDetails: details,
        });
      }
    };

    fetchData();
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.pokemonDetails.map((pokemon) => (
            <li key={pokemon.id}>
              <h2>{pokemon.name}</h2>
              <img
                src={pokemon.sprites.front_default}
                alt={`${pokemon.name}`}
              />
              <p>Abilities:</p>
              <ul>
                {pokemon.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PokeListPage;
