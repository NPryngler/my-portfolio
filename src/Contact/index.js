import React, { Component } from 'react';
import linkedinLogo from '../images/linkedin.png';
import gitHubLogo from '../images/github.png';
import emailLogo from '../images/email.png';
import phone from '../images/phone.png';
import "./style.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="icons-container">
          <div className='contact'>
            <a href="https://www.linkedin.com/in/natashapryngler/">
              <img className="logo" src={linkedinLogo} ></img></a>
          </div>
          <div className='contact'>
            <a href="https://github.com/NPryngler/NPryngler-github.io/">
              <img className="logo" src={gitHubLogo} ></img></a>
            </div>
          <div className='contact'>
              <a href="mailto:natasha@pryngler.com">
                <img className="logo" src={emailLogo}></img></a>
            </div>
          </div>
          <h3><a href="https://www.dropbox.com/s/v9092m9xzho138c/NATASHAPRYNGLER_resume.pdf?dl=0">Download my resume</a></h3>
        </div>
        )
      }
    }
