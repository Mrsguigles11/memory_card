import "../styles/Mainbody.css";
import { Card } from "./Card";

export function Mainbody({ pokemonArray, handleClick }) {

  return (
    <main className="main_body_container">
      <div className={pokemonArray.length === 0 ? "loader visible" : "loader"}></div>
      {pokemonArray.map((pokemon) => (
        <Card
          key={pokemonArray.indexOf(pokemon)}
          name={pokemon.name}
          image={pokemon.image}
          type={pokemon.type}
          handleClick={handleClick}
        />
      ))}
    </main>
  );
}
