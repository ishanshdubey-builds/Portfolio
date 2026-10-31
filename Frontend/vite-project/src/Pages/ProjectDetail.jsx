import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowUpRightFromSquare } from "react-icons/fa6";
import projects from "../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <section className="container project-not-found">
        <p className="eyebrow">Not found</p>
        <h1>This project seems to have wandered off.</h1>
        <Link className="button" to="/projects"><FaArrowLeft /> Back to projects</Link>
      </section>
    );
  }

  const githubIsReal = project.github && !project.github.includes("yourrepo");
  const demoIsReal = project.demo && !project.demo.includes("youtube.com");

  return (
    <article className="container project-detail-page">
      <Link className="back-link" to="/projects"><FaArrowLeft /> All projects</Link>
      <div className="project-detail-hero">
        <div className="project-detail-copy">
          <p className="eyebrow">Project / {String(project.id).padStart(2, "0")}</p>
          <h1>{project.title}</h1>
          <p className="project-detail-intro">{(project.description || "").split("\n")[0]}</p>
          <div className="project-tech-list">
            {(project.technologies || []).map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <div className="project-detail-actions">
            {githubIsReal && <a className="button" href={project.github} target="_blank" rel="noreferrer">Source code <FaArrowUpRightFromSquare /></a>}
            {demoIsReal && <a className="button button-quiet" href={project.demo} target="_blank" rel="noreferrer">Live preview <FaArrowUpRightFromSquare /></a>}
          </div>
        </div>
        <div className={`project-detail-art project-art project-art-${((project.id - 1) % 3) + 1}`}>
          <span className="project-art-index">SELECTED WORK / {String(project.id).padStart(2, "0")}</span>
          <span className="project-art-glyph">{project.id % 3 === 1 ? "✳" : project.id % 3 === 2 ? "⌘" : "◒"}</span>
          <span className="project-art-title">{project.title}</span>
        </div>
      </div>
      <div className="project-detail-body">
        <div className="project-detail-label"><span className="eyebrow">Overview</span><p>THE IDEA & THE BUILD</p></div>
        <div className="project-detail-description">{project.description}</div>
      </div>
      <div className="project-detail-bottom">
        <span>MORE EXPLORATIONS AHEAD</span>
        <Link className="text-link" to="/projects">Back to all projects <span>↗</span></Link>
      </div>
    </article>
  );
}

export default ProjectDetail;
