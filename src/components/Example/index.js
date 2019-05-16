import React, { Component } from "react";
import {
  ExampleWrapper,
  Examples,
  image1,
  image2,
  image3
} from "../../styles/GlobalStyle";

export class Example extends Component {
  render() {
    return (
      <ExampleWrapper>
        <Examples>
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </Examples>
      </ExampleWrapper>
    );
  }
}

export default Example;
