import React, { Component } from "react";
import { TextWrapper } from "../../styles/GlobalStyle";

export class Text extends Component {
  render() {
    return (
      <TextWrapper>
        <h2>Welcome to my Portfolio!</h2>
        <p>
          It's a little empty now but once i have more projects i want to
          showcase i will rebuild the portfolio so it's better suited to
          showcase the projects.
        </p>
      </TextWrapper>
    );
  }
}

export default Text;
