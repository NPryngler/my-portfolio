import React, { Component } from "react";
import "./style.css";
import Projects from "../Projects";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <div className="header-container">
              <h1>Hello there!</h1>
              <h2>Welcome to Natasha Pryngler's portfolio</h2>
            </div>
            <nav className="nav-links">
              <div className="link-wrapper">
                <Link
                  className="link"
                  to="/">About Me
                </Link>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
            </div>
              <div className="link-wrapper">
                <Link
                  className="link"
                  to="/my-projects">My Projects
                </Link>
                &nbsp;
                &nbsp;
            </div>
            </nav>
            <div className="body-container">
              <Route exact path='/' component={AboutMe} />
              <Route exact path='/my-projects' component={Projects} />

            </div>
            <div className="wrapper">
              {/* <div className="section-header container">About Me</div>
              <AboutMe />
              <div className="section-header container">My Projects</div>
              <Projects /> */}
              <div className="section-header container">Find me</div>
              <Contact />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
