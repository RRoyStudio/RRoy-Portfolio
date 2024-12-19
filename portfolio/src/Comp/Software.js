import React from "react";
import "./Software.css";

const adobe_programs = [
  "Photoshop",
  "InDesign",
  "After Effects",
  "Premiere Pro",
  "Illustrator",
  "XD",
  "Lightroom",
];

const development_tools = [
  "HTML",
  "CSS",
  "Javascript",
  "PHP",
  "React",
  "SQL",
  "Typescript",
];

const design_tools = [
 "Figma",
 "WordPress",
 "Elementor",
 "GitHub",
 "Google Analytics",
 "Google Search Console",
 "HubSpot",
 "WooCommerce",
 "Shopify",
 "SAP B1"
]; 

const AdobeList = () => (
  <div className="adobe">
    <h3>Adobe Programs</h3>
    {adobe_programs.map((program) => (
      <div key={program} className="adobe-item">
        {program}
      </div>
    ))}
  </div>
);

const Development = () => (
  <div className="development">
    <h3>Languages</h3>
    {development_tools.map((tool) => (
      <div key={tool} className="languages">
        {tool}
      </div>
    ))}
  </div>
)

const Design = () => (
  <div className="design">
    <h3>Programs</h3>
    {design_tools.map((tool) => (
      <div key={tool} className="program-items">
        {tool}
      </div>
    ))}
  </div>
);

function Software() {
  return (
    <div className="software">
    <AdobeList />
    <Design />
    <Development />
    
    </div>
  );
};

export default Software;
