import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} <strong>Ishansh Dubey</strong> · Designed with intention.</p>
        <div className="footer-links" aria-label="Social links">
          <a href="https://github.com/ishanshdubey-builds" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ishansh-dubey-877b3438b" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
