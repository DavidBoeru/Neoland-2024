import { HOBBIES } from "../../HOBBIES/HOBBIES"



export const Sports = () => {
    const {sports} = HOBBIES;
  return (
    <div>
      <h1>Deportes</h1>
        <ul>
        {sports.map((item) => (
            <li key={item}> 
           <p> Name: {item.name} </p> 
           <p> Indoor: {item.indoor ? 'yes' : 'no'}</p>
            <p> favoriteTeam: {item.favoriteTeam}</p>
            </li>

        ))}
       </ul>
    </div>
  )
}

