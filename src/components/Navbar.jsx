import React from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function MyImpactfulNavbar() {
  return (
    // 'sticky-top' es opcional, si quieres que la barra se quede fija al hacer scroll.
    <Navbar className="navbar-glass" expand="lg" sticky="top"> 
      <Container>
        
     
        <Navbar.Brand 
          className="logo" 
          style={{ fontSize: '2.5rem' }} 
        >
        
         <h1>🚀Kimberlyn M. | Mi viaje creativo🌍</h1>
        </Navbar.Brand>
        <Nav className="nav-links ms-auto" activeKey="#intro">
          <Nav.Item>
            <Nav.Link href="#formation">Formación</Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link href="#projects">Proyectos</Nav.Link>
          </Nav.Item>
          
        </Nav>
      </Container>
    </Navbar>
  );
}