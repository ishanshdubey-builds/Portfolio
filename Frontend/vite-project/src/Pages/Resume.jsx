import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa6";
import "./Resume.css";

const skillGroups = [
  { title: "Languages", items: "JavaScript · Java · Python · SQL" },
  { title: "Frontend", items: "React · HTML · CSS · Responsive UI" },
  { title: "Backend & data", items: "Node.js · Express · REST APIs · MongoDB" },
  { title: "Tools", items: "Git · GitHub · Postman · Vite" },
];

function Resume() {
  return (
    <section className="container resume-page">
      <div className="page-intro resume-intro">
        <p className="eyebrow">Background & experience</p>
        <h1>A snapshot of<br /><span className="serif-accent">what I’m building.</span></h1>
        <p>A short overview of my education, technical toolkit, and project experience as I grow as a software developer.</p>
        <a className="button" href="/resume.pdf" download>Download resume <FaArrowDown /></a>
      </div>

      <div className="resume-content">
        <section className="resume-block">
          <div className="resume-block-label"><span>01</span><h2>Profile</h2></div>
          <div className="resume-block-body">
            <p className="resume-summary">Aspiring software developer interested in full-stack web applications, AI-powered tools, and creative technology. I learn by building practical projects and improving my fundamentals in programming, problem-solving, and software design.</p>
          </div>
        </section>

        <section className="resume-block">
          <div className="resume-block-label"><span>02</span><h2>Education</h2></div>
          <div className="resume-block-body">
            <div className="resume-entry">
              <div><h3>Master of Computer Applications (MCA)</h3><p>Thakur Institute of Management Studies, Career Development & Research</p></div>
              <span className="resume-date">POSTGRADUATE</span>
            </div>
          </div>
        </section>

        <section className="resume-block">
          <div className="resume-block-label"><span>03</span><h2>Technical skills</h2></div>
          <div className="resume-block-body resume-skills">
            {skillGroups.map((group) => <div className="resume-skill-row" key={group.title}><h3>{group.title}</h3><p>{group.items}</p></div>)}
          </div>
        </section>

        <section className="resume-block">
          <div className="resume-block-label"><span>04</span><h2>Projects</h2></div>
          <div className="resume-block-body resume-projects">
            <article><h3>OculusAI — AI Video Clipping Platform</h3><p>Concept for an AI-assisted platform that turns long-form videos into short clips using speech recognition and video processing.</p></article>
            <article><h3>Doctor Appointment System</h3><p>A healthcare application concept for booking appointments, browsing doctors, and managing patient information.</p></article>
            <article><h3>Horror Escape Game</h3><p>A puzzle-focused horror game concept built around exploration, interactive objects, and escape challenges.</p></article>
          </div>
        </section>
      </div>

      <div className="resume-endnote">
        <p>Want to see what I’m working on now?</p>
        <Link className="text-link" to="/projects">Explore selected projects <span>↗</span></Link>
      </div>
    </section>
  );
}

export default Resume;
