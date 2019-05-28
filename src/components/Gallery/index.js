import React, { Component } from "react";
import { Projects, project1, project2 } from "../../styles/GlobalStyle";

export class Gallery extends Component {
  render() {
    return (
      <Projects>
        <h2>Project Gallery</h2>
        <p>
          Here are a few project i've worked on thus far. I choose to show one
          front-end focused project from the current education. A group project
          where me and my team build a booking app to allow you to book
          grouprooms within the school, report attendance and more. It was the
          2nd major team project. The second project i choose was actually a
          project from a earlier digitalcreations course i had. I've always
          enjoyed drawing and designing since i really like the creative side of
          it. Which is why i decided to go for a front-end code focused project
          as well as a more creative and graphic design focused project. I Don't
          have too much to put in here but i think this showcase a broader
          perspective of what i enjoy doing and hopefully i there are a lot more
          exiting projects in store for the future.
        </p>
        <p>Without further ado, let's get into the projects!</p>

        <h1>Project Grex</h1>
        <img src={project1} alt="" />
        <p>
          This was the 2nd major project in our education this far. We had
          pretty free hands on what we wanted to develop but had the
          requirements of using React and Firebase.
        </p>
        <p>
          We thought about our school and something we thought would be neat to
          have and decided to go with a booking app. The school has grouprooms
          but a pretty inconvenient way for booking and we took this idea and
          tried too build and improve it. Our plan was to make a booking app
          where the user "aka student" could book the grouprooms, see their/edit
          bookings, report attendance, features for teachers "aka admins" to
          book both class and grouprooms, invite their studends to class events
          and more. The structure and functions proved more complex then
          expected but with the amazing work from our "Firebase guy" Patrik we
          reached our goals for the functions and features and even almost had
          it ready for full release.
        </p>
        <p>
          In this project my main area was the design which i created with the
          help och a 2nd teammember with the feeadback and ideas provided by our
          group as a whole.
        </p>

        <h1>Project Locus</h1>
        <img src={project2} alt="" />
        <p>
          This was my biggest project i had during my digital creations course.
          We had it while also working on another major project in another
          course so i decided to get two birds with one stone and mashed em'
          togeather. This image was one of the images featured on my first
          portfolio in a image-slider. I was assigned to draw a image and color
          it in photoshop so i decided to go with the "Locus" helmet from the
          "Halo" videogame franchise. For this project i used a reference
          picture to get the positioning right for the contures as well as
          marking out the position of some of the details. But other than that
          it was drawn and colored "by hand" using photoshop.
        </p>
        <p>
          This project to a really long time to finish which was due to a
          combination of inexperience with photoshop but also cause i kept
          learning new things and techniques along the way which i tried to
          implement in the picture. Which caused it to be a bit of a "never
          ending project" since i was always fixing something with the color,
          shadow etc. But it was a really fun project and i enjoyed the creative
          aspect and freedom of drawing. In total i would estimate the project
          took about 2-4 months from start to finish. But it was worth it cause
          i learned a lot and was really happy with my personal progress and
          results.
        </p>
      </Projects>
    );
  }
}

export default Gallery;
