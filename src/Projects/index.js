import React, { Component } from 'react';
import "./style.css";
import trivia from '../images/trivia.png';
import triviaGIF from '../images/trivia.gif';

import gitHubLogo from '../images/github.png';
import box from '../images/Box.png';
import PopUp from '../PopUp';
import movie from '../images/contract-generator.png';
import vynil from '../images/my-vynil.gif';
import contractApp from '../images/contract-app.gif';
import { Redirect } from 'react-router-dom';


export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popUp: false,
            hover: false,
        }
    }


    render() {
        return (
            <div>
                <div className="projects-container">

                    <div className="project-container">
                        <div className="project-description">
                            <h3 className="project-title">
                                <a href="https://contract-management-app.herokuapp.com/">
                                    Contract Management App</a>

                            </h3>
                            <p>
                                An application that enables the user to generate and store their existing contracts information in a single place.
                            </p>
                            <h4>TOOLS</h4>
                            <div className="skills-wrapper">
                                <div className="skill">HTML</div>
                                <div className="skill">CSS</div>
                                <div className="skill">Javascript</div>
                                <div className="skill">React</div>
                                <div className="skill">Node.js</div>
                                <div className="skill">Express</div>
                                <div className="skill">Github</div>
                            </div>

                            <div>
                                <a href="https://github.com/NPryngler/contract_management_app">
                                    <img className="logo" src={gitHubLogo} ></img></a>
                            </div>
                        </div>
                        <div className="preview" >
                            <a href="https://contract-management-app.herokuapp.com/">
                                <img className="image" src={contractApp} ></img>
                            </a>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="project-description">
                            <h3 className="project-title">
                                <a href="https://my-lp.herokuapp.com/">
                                    My Vynil Collection</a>

                            </h3>
                            <p>
                                Collaboration project in which our team built a web application for users to track their favorite vynils and check other users favorite vynils.
                            </p>
                            <h4>TOOLS</h4>
                            <div className="skills-wrapper">
                                <div className="skill">HTML</div>
                                <div className="skill">CSS</div>
                                <div className="skill">Javascript</div>
                                <div className="skill">React</div>
                                <div className="skill">Node.js</div>
                                <div className="skill">Express</div>
                                <div className="skill">Github</div>
                            </div>

                            <div>
                                <a href="https://github.com/NPryngler/my-vynil-collection">
                                    <img className="logo" src={gitHubLogo} ></img></a>
                            </div>
                        </div>
                        <div className="preview" >
                            <a href="https://my-lp.herokuapp.com">
                                <img className="image" src={vynil} ></img>
                            </a>
                        </div>
                    </div>


                    <div className="project-container">
                        <div className="project-description">
                            <h3 className="project-title"><a href="https://contract-generator-app.herokuapp.com/">Contract Generator</a></h3>
                            <p>
                                Make a freelance contract in 3 simple steps.
                            </p>
                            <h4>TOOLS</h4>
                            <div className="skills-wrapper">
                                <div className="skill">HTML</div>
                                <div className="skill">CSS</div>
                                <div className="skill">Javascript</div>
                                <div className="skill">React</div>
                            </div>
                            <div>
                                <a href="https://github.com/NPryngler/contract-generator-app">
                                    <img className="logo" src={gitHubLogo} ></img></a>

                            </div>

                        </div>
                        <div className="preview">
                            <a href="https://contract-generator-app.herokuapp.com/">
                                <img className="image" src={movie} ></img>
                            </a>
                        </div>
                    </div>


                    <div className="project-container">
                        <div className="project-description">
                            <h3 className="project-title">
                                <a href="https://pages.git.generalassemb.ly/NPryngler/World-Trivia-Game">
                                    Trivia Game</a>

                            </h3>
                            <p>
                                Pick a continent and answer questions about its countries.
                            </p>
                            <h4>TOOLS</h4>
                            <div className="skills-wrapper">
                                <div className="skill">HTML</div>
                                <div className="skill">CSS</div>
                                <div className="skill">Javascript</div>
                            </div>
                            <div>
                                <a href="https://github.com/NPryngler/NPryngler-github.io/">
                                    <img className="logo" src={gitHubLogo} ></img></a>
                            </div>
                        </div>
                        <div className="preview" >
                            <a href="https://github.com/NPryngler/World-Trivia-Game">
                                <img className="image" src={trivia} ></img>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
