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
  "SQL"
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

function Software() {
  return (
    <div className="software">
    <AdobeList />
    </div>
  );
};

export default Software;
