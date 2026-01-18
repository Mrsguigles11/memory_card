import "./styles/App.css";
import { Header } from "./components/Header";
import { Mainbody } from "./components/MainBody";
import { useGameLogic } from "./hooks/gameLogic";
import { GameEndOverlay } from "./components/GameEndOverlay";

function App() {

  const {pokemon, turnCount, highScore, updateGameState} = useGameLogic();

  function handleClick(userSelection) {
    updateGameState(userSelection);
  }
  
  return (
    <>
      <Header turnCount={turnCount} highScore={highScore} />
      <Mainbody pokemon={pokemon} handleClick={handleClick}/>
      <footer className="game_info">Try to click all 12 cards without clicking on the same one twice!</footer>
      <GameEndOverlay score={turnCount}/>
    </>
  );
}

export default App;
