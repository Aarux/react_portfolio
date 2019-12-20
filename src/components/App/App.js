import React from "react";
import { GlobalStyle } from "../../styles/GlobalStyle";
import Header from "../Header";
import Banner from "../Banner";
import Text from "../Text";
import Example from "../Example";
import Gallery from "../Gallery";
import About from "../About";
// import Contact from "../Contact";
import Footer from "../Footer";

/* Copyright © 2019 Gustav Bergman. All rights reserved. */

const App = () => (
  <div>
    <GlobalStyle />
    <Header />
    <Banner />
    <Text />
    <Example />
    <Gallery />
    <About />
    {/* <Contact /> */}
    <Footer />
    {/*  Copyright © 2019 Gustav Bergman. All rights reserved.  */}
  </div>
);

export default App;
