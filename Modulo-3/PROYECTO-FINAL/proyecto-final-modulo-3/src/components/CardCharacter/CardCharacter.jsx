import "./CardCharacter.css";


export const CardCharacter = ({image, name, status, species, gender}) => {
  return (
    <figure>
        <img src={image} alt={name}/>
        <h2> {name} </h2>
        <p> {status} </p> 
        <p> {species} </p> 
        <p> {gender} </p>
        
        
    </figure>
  )
}
