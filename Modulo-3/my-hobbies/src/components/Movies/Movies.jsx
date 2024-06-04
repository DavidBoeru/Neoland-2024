import { HOBBIES } from "../../HOBBIES/HOBBIES"
import "./Movies.css"


export const Movies = () => {
    const {movies} = HOBBIES;

  return (
    <div>
        <h1>Peliculas</h1>
        <ul>

             {movies.map((item) => {
                return (
              <li key={item}>
                 <p> Name: {item.name}</p>
                 <p> type: {item.type}</p>
                 <p> genre: {item.genre}</p>
                 <p> vote: {item.vote}</p>
              </li>
                );
             })}
        </ul>
    </div>
  )
}
