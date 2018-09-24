import React, { Component } from 'react';
import "./style.css";
import trivia from '../images/trivia.png';
import triviaGIF from '../images/trivia.gif';

import gitHubLogo from '../images/github.png';
import box from '../images/Box.png';
import PopUp from '../PopUp';
import movie from '../images/contract-generator.png'


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
                                <a href="https://pages.git.generalassemb.ly/NPryngler/World-Trivia-Game">
                                    Trivia Game</a>

                            </h3>
                            <p>
                                Pick a continent and answer questions about its countries.
                            </p>

                            <div>
                                <a href="https://github.com/NPryngler/NPryngler-github.io/">
                                    <img className="logo" src={gitHubLogo} ></img></a>
                            </div>
                        </div>
                        <div className="preview" >
                        <a href="https://pages.git.generalassemb.ly/NPryngler/World-Trivia-Game">
                        <img className="image" src={trivia} ></img>
                        </a>
                        </div>
                    </div>

                    <div className="project-container">
                        <div className="project-description">
                            <h3 className="project-title"><a href="https://contract-generator-app.herokuapp.com/">Contract Generator</a></h3>
                            <p>
                                Make a freelance contract in 3 simple steps.
                            </p>
                            {/* <div>
                                <img className="logo" src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX19498224.jpg"></img>
                            </div> */}
                            <div>
                                <a href="https://github.com/NPryngler/NPryngler-github.io/">
                                    <img className="logo" src={gitHubLogo} ></img></a>

                            </div>

                        </div>
                        <div className="preview">
                        <a href="https://contract-generator-app.herokuapp.com/">
                        <img className="image" src={movie} ></img>
                        </a>
                        </div>

                    </div>


                </div>
            </div>
        )
    }
}
