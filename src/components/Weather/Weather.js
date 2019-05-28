import React, { Component } from "react";
import styled from "styled-components";

const WeatherContainer = styled.div`
  p {
    color: #000;
    text-align: center;
    padding: 10px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export class Weather extends Component {
  state = {
    temp: null,
    name: null
  };

  componentDidMount() {
    const API =
      "https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=2594cca81006bcc80b3792ce7c1a6916";
    fetch(API)
      .then(res => res.json())
      .then(json => {
        let temp = Math.floor(json.main.temp - 273.15);
        let name = json.name;
        this.setState({
          temp: temp,
          name: name
        });
      });
  }

  render() {
    return (
      <WeatherContainer>
        <p>
          {" "}
          {this.state.name} {this.state.temp} ˚
        </p>
      </WeatherContainer>
    );
  }
}

export default Weather;
