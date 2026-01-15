import "../styles/Card.css"

export function Card({name, image}) {
    return (
        <div className="card">
            <img src={image} alt={name + "_image"}/>
            <div>{String(name).charAt(0).toUpperCase() + String(name).slice(1)}</div>
        </div>
    )
}