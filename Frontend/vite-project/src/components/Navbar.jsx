import { Link, NavLink } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="Main navigation">
        <Link className="brand-mark" to="/" aria-label="Ishansh Dubey home">
          <span className="brand-symbol">i<span>.</span></span>
          <span className="brand-name">ISHANSH DUBEY<small>DEVELOPER / MCA</small></span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <a href="/#about">About</a>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume">Résumé</NavLink>
        </div>
        <Link className="nav-contact" to="/contact">Let’s talk <FaArrowUpRightFromSquare /></Link>
      </nav>
    </header>
  );
}

export default Navbar;
