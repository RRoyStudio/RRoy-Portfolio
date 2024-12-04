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
  "Visual Studio Code",
  "GitHub",
  "React",
  "Node.js",
  "MongoDB"
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


function Software() {
  // ContentSection component
  const ContentSection = ({ title, children }) => {
    return (
      <div className="colmn1">
        <div className="colmn1-container">
          <h2 className="adobe-h2">{title}</h2>
          {children}
        </div>
      </div>
    );
  };
  
  return (
    <div className="Software">
      <div className="container">
        <div className="row">
          <h2 className="software-h2">Software</h2>
          
          <ContentSection title="Adobe">
            <AdobeList />
          </ContentSection>
  
          <ContentSection title="Development">
            <DevelopmentTools />
          </ContentSection>
  
          <ContentSection title="Design">
            
          
          </ContentSection>
        </div>
      </div>
    </div>
  );
};

export default Software;
