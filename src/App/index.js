import React, { Component } from "react";
import "./style.css";
import Projects from "../Projects";
import Other from "../Other";
import Contact from "../Contact";


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
        <h1>Hello there!</h1>
        <h2>Welcome to Natasha Pryngler's portfolio</h2>
           
        <div className="wrapper">
            <div className="my-projects container">My Projects</div>
            <Projects />
            {/* <div className="other-stuff container">Other Stuff</div>
            <Other /> */}
            <div className="other-stuff container">My contact</div>
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
