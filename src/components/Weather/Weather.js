import React, { Component } from "react";
import styled from "styled-components";

const WeatherContainer = styled.div`
  width: 120px;
  display: flex;
  position: fixed;
  margin-right: 10px;
  align-items: center;
  padding: 15px;
  font-size: 1em;
  font-weight: 600;
  right: 0;
`;

const P = styled.p`
  align-items: center;
  display: flex;
  font-size: 1em;
  color: #f1f1f1;
  strong {
    margin-left: 10px;
    margin-top: -3px;
  }
  @media (max-width: 600px) {
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
        <P>
          {this.state.name}: {this.state.temp}˚ <strong> |</strong>
        </P>
      </WeatherContainer>
    );
  }
}

export default Weather;
