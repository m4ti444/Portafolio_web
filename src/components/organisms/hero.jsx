import '../../styles/hero.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import shrekGif from '../../assets/shrek.gif'; 

function HeroSection() {
  return (
    <div id="hero" className="hero-background">
      <Container>
        <Row className="mt-4 justify-content-center text-center text-black">
          <Col md={8}>
            <div className='hero-section'>
              <img 
                src={shrekGif} 
                alt="Shrek imagen" 
                className="hero-gif"
                style={{ maxWidth: '150px', margin: '20px auto', display: 'block' }}
              />
              <div className="hero-tittle">Matias Flores</div>
              <p className="hero-info">
                Navega y descubre mis proyectos como estudiante de Ing. en Informática.
              </p>
            </div>
            
            <div className="d-flex justify-content-center">
              <a
                className="social-icon mx-2"
                href="https://github.com/m4ti444"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub size={24}/>
              </a>
              <a
                className="social-icon mx-2"
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer">
                <FaSquareXTwitter size={24} />
              </a>
              <a
                className="social-icon mx-2"
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
