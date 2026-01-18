import "../styles/GameEndOverlay.css"

export function GameEndOverlay({score}) {
    return (
        <div className="overlay visible">
            <div className="overlay_card">
                <div className="game_over visible">
                    <h1>Game Over!</h1>
                    Score: {score}
                </div>
                <h1 className="game_won visible">You Win!</h1>
                <button>Reset</button>
            </div>
        </div>
    )
}