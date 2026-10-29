import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";
import "./Home.css";

function Projects() {
  return (
    <div className="projects-page container">
      <div className="page-intro">
        <p className="eyebrow">A selection of experiments</p>
        <h1>Work in progress.<br /><span className="serif-accent">Ideas in motion.</span></h1>
        <p>Projects that helped me learn by building — from web applications to creative experiments. Open a project to read more about the idea, approach, and technology.</p>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </div>
  );
}

export default Projects;
