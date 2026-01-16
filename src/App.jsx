import "./styles/App.css";
import { Header } from "./components/Header";
import { Mainbody } from "./components/MainBody";
import { useGameLogic } from "./hooks/gameLogic";

function App() {

  const {pokemon, turnCount, highScore, updateGameState} = useGameLogic();

  function handleClick(userSelection) {
    updateGameState(userSelection);
  }
  
  return (
    <>
      <Header turnCount={turnCount} highScore={highScore} />
      <Mainbody pokemon={pokemon} handleClick={handleClick}/>
      <div className="game_info">Try to click all 12 cards without clicking on the same one twice!</div>
    </>
  );
}

export default App;
