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


function adobe_table() {
    const column1 = [];
    const column2 = [];
  
    // Split programs between two columns
    for (let i = 0; i < adobe_programs.length; i++) {
      if (i % 2 === 0) {
        column1.push(adobe_programs[i]);
      } else {
        column2.push(adobe_programs[i]);
      }
    }
  
    // Create rows with two columns
    const rows = [];
    for (let i = 0; i < Math.max(column1.length, column2.length); i++) {
      rows.push(
        <tr key={i}>
          <td >{column1[i] || ""}</td>
          <td >{column2[i] || ""}</td>
        </tr>
      );
    }
  
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }

adobe_table();

function Software() {
  return (
    <div className="Software">
      <div className="container">
        <div className="row">
            <h2 className="software-h2">Software</h2>
          <div className="colmn1">
            <div className="colmn1-container">
              <h2 className="adobe-h2">Adobe</h2>
                <table className="adobe-table" style={{background: 'transparent'}}>{adobe_table()}</table>

            </div>
            <div className="colmn2">
              <div className="colmn2-container"></div>
            </div>
            <div className="colmn3">
              <div className="colmn3-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Software;
