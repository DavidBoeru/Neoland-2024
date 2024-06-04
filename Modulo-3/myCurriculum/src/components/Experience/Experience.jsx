
import { CV } from "../../CV/Cv"
import "./Experience.css"

export const Experience = () => {
    const {experience} = CV
  return (
    <div id="tituloExperience" >
            <h2>Experience</h2>
        <div id="experience">
            {experience.map((item) => {
               return(
                <div key={item}>

                <p id="name">🧬 name: {item.name}  </p>
                <p> date: {item.date} </p>
                <p> where: {item.where} </p>
                <p id="description" > description: {item.description} </p>

                </div>
               )
            })}
        </div>
    </div>
  )
}

