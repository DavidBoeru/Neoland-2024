import { CV } from "../../CV/Cv"
import "./Hero.css"


export const Hero = () => {
    const {hero} = CV;
  return (
    <div id="hero" >
        <figure id="imagen">
            <img src={hero.image} />
        </figure>
        <div id="textoInfo" >
             <h1> {hero.name} {hero.surname} </h1>
             <p> {hero.city} </p>
             <p> {hero.email} </p>
             <p> {hero.birthDate} </p>
             <p> {hero.phone} </p>
             <p>💻 <a href={hero.gitHub}> gitHub </a></p>
        </div>
    </div>
  )
}

