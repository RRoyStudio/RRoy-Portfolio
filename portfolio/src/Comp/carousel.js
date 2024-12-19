import React, { useRef, useState } from "react";
import "./carousel.css";
import CFM from "./assets/Project-cards-01.png";
import RRoy from "./assets/Rroy-card.png";
import Bones from "./assets/bones-card.png";
import Cable8 from "./assets/cable8-card.png";
import CMB from "./assets/cmb-card.png";
import Mocha from "./assets/mocha-card.png";

// Images of each project
const project_list = [
  { title: "CFM Global", card: CFM, alt: "CFm Global Project" },
  { title: "Rroy", card: RRoy, alt: "Rroy studio Project" },
  { title: "Bones", card: Bones, alt: "Original Bones Project" },
  { title: "Cable8", card: Cable8, alt: "Cable8 Project" },
  { title: "Band", card: CMB, alt: "CMB Project" },
  { title: "Mocha", card: Mocha, alt: "Mocha Paws Project" },
];

const Carousel = () => {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Mouse Events
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    // Touch Events
    const handleTouchStart = (e) => {
        setIsDragging(true);
        const touch = e.touches[0];
        setStartX(touch.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        const x = touch.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="carousel-container"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="carousel">
                {project_list.map((project, index) => (
                    <div key={index} className="carousel-item">
                        <img src={project.card} alt={project.alt} className="carousel-image" />
                        <h3 className="carousel-title">{project.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;