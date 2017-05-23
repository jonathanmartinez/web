import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Particles from 'react-particles-js';

export default class App extends Component {
  constructor(props) {
    super(props);

    const particlesOptions = {
      particles: {
        "number":{
          "value":80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
      },
      interactivity:{
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
  }
  render() {
    return (
      <div className="App">
        <Particles params={this.particlesOptions} />
        <Navbar />
        <main className="container">
          <section className="row">
            <article className="col-xs-10 col-xs-offset-1 text-center">
              <h1 className="name">LOREMEMM IPSUMMM</h1>
              <p className="lead">LOREMMM IPSUMNNN</p>
              <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
              <p>Lorem Ipsum es simplemente <a href="#">el texto</a> de relleno de las imprentas y archivos de texto. .</p>
              <a className="social-link" href="#"> <i className="fa fa-github"></i> Github </a>
              <a className="social-link" href="#"> <i className="fa fa-linkedin"></i> Linkedin </a>
            </article>
          </section>
        </main>
      </div>
    );
  }
}