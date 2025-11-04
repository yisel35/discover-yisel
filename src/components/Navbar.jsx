import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Navbar() {
  return (
    <header className="navbar-glass">
      <h1 className="logo">Sobre mi </h1>
      <nav className="nav-links">
        <a href="#formation">Formación</a>
         <a href="#projects">Proyectos</a>
      </nav>
    </header>
  );
}
