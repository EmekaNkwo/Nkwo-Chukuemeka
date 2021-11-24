// import React, { useState } from "react";

import React from "react";

import "./ContactUs.css";

export default function ContactUs() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  return (
    <div>
      <div className="contact">
        <div className="contact-heading">
          <h1>Get in Touch</h1>
        </div>

        <div className="contact_info_wrapper">
          <div className="left">
            <p className="contact-text">
              I am always open to not only work but also collaborate with
              companies/individuals. Feel free to send a message across so we
              can work together
            </p>
            <div className="contact_info">
              <div className="info-button">
                <a
                  href="mailto:nkwoemeka49@gmail.com&subject=Hi, Chukwuemeka"
                  className="button-link"
                >
                  Send a Message
                </a>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <form>
              <div className="form-group">
                <label htmlFor="name">
                  Your Name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Your Email
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  Message
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
              </div>
              <button type="submit">Send</button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
}
