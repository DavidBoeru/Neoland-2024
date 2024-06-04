import { HOBBIES } from "../../HOBBIES/HOBBIES"


export const Read = () => {

const {read} = HOBBIES;
  return (
    <div>
        <h1>Libros</h1>
        
        <ul>
        {read.otherBooks.map((item) => (
            <li key={item}> {item.info} </li>
        ))}
        </ul>
    </div>
  )
}





