//Main Purpose of ProjectCard.jsx The file’s job is to: Receive project data (title, description, links) Display that data inside a card UI Be reused for every project So one component can create many cards.

// importing React
import React from "react";

// importing Link from react-router-dom to navigate between pages
import { Link } from "react-router-dom";

// creating the card component
function ProjectCard({ project }) {

  return (

    <div className="project-card"> {/* card container */}

      <img
        src={project.image} // project image
        alt={project.title}
        className="project-image"
      />

      <div className="project-info">

        <h3>{project.title}</h3> {/* project title */}

        {/* <p>{project.description}</p> short description */}

        {/* Link navigates to project detail page using project id */}
        <Link to={`/project/${project.id}`}>

          <button>View Project</button>

        </Link>

      </div>

    </div>

  );

}

export default ProjectCard;