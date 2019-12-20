import React, { Component } from "react";
import { FooterWrapper, Socials, Cc, Svg } from "../../styles/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, fa500px } from "@fortawesome/free-brands-svg-icons";

export class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <Socials>
          <h3>Contact me</h3>
          <a href="mailto:&#103;&#117;&#115;&#116;&#097;&#118;&#095;&#098;&#101;&#114;&#103;&#109;&#097;&#110;&#057;&#053;&#064;&#104;&#111;&#116;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
            Gustav Bergman - E-Mail
            <Svg>
              <FontAwesomeIcon icon={faEnvelope} color="white" />
            </Svg>
          </a>
          <a href="https://github.com/Aarux">
            Gustav Bergman - Github
            <Svg>
              <FontAwesomeIcon icon={faGithub} color="white" />
            </Svg>
          </a>
        </Socials>
        <Socials>
          <h3>Photographer Contact info</h3>
          <a href="mailto:&#109;&#097;&#114;&#101;&#110;&#046;&#115;&#097;&#110;&#100;&#118;&#111;&#108;&#100;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
            Maren Sandvold - E-Mail
            <Svg>
              <FontAwesomeIcon icon={faEnvelope} color="white" />
            </Svg>
          </a>
          <a className="social-links" href="https://500px.com/marensandvold">
            Maren Sandvold - Gallery
            <Svg>
              <FontAwesomeIcon icon={fa500px} color="white" />
            </Svg>
          </a>
        </Socials>
        <div>
          <Cc>Copyright © 2019 All rights reserved.</Cc>
        </div>
      </FooterWrapper>
    );
  }
}

export default Footer;
