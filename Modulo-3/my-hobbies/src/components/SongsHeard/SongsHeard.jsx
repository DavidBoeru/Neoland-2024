import { HOBBIES } from "../../HOBBIES/HOBBIES"


export const SongsHeard = () => {
    const {songsHeard} = HOBBIES;
  return (
    <div>
        <h1>Peliculas escuchadas </h1>
         <ul>  
          {songsHeard.map((item) => {
            return(
               <li key={item}>
                     {item}
               </li>
          )})}
         </ul>
    </div>
  )
}
