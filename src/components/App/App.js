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
import Footer from "../Footer";

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
    <Footer />
  </div>
);

export default App;
