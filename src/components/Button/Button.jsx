
export default function Button({title, color, handleClick}){
   return (
    <button onClick={handleClick} style={{color}}>{title}</button>
   )
}



