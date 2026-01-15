import "./styles/App.css";
import { Header } from "./components/Header";
import { Mainbody } from "./components/MainBody";
import { pokemonArray } from "./data/pokemon";

function App() {

  return (
    <>
      <Header turnCount={0} highScore={0} />
      <Mainbody pokemon={pokemonArray}/>
    </>
  );
}

export default App;
