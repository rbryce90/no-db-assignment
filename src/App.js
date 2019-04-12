import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather: [],
      temp: '',
      humidity: '',
    }
  }
  


  componentDidMount() {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?zip=85003&APPID=c297a5a7fe855de9c8f9e2fc267941bd&units=imperial')
      .then ( (response) => {
        this.setState({
          weather: response.data,
          temp: response.data.main.temp,
        });
    });
  }

  render() {
    let {weather, temp} = this.state;
    return (
      <div className="App">
        <Header />
        <Body weather={weather} temp={temp} />
      </div>
    );
  }
}

export default App;
