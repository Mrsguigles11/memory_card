import "../styles/Mainbody.css";
import { Card } from "./Card";

export function Mainbody({ pokemon }) {
  return (
    <div className="main_body_container">
      {pokemon.map((pokemon) => (
        <Card key={pokemon.name} name={pokemon.name} image={pokemon.image} type={pokemon.type} />
      ))}
    </div>
  );
}
