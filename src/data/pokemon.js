
export async function usePokemonApi() {

  let pokemonArray = [
    { name: "pikachu" },
    { name: "poliwhirl" },
    { name: "charizard" },
    { name: "abra" },
  ];

    for (const pokemon of pokemonArray) {
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

    return pokemonArray
    }
  
    

