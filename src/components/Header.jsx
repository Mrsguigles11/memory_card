import "../styles/Header.css"

export function Header({turnCount, highScore}) {

    return (
        <>
        <h1>Pokemon Memory Card!</h1>
        {turnCount}
        {highScore}
        </>
    )

}