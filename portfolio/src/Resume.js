import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div id="resume">
        <h1>Resume</h1>
        <img className="resume" src = "/images/resume.png"></img>
      </div>
    );
  }
}

export default Resume;
