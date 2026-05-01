import React from "react";
import "./Projects.css"; // importing the CSS file for styling this page
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects(){

  return(

    <div className="projects">

      <h1 className="my-project">My Projects</h1>

      <div className="projects-container">

        {projects.map((project) => (

          <ProjectCard
            key={project.id}
            project={project}
          />

        ))}

      </div>

    </div>

  );
}

export default Projects;