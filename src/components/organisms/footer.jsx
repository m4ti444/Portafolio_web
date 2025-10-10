import '../../styles/footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 footer-section">
                        <div className="footer-logo">Portafolio</div>
                        <p className="footer-about">El proposito de esta pagina es el que puedas acceder a mis proyectos como estudiante de Ingenieria en Informatica.</p>
                        <div className="social-links">
                            <a className="social-icon" 
                            href="https://cl.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"><FaLinkedin /></a>

                            <a className="social-icon"
                            href="https://x.com/" 
                            target="_blank"
                            rel="noopener noreferrer"><FaXTwitter /></a>
                            
                            <a className="social-icon"
                            href="https://github.com/m4ti444" 
                            target="_blank"
                            rel="noopener noreferrer"><FaGithub /></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-section">
                        <h5>Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#projects-section">Projects</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-section">
                        <h5>Support</h5>
                        <ul className="footer-links">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Contact Support</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 footer-section">
                        <h5>Newsletter</h5>
                        <p className="footer-about">Subscribe to our newsletter for updates, news, and exclusive offers.</p>
                        <div className="footer-newsletter">
                            <input type="email" placeholder="Enter your email"/>
                            <button className="newsletter-btn">
                                <i className="button-icon"><FaTelegramPlane /></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <ul className="footer-bottom-links">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                    <p>© 2025 Portafolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;