import React, { Component } from "react";
import { AboutWrapper, InfoLinks } from "../../styles/GlobalStyle";

export class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <h2>About me</h2>
        <h3>Introduction:</h3>
        <p>
          Hello there! My Name is Gustav Bergman and i'm a 24 y/o student,
          currently studying to become a front-end developer in Stockholm,
          Sweden. I've always enjoyed creative things like drawing and i've
          really enjoyed front-end/webbdevelopment eversince i first got
          introduced to it in a webbdeveloper course in school. I thought it was
          really cool and i especially enjoyed the creative aspects that come
          with front-end and design. I got to try out more classic programming
          like Java as well but i didn't like it as much since you didn't have
          the same visual representation of what you are creating. The
          creativity also comes in many ways in front-end development. Anything
          from figuring out new solutions, ways to do things and structure too
          design.
        </p>
        <p>Before front-end i studied IT-Technology with a media focus.</p>
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
          original. I'm not very good at drawing by hand so photoshop is a great
          tool for me since i have a lot of tools/features to help out. I enjoy
          design in general so i lean more towards designer when it comes to
          front-end as well. I'm really looking forward to learning more about
          animations, transitions and diffrent effects and techniques to give
          some spice to the website.
        </p>
        <p>
          In my spare time i'm the stereotypical "Nerd". I don't do much other
          then hang out at home watching series, movies, streams you name it.
          Also always been a huge fan of video games and i've been playing
          eversince i was a little kid.
        </p>
        <p>
          When it comes to games i play pretty much anything and everything.
          Anything from fps shooters and MMO's to racing & rythm games. I enjoy
          videogames in general so i'm not very picky when it comes to the
          genres.
        </p>
        <p>
          I mostly play Overwatch and the rythm game osu!. But i've also played
          various games at a pretty high level and was Mythic raider in WoW for
          some time.
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
