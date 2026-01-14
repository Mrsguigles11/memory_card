// the use of state and a custom hook is not efficient here, it would be more efficient to use vanilla JS however i want
// to practice using react effects

import { useEffect, useState } from "react";

export function usePokemonApi() {
  const [pokemonArray, setPokemonArray] = useState([
    { name: "pikachu" },
    { name: "poliwhirl" },
    { name: "charizard" },
    { name: "abra" },
  ]);

  useEffect(() => {
    const pokemonArrayCopy = [...pokemonArray];

    for (const pokemon of pokemonArrayCopy) {
      async function getPokemon() {
        try {
          const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + pokemon.name
          );
          const data = await response.json();
          pokemon.image = data.sprites.front_default;
        } catch (error) {
          console.log(error);
        }
      }
      getPokemon();
    }

    setPokemonArray(pokemonArrayCopy);
  }, []);

  console.log(pokemonArray);

  return pokemonArray;
}
