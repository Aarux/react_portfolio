import React, { Component } from "react";
import { HeaderWrapper, Logo, logo } from "../../styles/GlobalStyle";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo>
          <img alt="" src={logo} />
          <h2>Gustav Bergman</h2>
        </Logo>
      </HeaderWrapper>
    );
  }
}

export default Header;
