import React, { Component } from "react";
import { Projects, project1, project2 } from "../../styles/GlobalStyle";

export class Gallery extends Component {
  render() {
    return (
      <Projects>
        <h2>Project Gallery</h2>
        <p>
          Here are a few (Keyword being "few") of my previous projects. One
          project from a previous webdeveloper course and one project from a
          "Graphic design" course. I don't have much to show yet unfortunately
          due to issues i had with the computer i used at the time. Almost all
          of the data, projects and workfiles were lost. But hopefully i can
          fill this gallery up over time and improve on it's design to better
          fit a larger quantity of projects.
        </p>
        <p>Without further ado, let's get into the projects!</p>

        <h1>Project 1: Webdeveloper course, End project.</h1>
        <img src={project1} alt="" />
        <p>
          This was the big main project we had in the end of our
          "Webdevelopment" course. We had the task to create a website using
          html, css, php, Mysql (database) and JQuery/Javascript. For me
          personally it was very similar to this project since i decided to make
          a portfolio/online resume.
        </p>
        <p>
          I went with a pretty standard and simple design with a navbar in the
          top with links to my portfolio gallery, about me, contact info etc.
          Then i had a slider on the index page which featured images from
          diffrent projects in the portfolio as "banner". then i had a centered
          "main" div which featured the main content on the side and last but
          not least, a full width footer at the bottom of the page.
        </p>
        <p>
          To specify some features i had which doesnt show on the image i had a
          admin page with a upload form where i could upload projects. The form
          consisted of 4 fields where i filled in the preview image and text as
          well as the full image and text if you clicked on a specific projekt.
          The upload form validated file size, type, image proportions, text
          etc.
        </p>
        <p>
          The project was finished and hosted live in 2014 fully validated
          without errors in Html and CSS.
        </p>

        <h1>Project 2: Digital Creations course, Major project.</h1>
        <img src={project2} alt="" />
        <p>
          This was the biggest project i made during my digital creations
          course. We were assigned to draw a image and color it in Photoshop. I
          choose to combine this project with my Webdeveloper project and made
          the images that was going to be featured in my slider/project gallery
          on my online portfolio. I Choose to draw a helmet featured in the game
          "Halo 4" called the "Locus" helmet. I used a reference image to help
          draw the contures of the helmet and the position of some of the
          details.
        </p>
        <p>
          Appart from making some of the outlines/contures with a reference
          image i manually colored, shaded and highlighted the image by "hand"
          using photoshop. The project took a really long time, manily due to
          the fact i learned alot of new techniques along the way which i
          implemented in the image. I would guess the image, from start to
          finish took about 3-4 months.
        </p>
      </Projects>
    );
  }
}

export default Gallery;
