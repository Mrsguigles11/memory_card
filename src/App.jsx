import "./styles/App.css";
import { Header } from "./components/Header";
import { Mainbody } from "./components/MainBody";
import { useGameLogic } from "./hooks/gameLogic";

function App() {

  const {pokemon} = useGameLogic();
  
  return (
    <>
      <Header turnCount={0} highScore={0} />
      <Mainbody pokemon={pokemon}/>
    </>
  );
}

export default App;
