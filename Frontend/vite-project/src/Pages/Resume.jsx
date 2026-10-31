import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa6";
import projects from "../data/projects";
import "./Resume.css";

const skillGroups = [
  {
    group: "Languages",
    items: ["JavaScript", "Java", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "HTML"],
  },
  {
    group: "Backend & data",
    items: ["Node.js", "Express", "REST APIs", "MongoDB"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Postman"],
  },
];

function Resume() {
  const featured = projects.slice(0, 3);

  return (
    <section className="container resume-page">

      {/* Introduction */}
      <div className="page-intro resume-intro">
        <p className="eyebrow">Background & experience</p>

        <h1>
          A snapshot of
          <br />
          <span className="serif-accent">what I’m building.</span>
        </h1>

        <p>
          A short overview of my education, technical toolkit, and
          project experience as I grow as a software developer.
        </p>

        <a className="button" href="/IshanshResume.pdf" download>
          Download resume <FaArrowDown />
        </a>
      </div>

      <div className="resume-content">

        {/* Profile */}
        <section className="resume-block">
          <div className="resume-block-label">
            <span>01</span>
            <h2>Profile</h2>
          </div>

          <div className="resume-block-body">
            <p className="resume-summary">
              Hey, I’m Ishansh Dubey — a developer who enjoys turning
              ideas into thoughtful, useful web experiences. I care about
              clean interfaces, practical problem-solving, and learning
              how things work under the hood.

              <br />
              <br />

              I’m a postgraduate computer applications student focused
              on becoming a well-rounded software developer. I enjoy
              building full-stack applications and exploring AI-powered
              ideas through practical projects. I’m currently strengthening
              my foundations in Java, web development, databases, and
              problem-solving.

              <br />
              <br />

              Outside the editor, I’m interested in games, creative
              projects, and the small details that make a digital
              experience feel memorable.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="resume-block">
          <div className="resume-block-label">
            <span>02</span>
            <h2>Education</h2>
          </div>

          <div className="resume-block-body">
            <div className="resume-entry">
              <div>
                <h3>Master of Computer Applications (MCA)</h3>
                <p>
                  Thakur Institute of Management Studies,
                  Career Development & Research (TIMSCDR), Mumbai
                </p>
              </div>

              <span className="resume-date">POSTGRADUATE</span>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="resume-block">
          <div className="resume-block-label">
            <span>03</span>
            <h2>Technical skills</h2>
          </div>

          <div className="resume-block-body resume-skills">
            {skillGroups.map((skill) => (
              <div className="resume-skill-row" key={skill.group}>
                <h3>{skill.group}</h3>

                <div className="resume-skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="resume-block">
          <div className="resume-block-label">
            <span>04</span>
            <h2>Projects</h2>
          </div>

          <div className="resume-block-body resume-projects">
            {featured.map((project) => (
              <article key={project.id}>
                <h3>{project.title}</h3>

                <p>
                  {(project.description || "").split("\n")[0]}
                </p>

                <div className="resume-project-tech">
                  {(project.technologies || []).map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <Link
                  className="text-link"
                  to={`/project/${project.id}`}
                >
                  Explore project <span>↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="resume-endnote">
        <p>Want to see what I’m working on now?</p>

        <Link className="text-link" to="/projects">
          Explore selected projects <span>↗</span>
        </Link>
      </div>

    </section>
  );
}

export default Resume;



// import { Link } from "react-router-dom";
// import { FaArrowDown } from "react-icons/fa6";
// import "./Resume.css";

// const skillGroups = [
//   { title: "Languages", items: "JavaScript · Java · Python · SQL" },
//   { title: "Frontend", items: "React · HTML · CSS · Responsive UI" },
//   { title: "Backend & data", items: "Node.js · Express · REST APIs · MongoDB" },
//   { title: "Tools", items: "Git · GitHub · Postman · Vite" },
// ];

// function Resume() {
//   return (
//     <section className="container resume-page">
//       <div className="page-intro resume-intro">
//         <p className="eyebrow">Background & experience</p>
//         <h1>A snapshot of<br /><span className="serif-accent">what I’m building.</span></h1>
//         <p>A short overview of my education, technical toolkit, and project experience as I grow as a software developer.</p>
//         <a className="button" href="/resume.pdf" download>Download resume <FaArrowDown /></a>
//       </div>

//       <div className="resume-content">
//         <section className="resume-block">
//           <div className="resume-block-label"><span>01</span><h2>Profile</h2></div>
//           <div className="resume-block-body">
//             <p className="resume-summary">Aspiring software developer interested in full-stack web applications, AI-powered tools, and creative technology. I learn by building practical projects and improving my fundamentals in programming, problem-solving, and software design.</p>
//           </div>
//         </section>

//         <section className="resume-block">
//           <div className="resume-block-label"><span>02</span><h2>Education</h2></div>
//           <div className="resume-block-body">
//             <div className="resume-entry">
//               <div><h3>Master of Computer Applications (MCA)</h3><p>Thakur Institute of Management Studies, Career Development & Research</p></div>
//               <span className="resume-date">POSTGRADUATE</span>
//             </div>
//           </div>
//         </section>

//         <section className="resume-block">
//           <div className="resume-block-label"><span>03</span><h2>Technical skills</h2></div>
//           <div className="resume-block-body resume-skills">
//             {skillGroups.map((group) => <div className="resume-skill-row" key={group.title}><h3>{group.title}</h3><p>{group.items}</p></div>)}
//           </div>
//         </section>

//         <section className="resume-block">
//           <div className="resume-block-label"><span>04</span><h2>Projects</h2></div>
//           <div className="resume-block-body resume-projects">
//             <article><h3>OculusAI — AI Video Clipping Platform</h3><p>Concept for an AI-assisted platform that turns long-form videos into short clips using speech recognition and video processing.</p></article>
//             <article><h3>Doctor Appointment System</h3><p>A healthcare application concept for booking appointments, browsing doctors, and managing patient information.</p></article>
//             <article><h3>Horror Escape Game</h3><p>A puzzle-focused horror game concept built around exploration, interactive objects, and escape challenges.</p></article>
//           </div>
//         </section>
//       </div>

//       <div className="resume-endnote">
//         <p>Want to see what I’m working on now?</p>
//         <Link className="text-link" to="/projects">Explore selected projects <span>↗</span></Link>
//       </div>
//     </section>
//   );
// }

// export default Resume;
