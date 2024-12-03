import React from 'react';
import './home-header.css';
import ducky from './assets/ducky.png';


function Header() {
    return (
        <div className="header-container">    
            <div className="header">
                <div className="colmn1-header">
                <img src={ducky} alt="Becca holding a duck" className='duckyimg'/>
                </div>
                <div className="colmn2-header">
                    <h1>Rebecca Roy</h1>
                    <h3> Developer Videographer Designer</h3>
                </div>
         </div>
        </div>
    );
}

export default Header;