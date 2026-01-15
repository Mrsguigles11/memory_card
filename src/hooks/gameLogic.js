import { useState } from 'react'

export function useGameLogic() {

    const [pokemon, setPokemon] = useState();
    const [selectedPokemon, setSelectedPokemon] = useState(new Set());
    const [turnCount, setTurnCount] = useState(0);
    const [highScore, setHighScore] = useState(0);

    
}