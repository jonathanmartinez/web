import React, { Component } from 'react';
import logo from '../images/logo.png';
import logoBlue from '../images/logo_blue.png';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="container">
        <div className="row">
          <div className="col-xs-12">
            <img height="50" className="logo" src={logoBlue} alt="Logo JM" />
          </div>
        </div>
      </nav>
    );
  }
}
