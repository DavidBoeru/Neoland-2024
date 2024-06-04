import { Link, Outlet } from "react-router-dom";
import { HeroeDetail } from "../../components/HeroeDetail/HeroeDetail";
import "./Heroes.css";
import { heroes } from "../../data/heroes.data";


export const Heroes = () => {

  
  return (
   <>
     <div>
        <h1>All heroes 🦸‍♂️🦸‍♀️</h1>

        <ul>
          {heroes.map((heroe) => (
            <li key={heroe.id}>
              <Link to={`/heroes/${heroe.id}`}>
                <HeroeDetail heroe={heroe} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
   </>
  )
}
