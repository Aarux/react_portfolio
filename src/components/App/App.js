import React, { Component } from "react";
import {
  GlobalStyle,
  Banner,
  Headline,
  Header,
  Logo,
  logo,
  Icon
} from "../../styles/GlobalStyle";
import Text from "../Text";
import Example from "../Example";
import Gallery from "../Gallery";
import About from "../About";
import Footer from "../Footer";
import Weather from "../Weather/Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <div>
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
            <h1>Hi, I&apos;m Gustav.</h1>
            <h1>I&apos;m a Web Developer & Designer!</h1>
          </Headline>
        </Banner>
        <Text />
        <Example />
        <Gallery />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
