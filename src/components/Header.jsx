// src/components/Header.jsx
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-3" style={{ fontFamily: 'Cinzel, serif' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          🐺 Witcher World
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="witcher-navbar" />
        <Navbar.Collapse id="witcher-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
            <Nav.Link as={Link} to="/monsters">Monsters</Nav.Link>
            <Nav.Link as={Link} to="/potion-maker">Potion Maker</Nav.Link>
            <Nav.Link as={Link} to="/contracts">Contracts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
