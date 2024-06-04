import { App } from "../App";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Home, Listado, Heroe, Heroes } from "../pages"


export const Routes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="listado" element={<Listado />} />
            <Route path="about" element={<About />} />
            <Route path="heroes" element={<Heroes />}>
              <Route path=":id" element={<Heroe />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    );
  };
  


