import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {

  const { id } = useParams();

  const project = projects.find(
    (p) => p.id === parseInt(id)
  );

  console.log(project); // check selected project

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <div className="project-detail" style={{ padding: "40px" }}>

      <h1 className="project-title">{project.title}</h1>

      <img className="project-img"
        src={project.image}
        alt={project.title}
        style={{ width: "500px", borderRadius: "10px" }}
      />
      
      <div className="desc">
      <p>{project.description}</p>
      </div>

      {/* <div style={{ whiteSpace: "pre-line" }}>
        {project.bigDescription}
      </div> */}

      <div className="des-buttons">

      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer">
          <button>GitHub</button>
        </a>
      )}

      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer">
          <button>Live Website</button>
        </a>
      )}
      </div>


    </div>
  );
}

export default ProjectDetail;