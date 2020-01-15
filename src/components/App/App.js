import React, { Component } from "react";
import { GlobalStyle } from "../../styles/GlobalStyle";
import Header from "../Header";
import Banner from "../Banner";
import Text from "../Text";
import Example from "../Example";
import Gallery from "../Gallery";
import About from "../About";
import Footer from "../Footer";

export class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Banner />
        <Text />
        <Example />
        <Gallery />
        <About />
        <Footer />
        {/*  Copyright © 2019 Gustav Bergman. All rights reserved.  */}
      </div>
    );
  }
}

export default App;
