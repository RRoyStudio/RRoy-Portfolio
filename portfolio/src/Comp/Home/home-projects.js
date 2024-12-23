import React from "react";
import Carousel from "../carousel.js";
import "./home-projects.css";

const HomeProjects = () => {
    return (
        <div className="project-home-container">
            <div className="column1">
                <h2>Projects</h2>
            </div>
            <Carousel/> 
        </div>
    )
}
export default HomeProjects;