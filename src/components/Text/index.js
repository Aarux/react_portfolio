import React, { Component } from "react";
import { TextWrapper } from "../../styles/GlobalStyle";

export class Text extends Component {
  render() {
    return (
      <TextWrapper>
        <h2>Welcome to my Portfolio!</h2>
        {/* <p>
          Hi, My name is Gustav Bergman and Welcome to my Portfolio! I am
          currently studying to become a front-end developer and this portfolio
          is a part of our second individual project where we take our portfolio
          and rebuild it using React.js framework. React has been fun to work
          with and this is my first webbsite built using React.js. The plan is
          to keep working on this over time and implement the things i learn
          into this portfolio while also showcasing what i do/have done in the
          past.
        </p>
        <p>
          So here you'll find some general info about me, what i do, previous
          projects, spare time activities, you name it! The main purpose for
          this website at the moment is to be a way for me to showcase what i
          can do and what i've learned this far while simultaneously working on
          improving and learning new things to implement and improve on this
          website in the future as i get more project and work to fill it with.
        </p> */}
      </TextWrapper>
    );
  }
}

export default Text;
