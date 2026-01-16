import "./styles/App.css";
import { Header } from "./components/Header";
import { Mainbody } from "./components/MainBody";
import { useGameLogic } from "./hooks/gameLogic";

function App() {

  const {pokemon, updateGameState} = useGameLogic();

  function handleClick(userSelection) {
    updateGameState(userSelection);
  }
  
  return (
    <>
      <Header turnCount={0} highScore={0} />
      <Mainbody pokemon={pokemon} handleClick={handleClick}/>
    </>
  );
}

export default App;
