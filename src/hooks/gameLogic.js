import { useState, useEffect } from 'react'
import { usePokemonApi } from '../data/pokemon';

export function useGameLogic() {

    const [pokemon, setPokemon] = useState([]);
    // const [selectedPokemon, setSelectedPokemon] = useState(new Set());
    // const [turnCount, setTurnCount] = useState(0);
    // const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        async function fetchData() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const pokemonArray = await usePokemonApi();
        setPokemon(pokemonArray)
        }
        fetchData();
    }, []);

    return {pokemon}

}