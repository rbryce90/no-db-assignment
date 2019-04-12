import React, { Component } from 'react';
import './stylesheets/header.css'

export class Header extends Component {
  render() {
    return (
      <header>
        <div >
            <h1 style={{color:'white',textAlign:'center'}}>Comment on the Weather!</h1>
        </div>
      </header>
    )
  }
}

export default Header
