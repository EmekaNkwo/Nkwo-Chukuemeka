import React from "react";
import "./App.css";
import ContactUs from "./ContactUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
            <About />
            <Services />
            <Portfolio />
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
