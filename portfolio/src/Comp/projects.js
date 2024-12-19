import React from "react";
import Carousel from "./carousel";
import "./projects.css";

const Projects = () => {
    return (
        <div className="project-container">
            <div className="column1">
                <h2>Projects</h2>
            </div>
            <Carousel/> 
        </div>
    )
}
export default Projects;