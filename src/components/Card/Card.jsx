import "./card.css"
export default function Card({id, name, gender, image, hair}){
    return (
        <div key={id} className="card">
        <img src={image}/>
        <h1>{name}</h1>
        <div className="infos">
            <p className="firstInfo"> {gender} </p>
            <p className="secondInfo"> {hair} </p>
        </div>
    </div>
    )
    

}