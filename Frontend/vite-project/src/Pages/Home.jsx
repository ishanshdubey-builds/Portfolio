import { Link } from "react-router-dom";
import "./Home.css";
import ProjectCard from "../components/ProjectCard";
import Resume from "./Resume";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Home(){                                 // This is a React functional component called Home

    return(                                      // return() tells React what UI (HTML-like JSX) to display
        <div>                                     {/* Main container that wraps the whole Home page */}

            <div className="welcome">             {/* Hero section container */}
                
                <h1>Hi, I'm Ishansh Dubey</h1>   
                <h2>MCA Student | Aspiring Full Stack Developer</h2> 

                <p className="tagline">
                    I build modern Web applications using React and Node.js.
                </p>

                <p className="tech-stack">
                    React • JavaScript • Node.js • Java • SQL                 
                </p>

                 <div className="hero-buttons">               {/* Container that will hold action buttons */}

                   <Link to="/projects">
                   <button>View Projects</button>
                    </Link>

                   <Link to="/resume">
                       <button>Resume</button>
                       </Link>

                  {/* <Link to="/contact">
                      <button>Contact Me</button>
                        </Link>              */}

                </div>

                <div className="social-links">               {/* Container for social profile links */}

                    <a href="#">
                        <FaGithub />
                    </a>

                    <a href="#">
                        <FaLinkedin />
                    </a>

                    <a href="mailto:your@email.com">
                        <FaEnvelope />
                    </a>  {/* Email link that opens the user's mail application */}

                </div>

            </div>
            
            <div className="about">               {/* About section container */}
                
                <p>                               {/* Paragraph explaining who you are */}
                    
                    Hey, I'm <strong>Ishansh Dubey</strong>,       {/* strong tag makes your name bold */}
                    a first-year <strong>MCA student at Thakur Institute of Management Studies, Career Development & Research (TIMSCDR), Mumbai</strong>.
                    I am passionate about <strong>software development and building modern web applications</strong>.
                    I enjoy working with technologies like <strong>JavaScript, React, and Java</strong>,
                    and I am continuously learning new tools and frameworks to improve my development skills.
                    My goal is to build impactful applications, grow as a <strong>full-stack developer</strong>, 
                    and contribute to innovative tech solutions in the future.

                </p>
            
            </div>
            
        </div>
    );
    
}

export default Home;                              // Exports this component so it can be used in other files (like App.jsx)