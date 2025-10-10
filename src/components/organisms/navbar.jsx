import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../styles/navbar.css';

function NavBar() {
  return (
    <>
      <Navbar className="navbar" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Portafolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#projects-section">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;