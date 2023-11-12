import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";


function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
      {ProjectList.map((Project , idx) => {
        return (
          <ProjectItem id={idx} name={Project.name} image={Project.image} />
        );
      })}
      
      </div>
    </div>
  );
}

export default Projects;
