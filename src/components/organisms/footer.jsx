import '../../styles/footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 footer-section">
                        <div class="footer-logo">Portafolio</div>
                        <p class="footer-about">El proposito de esta pagina es el que puedas acceder a mis proyectos como estudiante de Ingenieria en Informatica.</p>
                        <div class="social-links">
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

                    <div class="col-lg-2 col-md-6 footer-section">
                        <h5>Quick Links</h5>
                        <ul class="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-section">
                        <h5>Support</h5>
                        <ul class="footer-links">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Contact Support</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 footer-section">
                        <h5>Newsletter</h5>
                        <p class="footer-about">Subscribe to our newsletter for updates, news, and exclusive offers.</p>
                        <div class="footer-newsletter">
                            <input type="email" placeholder="Enter your email"/>
                            <button class="newsletter-btn">
                                <i class="button-icon"><FaTelegramPlane /></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <ul class="footer-bottom-links">
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