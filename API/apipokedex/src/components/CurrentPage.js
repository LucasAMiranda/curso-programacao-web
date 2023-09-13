import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeListPage from "./PokeListPage";
import pokemonGoImage from "../image/pokemonGo.jpg"; 

function CurrentPage() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
      setPokemons(response.data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      <img src={pokemonGoImage} alt="Pokemon Go" /> 
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PokeListPage pokemons={pokemons} />
      )}
    </div>
  );
}

export default CurrentPage;
