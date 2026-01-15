
  let pokemonArray = [
    { name: "pikachu" },
    { name: "poliwhirl" },
    { name: "charizard" },
    { name: "abra" },
  ];

    for (const pokemon of pokemonArray) {
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

export {pokemonArray}
