import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Particles from 'react-particles-js';

import {OverlayTrigger, Button, Tooltip} from 'react-bootstrap';

export default class App extends Component {
  render() {
    const particlesOptions = {
      particles: {
        "number":{
          "value":50,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color":{
          "value": "#343d46",
        },
        "line_linked":{
          "color": "#343d46"
        }
      },
      interactivity:{
        "detect_on": "window",
        "events":{
          "onhover":{
            "enable":true,
            "mode":"repulse"
          },
          "onclick":{
            "enable":true,
            "mode":"push"
          }
        }
      },
      retina_detect: false
    }

    const tooltipGithub = (
      <Tooltip id="tooltip">@jonathanmartinez</Tooltip>
    );
    const tooltipLinkedin = (
      <Tooltip id="tooltip">/jonathan-martinez</Tooltip>
    );
    const tooltipEmail = (
      <Tooltip id="tooltip">jonymartinez1@gmail.com</Tooltip>
    );
    const tooltipSkype = (
      <Tooltip id="tooltip">@skype</Tooltip>
    );

    return (
      <div className="App">
        <Particles params={particlesOptions} />
        <Navbar />
        <main className="container">
          <section className="row">
            <article className="col-xs-10 col-xs-offset-1 text-center">
              <h1 className="name">LOREMEMM IPSUMMM</h1>
              <p className="lead">Software Engineer</p>
              <a className="tag-link" href="https://developer.mozilla.org/en/docs/Web/JavaScript">#js</a>
              <a className="tag-link" href="https://facebook.github.io/react/">#reactjs</a>
              <a className="tag-link" href="https://angular.io/">#angular</a>
              <a className="tag-link" href="http://php.net/">#php</a>
              <a className="tag-link" href="https://nodejs.org/">#nodejs</a>
              <a className="tag-link" href="https://www.mysql.com/">#mysql</a>
              <a className="tag-link" href="https://www.mongodb.com/">#mongodb</a>
              <p className="bio">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
              <p className="last-project">Lorem Ipsum es simplemente <a href="#">el texto</a> de relleno de las imprentas y archivos de texto. .</p>
              <OverlayTrigger placement="top" overlay={tooltipGithub}>
                <a className="social-link" href="#"><i className="fa fa-github right-10"></i></a>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={tooltipLinkedin}>
                <a className="social-link" href="#"><i className="fa fa-linkedin right-10"></i></a>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={tooltipEmail}>
                <a className="social-link" href="#"><i className="fa fa-envelope right-10"></i></a>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={tooltipSkype}>
                <a className="social-link" href="#"><i className="fa fa-skype right-10"></i></a>
              </OverlayTrigger>
            </article>
          </section>
        </main>
      </div>
    );
  }
}