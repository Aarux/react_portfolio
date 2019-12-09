import React from "react";
import { GlobalStyle } from "../../styles/GlobalStyle";
import Header from "../Header";
import Banner from "../Banner";
// import Navigation from "../Navigation";
import Text from "../Text";
import Example from "../Example";
import Gallery from "../Gallery";
import About from "../About";
import Contact from "../Contact";
import Weather from "../Weather/Weather";
import Footer from "../Footer";

/* Copyright © 2019 Gustav Bergman. All rights reserved. */

const App = () => (
  <div>
    <GlobalStyle />
    <Header />
    <Banner />
    {/* <Navigation /> */}
    <Text />
    <Example />
    <Gallery />
    <About />
    <Contact />
    <Weather />
    <Footer />
    {/*  Copyright © 2019 Gustav Bergman. All rights reserved.  */}
  </div>
);

export default App;
