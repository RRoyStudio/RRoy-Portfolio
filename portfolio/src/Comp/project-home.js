import React from 'react';
import "./project-home.css"; 


const project_card = ({className, title, image}) => (
    <div className={className || ''}>
        <img src={image} alt={title} />
    </div>
)

const Projects = () =>{
    return(
        <div className="project-home">
            <h1>Project Home</h1>
        </div>
    )
}

    export default Projects;