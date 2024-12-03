import React from 'react';
import './footer.css';
import RRicon from './assets/RR-icon.png';
import insta from './assets/insta-icon.png';
import linkedin from './assets/linkedin-icon.png';
import email from './assets/email-icon.png';
import behance from './assets/behance-icon.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-colmn1">
                    <img src={RRicon} alt="RR" className='RRicon'/>
                </div>
                <div className="footer-colmn2">    
                    <ul>
                        <li><img src={insta} alt='instagram icon'/></li>    
                        <li><img src={linkedin} alt='Linkedin icon'/></li>    
                        <li><img src={behance} alt='Behance icon'/></li>
                        <li><img src={email} alt='link to email'/></li>
                    </ul>
                </div>    
            </div>
        </div>
    );
}

export default Footer;