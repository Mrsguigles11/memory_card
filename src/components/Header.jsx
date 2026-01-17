import "../styles/Header.css"

export function Header({turnCount, highScore}) {

    return (   
        <header className="header_container">
            <h1>Pokemon Memory Card</h1>
            <div className="score_container">
                <div>Score: {turnCount}</div>
                <div>High Score: {highScore}</div>
            </div>
        </header>
    )

}