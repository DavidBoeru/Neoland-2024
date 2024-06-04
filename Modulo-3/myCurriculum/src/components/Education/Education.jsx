import { CV } from "../../CV/Cv"
import "./Education.css"

export const Education = () => {
    const {education} = CV
  return (
    <div id="tituloEducation" >
               <h2>Education</h2>
        <div id="education">
              {education.map((item) => {
                return(
                  <div key={item}>

                    <p id="name">📚name: {item.name} </p>
                    <p>date: {item.date}  </p>
                    <p>where: {item.where} </p>

                  </div>
                )
              })}
        </div>
    </div>
  )
}

