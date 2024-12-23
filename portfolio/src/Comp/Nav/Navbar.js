import React, { useState } from 'react';
import './Navbar.css';
import RRicon from '../assets/RR-icon.png';
import hamburgericon from '../assets/hamburger-18.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth <= 768);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = ['Home', 'About', 'Projects', 'Contact'];

    const colors = ['--color1', '--color2', '--color3'];

    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    function setRandomColor() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * colors.length);
        } while (newIndex === currentColorIndex);
        
        setCurrentColorIndex(newIndex);
        document.documentElement.style.setProperty('--random-color', `var(${colors[newIndex]})`);
    }
     

    const handleLinkClick = () => {
        setRandomColor();
    }

    const handleMouseEnter = () => {
        setRandomColor();
    }

    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-colmn1">
                    <img src={RRicon} alt="RR Logo" />
                </div>
                <div className="nav-colmn2">
                    <button 
                        onClick={toggleMenu} 
                        className="hamburger" 
                        aria-label="Toggle navigation menu"
                    >
                        <img src={hamburgericon} alt="Menu" />
                    </button>
                    <ul className={`header_links ${isMenuOpen ? 'open' : ''}`}>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a href={`#${link.toLowerCase()}`} onMouseEnter={handleMouseEnter} onClick={handleLinkClick}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
