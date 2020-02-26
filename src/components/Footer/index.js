import React, { Component } from "react";
import { FooterWrapper, Cc, Svg } from "../../styles/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <h3>Contact me</h3>
        <a href="mailto:&#103;&#117;&#115;&#116;&#097;&#118;&#095;&#098;&#101;&#114;&#103;&#109;&#097;&#110;&#057;&#053;&#064;&#104;&#111;&#116;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
          E-Mail
          <Svg>
            <FontAwesomeIcon icon={faEnvelope} color="white" />
          </Svg>
        </a>
        <a href="https://github.com/Aarux">
          Github
          <Svg>
            <FontAwesomeIcon icon={faGithub} color="white" />
          </Svg>
        </a>
        <Cc>Copyright © 2019 All rights reserved.</Cc>
      </FooterWrapper>
    );
  }
}

export default Footer;
