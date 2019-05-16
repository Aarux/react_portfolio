import React, { Component } from "react";
import { Nav, Link, nav1, nav2, nav3 } from "../../styles/GlobalStyle";

export class Navigation extends Component {
  render() {
    return (
      <Nav>
        <Link>
          <a href="google.se">
            <img src={nav1} alt="" />
            <h1>Project Gallery</h1>
          </a>
        </Link>
        <Link>
          <a href="google.se">
            <img src={nav2} alt="" />
            <h1>About Me</h1>
          </a>
        </Link>
        <Link>
          <a href="google.se">
            <img src={nav3} alt="" />
            <h1>Contact Me</h1>
          </a>
        </Link>
      </Nav>
    );
  }
}

export default Navigation;
