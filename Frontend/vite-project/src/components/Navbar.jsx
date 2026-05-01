import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <nav>
            <h1>Welcome to my Portfolio</h1>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                {/* <li><Link to="/contact">Contact</Link></li> */}
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </nav>

    );
}
export default Navbar;