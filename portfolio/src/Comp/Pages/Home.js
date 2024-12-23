import React from "react";
import Header from "../Home/home-header.js";
import Software from "../Home/Software.js";
import Contact from "../Home/contact-home.js";
import HomeProjects from "../Home/home-projects.js";
import "./Home.css";

function Home() {
  return (
    <div className="HomePage"> 
      <Header className="header" />
      <Software className="software" />
      <HomeProjects className="projects" />
      <Contact className="contact" />
    </div>
  );
}

export default Home;
