import "./styles/App.css";
import { Header } from "./components/Header";
import { Mainbody } from "./components/MainBody";
import { useGameLogic } from "./hooks/gameLogic";

function App() {

  const {pokemon, turnCount, updateGameState} = useGameLogic();

  function handleClick(userSelection) {
    updateGameState(userSelection);
  }
  
  return (
    <>
      <Header turnCount={turnCount} highScore={0} />
      <Mainbody pokemon={pokemon} handleClick={handleClick}/>
    </>
  );
}

export default App;
