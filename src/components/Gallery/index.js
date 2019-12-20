import React, { Component } from "react";
import { Projects, project1, project2, Svg } from "../../styles/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export class Gallery extends Component {
  render() {
    return (
      <Projects>
        <h2>Project Gallery</h2>
        <p>
          Here are two example projects i've worked on so far. Once i have more
          projects to show i going to redesign this portfolio to better support
          showcasing multiple projects. I picked one graphic design project and
          one front-end project to showcase for now. If you want to check out
          more stuff i've been working on then you can find my GitHub link at
          the bottom and under the projects if available.
        </p>
        <p>Without further ado, let's get into the projects!</p>
        <h1>Project Grex/Booking app</h1>
        <img src={project1} alt="" />
        <p>
          <strong>Key Functions:</strong>
        </p>
        <p>
          Our app is connected to firebase. Here you can sign up a new user,
          sign in existing user, change password, reset password. Standard
          stuff. When you sign up you can do so with different roles: ADMIN,
          TEACHER, STUDENT or no role. Depending on the different roles you will
          get different access. ADMIN and TEACHER is the only role that gets
          full access. Let's check out the different key functions.
        </p>
        <p>
          <strong>Features:</strong>
        </p>
        <p>
          <strong>{">"}</strong> Create bookings with custom descriptions and
          invite any users you like with the search function.
        </p>
        <p>
          <strong>{">"}</strong> Track attending students with map and ETAs
          generated based on their proximity to the school.
        </p>
        <p>
          <strong>{">"}</strong> Automatically get updated when the students are
          within school vicinity, no more paperwork.
        </p>
        <p>
          Link to Project <strong>{">"}</strong>
        </p>
        <a href="https://github.com/pazsea/booking-app">
          Booking app - Github
          <Svg>
            <FontAwesomeIcon icon={faGithub} color="white" />
          </Svg>
        </a>

        <h1>Project Locus</h1>
        <img src={project2} alt="" />
        <p>
          <strong>Project goal:</strong>
        </p>
        <p>
          This was a collaborative project i made between graphic design and
          webdevelopment. The goal was to draw and color an image using
          photoshop which i would then use in my webdevelopment project as one
          of the images featured in a slider on the front page. I decided to
          draw the locus helmet form the "HALO" video-game franchise.
        </p>
        <p>
          <strong>Result:</strong>
        </p>
        <p>
          The result was the image above drawn and colored by hand using
          Photoshop. Considering i was really new to Photoshop im really happy
          with the end result.
        </p>
        <p>
          Link to Project <strong>{"> "}</strong>
          <strong>Unavailable</strong>
        </p>
      </Projects>
    );
  }
}

export default Gallery;
