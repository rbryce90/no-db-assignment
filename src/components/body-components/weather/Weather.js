import React, { Component } from 'react';
import './weather.css';

export class Weather extends Component {
  render() {
    let {weather, temp, humidity} = this.props;
    return (
      <div >
        <h1>{weather.name}</h1> <br />
        <h2>Temperature : { temp }</h2><br />

      </div>
    )
  }
}

export default Weather
