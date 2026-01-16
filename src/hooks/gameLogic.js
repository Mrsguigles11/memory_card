import { useState, useEffect } from "react";
import { usePokemonApi } from "../data/pokemon";

export function useGameLogic() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(new Set());
  const [turnCount, setTurnCount] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const pokemonArray = await usePokemonApi();
      setPokemon(pokemonArray);
    }
    fetchData();
  }, []);

  function updateGameState(userSelection) {
    if (selectedPokemon.has(userSelection)) { 
        resetGame();
        return
    }
      setSelectedPokemon((prev) => {
        const updated = new Set(prev);
        updated.add(userSelection);
        console.log(updated);
        return updated;
      });
    setTurnCount((prev) => prev + 1);
    let pokemonCopy = [...pokemon];
    pokemonCopy = shuffleArray(pokemonCopy);
    setPokemon(pokemonCopy);
  }

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function resetGame() {
    if (turnCount > highScore) {
            setHighScore(turnCount)
        }
    let pokemonCopy = [...pokemon];
    pokemonCopy = shuffleArray(pokemonCopy);
    setPokemon(pokemonCopy);
    setSelectedPokemon(new Set());
    setTurnCount(0);
  }

  return { pokemon, turnCount, highScore, updateGameState };
}
