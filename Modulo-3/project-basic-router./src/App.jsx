import React from 'react';
import { Header, Main, Footer, Navbar } from './components';
import Home from './pages';
import Listado from './pages';
import About from './pages';

export const App = () => {
  return (
    <Router>
      <Header>
        <Navbar />
      </Header>
      <Main>
       <Home/>
       <Listado/>
       <About/>
      </Main>
      <Footer>© 2024 - Proyecto básico con React Router</Footer>
    </Router>
  );
};


