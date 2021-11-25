import React from "react";
// import { MdClose, MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-section">
            <div className="nav-logo">
              <NavLink to="/" className="logo-link">
                <img src={logo} alt="logo" className="nav-logo-picture" />
              </NavLink>
            </div>
            <ul className="nav-item">
              <li>
                <NavLink className="nav-link" to="/about" exact>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/portfolio">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/services">
                  Skillset
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
