import React from "react";

import "./Portfoliosection.css";
import project1 from "./images/mamaj.png";

export default function PortfolioSection() {
  return (
    <div>
      <div className="portfolio-style">
        <div className="portfolio">
          <div className="portfolio-heading">
            <p>Some of my recent</p>
            <h1>Projects</h1>
            <hr className="portfolio-line" />
          </div>

          <div className="portfolio_list">
            <div className="portfolio_item">
              <a href="/" className="portfolio-link">
                <img
                  src={project1}
                  alt="Porfolio Img"
                  className="portfolio_img"
                />
              </a>
              <div className="portfolio_info">
                <a href="/" className="portfolio-link">
                  <h3 className="portfolio_title">MaMaJ Kitchen</h3>
                </a>
                {/* <p className="portfolio_desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  non architecto
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
