import "../styles/Card.css"

export function Card({name, image}) {
    return (
        <div className="card_container">
            <div>{name}</div>
            <img src={image} alt={name + "_image"}/>
        </div>
    )
}