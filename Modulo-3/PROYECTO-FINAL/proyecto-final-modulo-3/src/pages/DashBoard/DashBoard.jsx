import './DashBoard.css';
import { Link } from "react-router-dom";

export const DashBoard = () => {
  return (
    <>
     <div  >
      <p id="dashboard" > Dashboard</p>
           
       <Link to="/">
        <button id="boton-click" >
          Haz click aqui y veras lo bueno
        </button>
       </Link>
     </div>
    </>
  )
}
