import React from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function MyImpactfulNavbar() {
  
  return (
    
<Navbar className="navbar-glass" expand="lg" sticky="top"> 
<Container>

 <Navbar.Brand 
 className="logo" 
 >
<h1>🚀Mi viaje creativo🌍</h1>
 </Navbar.Brand>
        
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

     
       
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            
            <Nav className="nav-links" activeKey="#intro">
                <Nav.Item>
                  
                    <Nav.Link href="#intro">Inicio</Nav.Link> 
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="#formation">Formación</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link href="#projects">Proyectos</Nav.Link>
                </Nav.Item>
            </Nav>

        </Navbar.Collapse>
 </Container>
 </Navbar>
 );
}