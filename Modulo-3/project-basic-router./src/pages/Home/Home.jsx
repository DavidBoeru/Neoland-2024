import { Link } from "react-router-dom";
import "./Home.css";


export const Home = () => {
  return (
    <>
    
    <h2> Pagina Home </h2>

    <p>App ejemplo sobre React Router</p>
    
     <ul>
        <li>
            <p>
               <span> Visita la pagina de Heroes🧛🏼: </span>
               <Link to="/heroes" > Heroes </Link>
            </p>
        </li>
     </ul>

    </>
  )
}
