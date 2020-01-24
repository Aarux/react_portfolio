import React, { Component, Fragment } from "react";
import {
  GlobalStyle,
  Banner,
  Headline,
  Header,
  Logo,
  logo,
  Icon
} from "../../styles/GlobalStyle";
// import Header from "../Header";
// import Banner from "../Banner";
import Text from "../Text";
import Example from "../Example";
import Gallery from "../Gallery";
import About from "../About";
import Footer from "../Footer";
// import { Image, Headline } from "../../styles/GlobalStyle";
// import { HeaderWrapper, Logo, logo, Icon } from "../../styles/GlobalStyle";
import Weather from "../Weather/Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header>
          <Logo>
            <img alt="" src={logo} />
            <h2>Gustav Bergman</h2>
            <Icon>
              <FontAwesomeIcon icon={faTemperatureLow} color="white" />
            </Icon>
            <Weather />
          </Logo>
        </Header>
        <Banner>
          <Headline>
            <h1>Hi, I'm Gustav.</h1>
            <h1>I'm a Web Developer & Designer!</h1>
          </Headline>
        </Banner>
        <Text />
        <Example />
        <Gallery />
        <About />
        <Footer />
        {/*  Copyright © 2019 Gustav Bergman. All rights reserved.  */}
      </Fragment>
    );
  }
}

export default App;
