import React, { Component } from "react";
import { Image, Headline } from "../../styles/GlobalStyle";

export class Banner extends Component {
  render() {
    return (
      <Image>
        <Headline>
          <h1>Hi, I'm Gustav.</h1>
          <h1>I'm a Web Developer & Designer!</h1>
        </Headline>
      </Image>
    );
  }
}

export default Banner;
