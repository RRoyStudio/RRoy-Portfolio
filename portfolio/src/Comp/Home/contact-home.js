import React from 'react';
import "./contact-home.css";
import Mewsu from "../assets/me-wsu.png";

function Contact() {
  return (
    <div className="contact-home">
      <div className="contactInfo">
        <h2>Contact Me</h2>
        <div className="contactInfo-text">

          <ul>
            <li><h3>Omaha, NE</h3></li>
            <li>Rebecca.Roy98@gmail.com</li>
            <li>@Rroy_Studios</li>
            <li><a href="#">My Resume</a></li>
          </ul>
        </div>
      </div>
      <div className="imageOfMe">
        <img src={Mewsu} alt="Rebecca Roy" />
      </div>
    </div>
  );
}

export default Contact;
