import React from 'react';
import './App.css';
import Navbar from './Comp/Navbar';
import Header from './Comp/home-header';
import Software from './Comp/Software';
import Projects from './Comp/project-home';
import Contact from './Comp/contact-home';
import Footer from './Comp/footer.js';


function HomePage() {
  return (
    <div className="HomePage">
      <Navbar className="nav" />
      <Header className="header" />
      <Software className="software" />
      <Footer className="footer"/>
      
    </div>
  );
}

export default HomePage;
