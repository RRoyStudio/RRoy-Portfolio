import React from 'react';
import './homepage.css';
import Navbar from './Comp/Navbar.js';
import Header from './Comp/home-header.js';
import Software from './Comp/Software.js';
import Projects from './Comp/projects.js';
import Contact from './Comp/contact-home.js';
import Footer from './Comp/footer.js';


function HomePage() {
  return (
    <div className="HomePage">
    
      <Navbar className="nav" />
      <Header className="header" />
      <Software className="software" />
      <Projects className="projects" />
      <Footer className="footer"/>
      
    </div>
  );
}

export default HomePage;
