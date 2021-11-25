import React from "react";

import "./LandingPage.css";
import Navbar from "./Navbar";
//import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="heading-container">
        <div className="header">
          <p>Hi, This is </p>
          <h1>Nkwo Chukwuemeka</h1>
          <p>
            A Web Designer and Developer. I design and code unique, amazing
            websites and I enjoy what i do.{" "}
          </p>
        </div>
        <div className="header-line"></div>
      </div>
    </>
  );
}

export default LandingPage;
