import React from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function MyImpactfulNavbar() {
  
  return (
    // 'expand="lg"' indica que el menú colapsará (se hará hamburguesa)
    // en tamaños de pantalla menores a 'large' (992px)
<Navbar className="navbar-glass" expand="lg" sticky="top"> 
<Container>

 <Navbar.Brand 
 className="logo" 
 >
<h1>🚀Kimberlyn M. | Mi viaje creativo🌍</h1>
 </Navbar.Brand>
        
        {/* 2. BOTÓN DE HAMBURGUESA (Navbar.Toggle) */}
        {/* Este botón es visible solo en pantallas pequeñas (debido a expand="lg") */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* 3. CONTENIDO COLAPSABLE (Navbar.Collapse) */}
        {/* Este contenedor es lo que se muestra/oculta al hacer clic en el Toggle */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            
            <Nav className="nav-links" activeKey="#intro">
                <Nav.Item>
                    {/* Asegúrate que las clases de tu CSS (como .nav-link)
                        se apliquen a los Nav.Link si es necesario */}
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