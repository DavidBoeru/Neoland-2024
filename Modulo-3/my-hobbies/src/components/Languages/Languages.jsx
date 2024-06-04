import { HOBBIES } from "../../HOBBIES/HOBBIES"



export const Languages = () => {
    const {languages} = HOBBIES;
  return (
    <div>
        <h1>lenguajes</h1>
        <p>language: {languages.language}</p>
        <p>wrlevel: {languages.wrlevel}</p>
        <p>splevel: {languages.splevel}</p>
    </div>
  )
}

