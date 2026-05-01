import React from "react";
import "./Resume.css";

function Resume() {

  return (

    <div className="resume-container">

      <h1>Ishansh Dubey</h1>

      <p>
        Aspiring Software Developer passionate about building real-world
        applications in Web Development, Artificial Intelligence, and Game
        Development. I enjoy solving complex problems and creating innovative
        solutions using modern technologies.
      </p>

      {/* Education */}
      <section className="resume-section">

        <h2>Education</h2>

        <p>
          <strong>Master of Computer Applications (MCA)</strong><br/>
          Thakur Institute of Management Studies, Career Development & Research
        </p>

      </section>

      {/* Skills */}
      <section className="resume-section">

        <h2>Technical Skills</h2>

        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Python</li>
          <li>FastAPI</li>
          <li>HTML & CSS</li>
          <li>SQL / Database Management</li>
          <li>Git & GitHub</li>
        </ul>

      </section>

      {/* Projects */}
      <section className="resume-section">

        <h2>Projects</h2>

        <h3>OculusAI – AI Video Clipping Platform</h3>
        <p>
          Developed an AI-powered platform that automatically converts
          long-form videos into short viral clips using speech recognition
          and video processing technologies.
        </p>

        <h3>Doctor Appointment System</h3>
        <p>
          Built a full-stack healthcare application that allows patients to
          book appointments with doctors and manage patient records through
          an intuitive interface.
        </p>

        <h3>Horror Escape Game</h3>
        <p>
          Designed and developed a 3D puzzle-based horror escape game where
          players explore environments and solve puzzles to escape.
        </p>

      </section>

      {/* Contact */}
      <section className="resume-section">

        <h2>Contact</h2>

        <p>Email: your-email@example.com</p>

        <p>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/ishansh-dubey-877b3438b"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </p>

      </section>

      {/* Download Resume */}
      <div className="resume-download">

        <a href="/resume.pdf" download>
          <button>Download Resume</button>
        </a>

      </div>

    </div>

  );

}

export default Resume;