import React from "react";
import "./AboutSection.css";
import profilepic from "./images/profile.jpg";

export default function AboutSection() {
  return (
    <div>
      <div class="about">
        <div class="container">
          <div class="about-details">
            <div class="about-heading">
              <p>Let me introduce</p>
              <h1>Myself</h1>
              <hr className="about-line" />
            </div>
            <p className="about_text">
              Hello, I am Emeka. I really love to design and code. To me,
              Learning is a continuous thing which I love doing and continue to
              challenge myself and be better. I am a fast learner, hardorking
              and curious to solve a problem. I have learned and developed
              expertise in a number of areas over the course of my life and
              career. I am open to new opportunies. You can read more about me,
              experience, skills, education and more below:
            </p>
            <div class="about-buttons">
              <a
                className="about_main_buttons-link"
                href="https://drive.google.com/file/d/1JoiQl64q09HXSjYybH96sk17Qxfu9P4-/view?usp=drivesdk"
              >
                <button className="about_main_buttons"> Download CV</button>
              </a>
              <a
                className="about_main_buttons-link"
                href="https://www.linkedin.com/in/chukwuemekankwo"
              >
                <button className="about_main_buttons">Get to know me</button>
              </a>
            </div>
          </div>
          <div class="profile-div">
            <img
              src={profilepic}
              alt="profile-display"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
