import "../styles/GameEndOverlay.css";
import { useEffect } from "react";

export function GameEndOverlay({ result, score, reset }) {
  
    useEffect(() => {
    if (result !== "") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [result]);

  return (
    <div className={result != "" ? "overlay visible" : "overlay"}>
      <div className="overlay_card">
        <div
          className={result === "game over" ? "game_over visible" : "game_over"}
        >
          <h1>Game Over!</h1>
          Score: {score}
        </div>
        <h1 className={result === "game won" ? "game_won visible" : "game_won"}>
          You Win!
        </h1>
        <button onClick={() => reset(result === "game over" ? false : true)}>
          Reset
        </button>
      </div>
    </div>
  );
}
