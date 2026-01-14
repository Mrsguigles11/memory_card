import { usePokemonApi } from './data/pokemon'
import { useState } from 'react'

export function useGameLogic() {

    const {pokemonArray} = usePokemonApi();

    const [pokemon, setPokemon] = useState(pokemonArray);
    const [selectedPokemon, setSelectedPokemon] = useState(new Set());
    const [turnCount, setTurnCount] = useState(0);
    const [highScore, setHighScore] = useState(0);

    
}