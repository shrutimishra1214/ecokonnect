import React, { Component } from 'react';
import './style.css';

export class Header extends Component {
  render() {
    return (
      <header>
        <img src="ecokonnect.png" width="40" height="40"></img>
      <a className="eco">EcoKonnect</a><br></br><br></br><br></br>
      </header>
      
    )
  }
}

export default Header;
