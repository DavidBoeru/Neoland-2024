import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/listado">Listado</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
