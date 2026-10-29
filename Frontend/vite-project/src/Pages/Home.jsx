import { Link } from "react-router-dom";
import { FaArrowDown, FaArrowUpRightFromSquare, FaGithub, FaLinkedin } from "react-icons/fa6";
import projects from "../data/projects";
import "./Home.css";

const skills = [
  { group: "Languages", items: ["JavaScript", "Java", "SQL"] },
  { group: "Frontend", items: ["React", "HTML"] },
  { group: "Backend & data", items: ["Node.js", "Express", "REST APIs", "MongoDB"] },
  { group: "Tools", items: ["Git", "GitHub", "Postman"] },
];

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="hero-availability"><span /> OPEN TO INTERNSHIP OPPORTUNITIES</div>
          <p className="eyebrow">MCA student · Developer · Curious by default</p>
          <h1>
            I build things
            <br />
            for the <span className="serif-accent">digital world.</span>
          </h1>
          <p className="hero-description">
            Hey, I’m <strong>Ishansh Dubey</strong> — a developer who enjoys turning
            ideas into thoughtful, useful web experiences. I care about clean interfaces,
            practical problem-solving, and learning how things work under the hood.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/projects">Explore my work <FaArrowUpRightFromSquare /></Link>
            <Link className="button button-quiet" to="/resume">View resume</Link>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href="https://github.com/ishanshdubey-builds" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/ishansh-dubey-877b3438b" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
          </div>
        </div>

        {/* <div className="hero-art" aria-label="Abstract portfolio illustration">
          <div className="art-topline"><span>PERSONAL PORTFOLIO</span><span>2026 / IN</span></div>
          <div className="art-grid" aria-hidden="true" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-monogram">ID<span>.</span></div>
          <div className="art-caption"><span>DESIGNING · BUILDING · LEARNING</span><span className="art-arrow">↗</span></div>
        </div> */}
        
        
<div className="hero-portrait">
  <img
    src="/images/ishansh.png"
    alt="Portrait of Ishansh Dubey"
    className="portrait-photo"
  />

  <div className="portrait-shade" />

  <div className="portrait-topline">
    <span>THE PERSON BEHIND THE CODE</span>
    <span>01 / 01</span>
  </div>

  <div className="portrait-caption">
    <span>ISHANSH DUBEY</span>
    <span>MCA · SOFTWARE DEVELOPER</span>
  </div>
</div>




        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><FaArrowDown /></a>
        <div className="hero-index"><span>01</span><i /> A WORK IN PROGRESS, ALWAYS.</div>
      </section>

      <section className="about-section section" id="about">
        <div className="container about-layout">
          <div className="about-aside">
            <p className="eyebrow">A little about me</p>
            <h2>Curious mind.<br /><span className="serif-accent">Builder’s hands.</span></h2>
            <div className="about-stamp"><span>MADE WITH</span><strong>curiosity</strong><span>AND TOO MUCH COFFEE</span></div>
          </div>
          <div className="about-copy">
            <p className="about-lead">
              I’m a postgraduate computer applications student focused on becoming a
              well-rounded software developer.
            </p>
            <p>
              I enjoy building projects that go beyond tutorials — from full-stack
              applications and AI-powered ideas to experiments that help me understand
              software engineering in practice. I’m currently strengthening my foundations
              in Java, web development, databases, and problem-solving.
            </p>
            <p>
              Outside the editor, I’m interested in games, creative projects, and the
              small details that make a digital experience feel memorable.
            </p>
            <Link className="text-link" to="/resume">More about my background <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="work-section section" id="work">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Selected projects</p><h2>Things I’ve <span className="serif-accent">put together.</span></h2></div>
            <p>A few explorations in product thinking, web development, and creative technology.</p>
          </div>
          <div className="home-project-grid">
            {featured.map((project, index) => (
              <article className="home-project-card" key={project.id}>
                <Link className="project-visual" to={`/project/${project.id}`} aria-label={`View ${project.title}`}>
                  <div className={`project-art project-art-${index + 1}`}>
                    <span className="project-art-index">0{index + 1} / SELECTED WORK</span>
                    <span className="project-art-glyph">{index === 0 ? "✳" : index === 1 ? "⌘" : "◒"}</span>
                    <span className="project-art-title">{project.title}</span>
                    <span className="project-art-open"><FaArrowUpRightFromSquare /></span>
                  </div>
                </Link>
                <div className="home-project-meta"><span>PROJECT 0{index + 1}</span><span>{project.title}</span></div>
                <h3>{project.title}</h3>
               <p>{(project.description || "").split("\n")[0]}</p>

<div className="project-tech-list">
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
          <div className="work-all"><Link className="button button-quiet" to="/projects">View all projects <FaArrowUpRightFromSquare /></Link></div>
        </div>
      </section>

      <section className="skills-section section" id="skills">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Tools of the trade</p><h2>Learning by <span className="serif-accent">building.</span></h2></div>
            <p>A growing toolkit. I focus on understanding fundamentals, not just collecting technologies.</p>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill-row" key={skill.group}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{skill.group}</h3>
                <div className="skill-tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
          <p className="skills-note">Skills shown reflect my current learning and project experience.</p>
        </div>
      </section>

      <section className="contact-cta section" id="contact">
        <div className="container contact-panel">
          <p className="eyebrow">Have an idea or an opportunity?</p>
          <h2>Let’s make something<br /><span className="serif-accent">worth opening.</span></h2>
          <p>I’m open to learning opportunities, internships, and collaborating on interesting projects.</p>
          <div className="contact-actions">
            <Link className="button" to="/contact">Get in touch <FaArrowUpRightFromSquare /></Link>
            <Link className="button button-quiet" to="/contact">Contact page <FaArrowUpRightFromSquare /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
