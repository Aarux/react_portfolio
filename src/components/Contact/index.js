import React, { Component } from "react";
import { ContactWrapper, Socials } from "../../styles/GlobalStyle";

const cr = {
  margin: "0 10%",
  padding: "10px 25px"
};

export class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <h2>Contact Information:</h2>
        <h3>Contact me</h3>
        <Socials>
          <a href="mailto:&#103;&#117;&#115;&#116;&#097;&#118;&#095;&#098;&#101;&#114;&#103;&#109;&#097;&#110;&#057;&#053;&#064;&#104;&#111;&#116;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
            Gustav Bergman - E-Mail
          </a>
          <a href="https://github.com/Aarux/portfolio">
            Gustav Bergman - Github
          </a>
        </Socials>
        <h3>Photographer Contact info</h3>
        <Socials>
          <a href="mailto:&#109;&#097;&#114;&#101;&#110;&#046;&#115;&#097;&#110;&#100;&#118;&#111;&#108;&#100;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
            Maren Sandvold - E-Mail
          </a>
          <a className="social-links" href="https://500px.com/marensandvold">
            Maren Sandvold - Gallery
          </a>
          <p style={cr}>
            Copyright © 2019 Maren Sandvold. All rights reserved.
          </p>
        </Socials>
      </ContactWrapper>
    );
  }
}

export default Contact;
