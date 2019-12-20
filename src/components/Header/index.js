import React, { Component } from "react";
import { HeaderWrapper, Logo, logo, Icon } from "../../styles/GlobalStyle";
import Weather from "../Weather/Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo>
          <img alt="" src={logo} />
          <h2>Gustav Bergman</h2>
          <Icon>
            <FontAwesomeIcon icon={faTemperatureLow} color="white" />
          </Icon>
          <Weather />
        </Logo>
      </HeaderWrapper>
    );
  }
}

export default Header;
