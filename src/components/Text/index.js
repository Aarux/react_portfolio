import React, { Component } from "react";
import { TextWrapper } from "../../styles/GlobalStyle";

export class Text extends Component {
  render() {
    return (
      <TextWrapper>
        <h2>Welcome to my Portfolio!</h2>
        <p>
          Hi, My name is Gustav Bergman and I am currently studying to become a
          Front-end developer. Welcome to my online portfolio! This portfolio is
          a part of the first individual project assignment but it's something i
          will keep working on over time as the course continue. Here you'll be
          able to read a little about me, what i do, what i've studied
          previously and the courses i've taken. But also to view previous work.
          On top of that you'll find some info about me personally. What i like
          to do in my spare time, hobbies, interests, you name it. The purpose
          of this website is also to provide a way for me to showcase what i can
          do and what i learned so far through out the education while i
          simultaneously work toward learning new things and improving upon the
          base knowledge i already possess. Which i then can implement to the
          website in the future.
        </p>
      </TextWrapper>
    );
  }
}

export default Text;
