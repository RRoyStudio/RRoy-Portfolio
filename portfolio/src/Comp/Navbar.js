import React from 'react';
import './Navbar.css';
import RRicon from './assets/RR-icon.png';
import hamburgericon from './assets/hamburger-18.png';




function Navbar() {
    let headerLinks = document.querySelector('.header_links');


    return (
        <div className="nav">
            <div className="container">
                <div className= 'colmn1'>
                    <img src={RRicon} alt="RR" />
                </div>
                <div className= 'colmn2'>
                    <button onClick={() => headerLinks.classList.toggle('open')} className="hamburger" id='hamburger'><img src={hamburgericon} alt="hamburger menu" /></button>
                    <ul id='header_links'>    
                        <li>Home</li>    
                        <li>About</li>    
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>    
            </div>
        </div>
    );
}

export default Navbar;