import React, { Component } from "react";
import { AboutWrapper, InfoLinks } from "../../styles/GlobalStyle";

export class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <h2>About me</h2>
        <h3>Introduction:</h3>
        <p>
          Hello! My name is Gustav Bergman and i'm a 24 y/o student from Sweden.
          I am currently studying "Front-End Developer" at KYH in Stockholm,
          Sweden.
        </p>
        <p>
          Eversince i was a kid i've been interested in programming, graphic
          design, game development, game design and so on. It was through school
          that i was first introduced to programming, webbdevelopment and
          graphic design. I got hooked on webbdevelopment and graphic design
          right away. I've always been creative and liked problemsolving so it
          was a good match with both webbdevelopment and graphic design. Unlike
          programming in java for instance, in webbdevelopment i had a lot more
          creative freedom and options and i always had a visual representation
          of what i was learning so i could see my progress as i got better.
          Which made learning and improving a lot of fun! Graphic design felt
          like a natural fit after that cause i wanted to be able to create my
          own logo, images, design and so on.
        </p>
        <p>
          Before front-end i studied IT-Technology with a media focus. So, here
          are some courses related to Front-End that i have studied prevoiusly.
        </p>
        <ul>
          <li>
            <p>Webbdeveloper 1</p>
          </li>
          <li>
            <p>Webbdeveloper 2</p>
          </li>
          <li>
            <p>Programming 1</p>
          </li>
          <li>
            <p>Programming 2</p>
          </li>
          <li>
            <p>Graphic Creations/Design</p>
          </li>
          <li>
            <p>User Interface Design</p>
          </li>
        </ul>
        <p>
          In my spare time i like to just relax at home and play video games,
          watch a movie/show or drawing.
        </p>
        <p>
          When it comes to games i play anything, i'm just a huge fan of video
          games in general so anything goes. I also enjoy trying and learning
          new things and games. Some of the games i play are Overwatch, World of
          Warcracft, Black Desert Online and osu!.If you are not familiar with
          the games and what to know more you can check out the information
          links below.
        </p>
        <InfoLinks>
          <a href="https://en.wikipedia.org/wiki/World_of_Warcraft">
            World of Warcraft
          </a>
          <a href="https://en.wikipedia.org/wiki/Overwatch_(video_game)">
            Overwatch
          </a>
          <a href="https://osu.ppy.sh/help/wiki/Welcome">osu!</a>
          <a href="https://en.wikipedia.org/wiki/Black_Desert_Online">
            Black Desert Online
          </a>
        </InfoLinks>
      </AboutWrapper>
    );
  }
}

export default About;
