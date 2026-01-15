
export async function usePokemonApi() {

  let pokemonArray = [
    { name: "pikachu" },
    { name: "poliwhirl" },
    { name: "charmander" },
    { name: "abra" },
    { name: "bulbasaur" },
    { name: "ditto" },
    { name: "diglett" },
    { name: "pidgey" },
    { name: "magikarp" },
    { name: "eevee" },
    { name: "gengar" },
    { name: "mew" },

  ];

    for (const pokemon of pokemonArray) {
        try {
          const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + pokemon.name
          );
          const data = await response.json();
          pokemon.image = data.sprites.front_default;
          pokemon.type = data.types[0].type.name;
        } catch (error) {
          console.log(error);
        }
      }

    return pokemonArray
    }
  
    

