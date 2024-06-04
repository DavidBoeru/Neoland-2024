import "./More.css"
import { CV } from "../../CV/Cv"

export const More = () => {

    const {languages} = CV;
    const {habilities} = CV;

  return (
    <>
    <div id="tituloLenguajes" >
         <h2 > Lenguajes </h2>
     
        <div id="cuerpoLenguajes" >
           <ul>
           <p>🖌️ language: {languages.language} </p>  
           <p>🖌️ wrlevel: {languages.wrlevel}  </p>
           <p>🖌️ splevel: {languages.splevel}  </p>
          </ul>
       </div>
      
    </div> <br></br>
    <div id="habilidades" >
          <h2> Habilidades </h2>
          <div>
           <ul id="itemHabilities" >

              {habilities.map((item) => {
            return (
                <li  key={item} >
                 <p> 📈 {item} </p>
                </li>
                  )
              })}

             </ul>
          </div>
    </div>

    </>
  )
}
