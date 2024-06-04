import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// importamos enrutado del router dom
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//importamos paginas
import Home from "./pages/Home/Home.jsx";
import About from  "./pages/About/About.jsx";
import Heroes from   "./pages/Heroes/Heroes.jsx";
import Heroe  from   "./pages/Heroe/Heroe.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/" >
         <Routes>
            <Route path="/"  element={<App/>} >
               <Route index  element={<Home/>} />
               <Route path="/heroes" element={<Heroes/>} />
               <Route path="/heroe/:id" element={<Heroe/>} />
               <Route path="/about" element={<About/>} />
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
