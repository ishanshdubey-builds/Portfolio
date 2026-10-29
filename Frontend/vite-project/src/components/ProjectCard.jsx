import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectCard({ project, index = 0 }) {
  return (
    <article className="gallery-card">
      <Link className="gallery-visual" to={`/project/${project.id}`} aria-label={`View ${project.title}`}>
        <div className={`project-art project-art-${(index % 3) + 1}`}>
          <span className="project-art-index">SELECTED WORK / {String(index + 1).padStart(2, "0")}</span>
          <span className="project-art-glyph">{index % 3 === 0 ? "✳" : index % 3 === 1 ? "⌘" : "◒"}</span>
          <span className="project-art-title">{project.title}</span>
          <span className="project-art-open"><FaArrowUpRightFromSquare /></span>
        </div>
      </Link>
      <div className="gallery-card-content">
        <div className="gallery-card-top"><span>PROJECT {String(index + 1).padStart(2, "0")}</span><span>{project.title}</span></div>
        <h2>{project.title}</h2>
        <p>{(project.description || "").split("\n")[0]}</p>
        <Link className="text-link" to={`/project/${project.id}`}>View details <span>↗</span></Link>
      </div>
    </article>
  );
}

export default ProjectCard;
