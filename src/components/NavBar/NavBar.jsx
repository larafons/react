import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" style={{textDecoration: 'none', color: 'black'}}>KUBA</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/" style={{textDecoration: 'none', color: 'black'}}>Inicio</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/productos" style={{textDecoration: 'none', color: 'black'}}>Productos</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/contacto" style={{textDecoration: 'none', color: 'black'}}>Contacto</NavLink>
            </Nav.Link>
            <Nav.Link href="cartwidget"><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar