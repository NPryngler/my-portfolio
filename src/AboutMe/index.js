import React, { Component } from 'react';
import "./style.css"
import { Redirect } from 'react-router-dom';

export default class Other extends Component {
  render() {
    return (
      <div>
        <div className="section-container">
          <h3>My Journey </h3>
          <div className="section-wrapper">
            <div className="left-container">

              <p className="brand-statement-description">I am driven by <span className="bold">learning new things and being able to build something out of my ever-growing toolbox. </span>This passion led me to become a lawyer, learn economics, study business and technology and experiment with a few web ventures.</p>
              <p className="brand-statement-description">That journey helped me <span className="bold">spot different angles to problems and find clever solutions in my work as a web developer. </span> All of this combines to make me a better developer, and an added value to a team.</p>
            </div>
            <div className="right-container">
              <img className="gif" src="https://static1.squarespace.com/static/535e680de4b0eea56c05a375/5b1946a7562fa7c61bf63936/5b1a3c691ae6cff9accd4309/1528453017318/ms-dir-dribbble-2.gif"></img>
              <p className="credit">@ "World Skills" from Cub Animation Studio</p>
            </div>

          </div>
          <div className="section-container">
            <h3>My WebDev Skills </h3>
            <div className="skills-wrapper">
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">Javascript</div>
              <div className="skill">React</div>
              <div className="skill">Node.js</div>
              <div className="skill">Express</div>
              <div className="skill">Github</div>
              <div className="skill">Ruby </div>
              <div className="skill">Ruby on Rails</div>
              <div className="skill">wordpress</div>
              
            </div>
          </div>
          <div className="section-container">
            <h3>Other Skills </h3>
              <div className="section-wrapper">
                <p className="section-description">Some skills I have learned in my pre-developer life, while bootstrapping to build a <a className="weblink" href="https://www.alvespryngler.com/">law firm</a> and an <a className="weblink" href="https://easymob.com.vc">online businees for the real state market</a></p>
              </div>
              <div className="skills-wrapper">
                <div className="skill">SEO and Google Analytics Tools</div>
                <div className="skill">Digital Marketing Techniques</div>
                <div className="skill">Setting up a help desk with Intercom</div>
                <div className="skill">Build a Messenger Chatbot with Chatfuel</div>
                <div className="skill">Build a website with Squarespace</div>
                <div className="skill">Build a website with Wix</div>
                <div className="skill">Manage a team</div>
                <div className="skill">Collaboration with Trello</div>
                <div className="skill">Business strategy and finance</div>
                <div className="skill">Design Thinking</div>
                <div className="skill">Agile</div>
                
              </div>
              
          </div>
        </div>
      </div>

    )
  }
}
