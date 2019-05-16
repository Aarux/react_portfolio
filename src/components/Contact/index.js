import React, { Component } from "react";
import { ContactWrapper, Socials } from "../../styles/GlobalStyle";

export class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <h2>Contact Information:</h2>
        <h1>Contact me</h1>
        <Socials>
          <a href="mailto:&#103;&#117;&#115;&#116;&#097;&#118;&#095;&#098;&#101;&#114;&#103;&#109;&#097;&#110;&#057;&#053;&#064;&#104;&#111;&#116;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
            <h1>Gustav Bergman - E-Mail</h1>
          </a>
          <a href="https://github.com/Aarux/portfolio">
            <h1>Gustav Bergman - Github</h1>
          </a>
        </Socials>
        <h1>Photographer Contact info</h1>
        <Socials>
          <a href="mailto:&#109;&#097;&#114;&#101;&#110;&#046;&#115;&#097;&#110;&#100;&#118;&#111;&#108;&#100;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
            <h1>Maren Sandvold - E-Mail</h1>
          </a>
          <a className="social-links" href="https://500px.com/marensandvold">
            <h1>Maren Sandvold - Gallery</h1>
          </a>
          <p>Copyright © 2019 Maren Sandvold. All rights reserved.</p>
        </Socials>
      </ContactWrapper>
    );
  }
}

export default Contact;
