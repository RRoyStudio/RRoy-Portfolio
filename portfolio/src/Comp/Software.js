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
  <div className="adobe-grid">
    {adobe_programs.map((program) => (
      <div key={program} className="adobe-item">
        {program}
      </div>
    ))}
  </div>
);

const DevelopmentTools = () => (
  <div className="dev-grid">
    {development_tools.map((tool) => (
      <div key={tool} className="dev-item">
        {tool}
      </div>
    ))}
  </div>
);

const DesignTools = () => (
  <div className="design-grid">
    {design_tools.map((tool) => (
      <div key={tool} className="design-item">
        {tool}
      </div>
    ))}
  </div>
);


function Software() {
  // ContentSection component
  const ContentSection = ({ title, children, className }) => {
    return (
      <div className={`colmn ${className} || ''}`}>
        <div className="colmn-container">
          <h2 className="software-h2">{title}</h2>
          {children}
        </div>
      </div>
    );
  };

  
  return (
    <div className="Software">
      <div className="container">
      <h2 className="content-h2">Software</h2>
        <div className="row">
          
          {/* Adobe sticker */}
          <ContentSection title="Adobe" className='adobe-section'>
            <AdobeList />
          </ContentSection>

          {/* Development sticker */}
          <ContentSection title="Development" className='dev-section'>
           <DevelopmentTools /> 
          </ContentSection>

          {/* Design sticker */}
          <ContentSection title="Design" className='design-section'>
            <DesignTools />
          </ContentSection>

        </div>
      </div>
    </div>
  );
};

export default Software;
