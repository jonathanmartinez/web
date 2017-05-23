import React, { Component } from 'react';
import logo from '../images/logo.png';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="container">
        <div className="row">
          <div className="col-xs-12">
            <img height="50" className="logo" src={logo} alt="Logo JM" />
          </div>
        </div>
      </nav>
    );
  }
}
