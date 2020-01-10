import React, { Component } from "react";
import { AboutWrapper /*InfoLinks*/ } from "../../styles/GlobalStyle";

export class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <h1 className="h1">About me</h1>
        <h3>Introduction:</h3>
        <p>
          Hello! My name is Gustav Bergman and i'm a 24 y/o student from Sweden.
          I am currently studying "Front-End Developer" at KYH in Stockholm,
          Sweden.
        </p>
        <p>
          Below you can read the courses i've taken so far at KYH{" "}
          {"(Front-end)"} with the main focus marked with "
          <strong>{">"}</strong>".
        </p>
        <ul>
          <li>
            <p>
              <strong>{">"}</strong> JavaScript & React.js
            </p>
          </li>
          <li>
            <p>
              <strong>{">"}</strong> Internship
            </p>
          </li>
          <li>
            <p>Work methodology for developers</p>
          </li>
          <li>
            <p>Back-end development</p>
          </li>
          <li>
            <p>Graphic tools for interface design</p>
          </li>
          <li>
            <p>HTML5 & CSS3</p>
          </li>
          <li>
            <p>User experience design, UX Design.</p>
          </li>
        </ul>
        <p>
          Before "Front-end Developer" i studied Technology, so i have a Tech
          degree with a focus on Media Technology. Below you can see some of the
          front-end relevant tech/media courses i've studied previously.
        </p>
        <ul>
          <li>
            <p>Webbdeveloper 1 & 2</p>
          </li>
          <li>
            <p>Programming 1 & 2</p>
          </li>
          <li>
            <p>Graphic Creations/Design</p>
          </li>
          <li>
            <p>User Interface Design</p>
          </li>
        </ul>
        <p></p>
      </AboutWrapper>
    );
  }
}

export default About;
