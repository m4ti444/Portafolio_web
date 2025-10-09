import { Container, Row, Col } from 'react-bootstrap';

function HeroSection() {
  return (
    <div className="hero-background-image">
      <Container>
        <Row className="mt-4 justify-content-center text-center text-black">
          <Col md={8}>
            <h1 className="display-4">Matias Flores</h1>
            <p className="lead">
              Navega y descubre los proyectos de este estudiante de Ing. en Informática.
            </p>
            <a className='lead' href='https://github.com/m4ti444' target="_blank" rel="noopener noreferrer">
              github.com/m4ti444
            </a>
            <p className='lead'>Lorem ipsum dolor sit, amet consectetur adipisicin.</p>
          </Col>
        </Row>

        <ul className="social-icons list-unstyled d-flex justify-content-center mt-4">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/m4ti444" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default HeroSection;
