
import React from "react";
import Navbar from "./Comp/Nav/Navbar";
import {Routes, Route } from "react-router-dom";
import Home from "./Comp/Pages/Home.js";
import About from "./Comp/Pages/About.js";
import Projects from "./Comp/Pages/Projects.js";
import Contact from "./Comp/Pages/Contact.js";
import Footer from "./Comp/Footer/footer.js";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;

