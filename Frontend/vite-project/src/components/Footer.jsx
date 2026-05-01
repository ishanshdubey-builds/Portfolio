import "./Footer.css";

// importing icons
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer(){

    return(

        <footer>

            <div className="footer-content">

               <p>© {new Date().getFullYear()} Ishansh Dubey</p>

                <p>Built with React</p>

                <div className="footer-links">

                    <a
                     href="https://github.com/"
                     target="_blank"
                     rel="noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                     href="https://linkedin.com/"
                     target="_blank"
                     rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a href="mailto:your@email.com">
                        <FaEnvelope />
                    </a>

                </div>

            </div>

        </footer>

    );
}

export default Footer;