import React, { Component } from "react";
import { AboutWrapper, InfoLinks } from "../../styles/GlobalStyle";

export class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <h2>About me</h2>
        <h3>Introduction: Who am i?</h3>
        <p>
          Hello there! My Name is Gustav Bergman and im 23 y/o and currently
          studiyng Front-End Developer in Stockholm, Sweden. I've been really
          interested in Front-end/webbdevelopment eversince my first
          webbdeveloper course in school. I thought it was really cool and a bit
          "hacker" like to create websites. In front-end you have a visual
          representation of what you're doing/creating. Which i enjoyed a lot
          and the creativity it brings both in the diffrent ways, solutions,
          design and structure. I previously studied It Technology with media
          focus.
        </p>
        <p>
          So, here are some courses related to Front-End that i have studied
          prevoiusly.
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
          I also enjoy drawing and editing pictures and make my own twist on the
          original. I'm not very good at drawing by hand (Totally don't use
          reference pictures, shhhhh!) so photoshop is a great tool for me since
          i have a lot of tools/features to help out. I enjoy design in general
          so i lean more towards designer when it comes to front-end as well.
          I'm really looking forward to learning more about animations,
          transitions and diffrent effects and techniques to give some spice to
          the website.
        </p>

        <p>
          In my spare time i'm the stereotypical "Nerd". I Watch movies, series,
          streams and game whenever im not studying or drawing.
        </p>
        <p>
          When it comes to games i play pretty much anything and everything.
          Anything from fps shooters and MMO's to racing & rythm games. Also
          play on both console (Xbox) and PC.
        </p>
        <p>
          Currently i mostly play WoW (Where i Raid in a Mythic guild),
          Overwatch and Osu!.
        </p>
        <p>If you're not familiar with the games there are info links below:</p>
        <InfoLinks>
          <a href="https://en.wikipedia.org/wiki/World_of_Warcraft">
            World of Warcraft
          </a>
          <a href="https://en.wikipedia.org/wiki/Overwatch_(video_game)">
            Overwatch
          </a>
          <a href="https://osu.ppy.sh/help/wiki/Welcome">Osu!</a>
        </InfoLinks>
      </AboutWrapper>
    );
  }
}

export default About;
