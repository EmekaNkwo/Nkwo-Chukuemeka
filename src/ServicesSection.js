import React from "react";

import {
  SiBootstrap,
  SiCss3,
  SiGithub,
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
          <p>My</p>
          <h1>SKILLS</h1>
        </div>

        <div className="skills_container">
          <div className="skills_list">
            <div className="skills">
              <div className="skill-icon">
                <SiHtml5 />
              </div>
              <h2>HTML</h2>
            </div>
            <div className="skills">
              <div className="skill-icon">
                <SiCss3 />
              </div>
              <h2>CSS</h2>
            </div>
            <div className="skills">
              <div className="skill-icon">
                <SiJavascript />
              </div>
              <h2>JAVASCRIPT</h2>
            </div>
          </div>
          <div className="skills_list">
            <div className="skills">
              <div className="skill-icon">
                <SiReact />
              </div>
              <h2>REACT</h2>
            </div>
            <div className="skills">
              <div className="skill-icon">
                <SiGithub />
              </div>
              <h2>GIT</h2>
            </div>
            <div className="skills">
              <div className="skill-icon">
                <SiBootstrap />
              </div>
              <h2>BOOTSTRAP</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
