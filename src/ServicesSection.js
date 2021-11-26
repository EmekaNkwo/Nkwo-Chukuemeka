import React from "react";

import {
  SiBootstrap,
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
} from "react-icons/si";
import "./ServicesSection.css";
export default function ServicesSection() {
  return (
    <div>
      <div className="skills_section">
        <div className="skills_heading">
          <p>Some</p>
          <h1>Tools I Use</h1>
          <hr className="skills-line" />
        </div>

        <div className="skills_container">
          <div className="skills">
            <SiHtml5 className="skill-icon" />
            <h2>HTML</h2>
          </div>
          <div className="skills">
            <SiCss3 className="skill-icon" />
            <h2>CSS</h2>
          </div>
          <div className="skills">
            <SiJavascript className="skill-icon" />
            <h2>JAVASCRIPT</h2>
          </div>
        </div>
        <div className="skills_container">
          <div className="skills">
            <SiReact className="skill-icon" />
            <h2>REACT</h2>
          </div>

          <div className="skills">
            <SiGit className="skill-icon" />
            <h2>GIT</h2>
          </div>
          <div className="skills">
            <SiBootstrap className="skill-icon" />
            <h2>BOOTSTRAP</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
