
import './App.css'
import { Home } from './pages/Home/Home'
import {Footer, Header, Main} from "./components";
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  

  return (
    <>
  
     <Header id="header" >
               <h1> React Router v6 🧪 </h1>
     </Header>
      <div>
     <nav>
       <NavLink to=""> Home </NavLink>
       <NavLink to="heroes"> Heroes </NavLink>
       <NavLink to="about"> About </NavLink>
     </nav>

     <Main>
        <Outlet />
     </Main>

     </div>
    </>
  )
}

export default App
