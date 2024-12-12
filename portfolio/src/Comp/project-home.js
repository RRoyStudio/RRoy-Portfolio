import React from 'react';
import "./project-home.css"; 
import CFM from "./assets/Project-cards-01.png";
import RRoy from "./assets/Rroy-card.png";
import Bones from "./assets/bones-card.png";
import Cable8 from "./assets/cable8-card.png";
import CMB from "./assets/cmb-card.png";
import Mocha from "./assets/mocha-card.png";

// Images of each project 
const project_list = [
    {title: "CFM Global", card: CFM, alt: "CFm Global Project"},
    {title: "Rroy", card: RRoy, alt: "Rroy studio Project"},
    {title: "Bones", card: Bones, alt: "Original Bones Project"},
    {title: "Cable8", card: Cable8, alt: "Cable8 Project"},
    {title: "Band", card: CMB, alt: "CMB Project"},
    {title: "Mocha", card: Mocha, alt: "Mocha Paws Project"},   
]

// Makes list items from array of images
const Cards = () =>(
    
    <ul className="projects">
        {project_list.map((project) => (
                <li key={project.title}>
                <img src={project.card} alt={project.alt} className={project.title} />
                </li>
        ))} 
    </ul>
    

)

//Call the cards into the project component
const Projects = () => {
    
    return (
        <div classNamre="projects">
            <div className="project-home">
                <div>
                <h2 className='title'>Projects</h2> 
                
                </div>
                <Cards />
            </div>
        </div>
    )
}

    export default Projects;