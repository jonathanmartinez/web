import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Particles from 'react-particles-js';
import {OverlayTrigger, Button, Tooltip} from 'react-bootstrap';

export default class App extends Component {
  render() {
    let particlesOptions = {
      particles: {
        "number":{
          "value":15,

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
      retina_detect: true
    }

    //set number of particles based on device width
    const mediaquery = window.matchMedia("(min-width: 767px)");
    if (mediaquery.matches) {
      particlesOptions.particles.number.value = 60;
    } else {
      particlesOptions.particles.number.value = 15;
    }

    const tooltipGithub = (
      <Tooltip id="tooltip">@jonathanmartinez</Tooltip>
    );
    const tooltipLinkedin = (
      <Tooltip id="tooltip">/jonathan-martinez1</Tooltip>
    );
    const tooltipEmail = (
      <Tooltip id="tooltip">jonymartinez1@gmail.com</Tooltip>
    );
    const tooltipSkype = (
      <Tooltip id="tooltip">jonymartinez1@gmail.com</Tooltip>
    );

    return (
      <div className="App">
        <Particles params={particlesOptions} />
        <Navbar />
        <main className="container">
          <section className="row">
            <article className="col-xs-12 col-sm-10 col-sm-offset-1 text-center">
              <h1 className="name">JONATHAN MARTÍNEZ</h1>
              <p className="lead">Software Engineer</p>
              <a className="tag-link" href="https://www.w3.org/html/">#html</a>
              <a className="tag-link" href="https://developer.mozilla.org/en/docs/Web/CSS">#css</a>
              <a className="tag-link" href="https://developer.mozilla.org/en/docs/Web/JavaScript">#javascript</a>
              <a className="tag-link" href="https://facebook.github.io/react/">#reactjs</a>
              <a className="tag-link" href="https://angular.io/">#angular</a>
              <a className="tag-link" href="http://php.net/">#php</a>
              <a className="tag-link" href="https://nodejs.org/">#nodejs</a>
              <a className="tag-link" href="https://www.mysql.com/">#mysql</a>
              <a className="tag-link" href="https://www.mongodb.com/">#mongodb</a>
              <p className="bio">
                I'm a software engineer based in Alicante (Spain) focused in build software following the best practices.
                I've had the pleasure to work in/for several companies, from startups to big companies:&nbsp;
                {/*this nbsp's are to put a space with no underline*/}
                <a target="_blank" href="https://www.cymsuroeste.com/">CYM Suroeste</a>,&nbsp;
                  <a target="_blank" href="http://www.dual-link.com/">Dual Link</a>,&nbsp;
                    <a target="_blank" href="http://www.nitsnets.com/">Nitsnets</a>,&nbsp;
                      <a target="_blank" href="http://www.heartibiza.com/">HEART Ibiza</a>,&nbsp;
                        <a target="_blank" href="https://www.panamajack.es/">Panama Jack</a>,&nbsp;
                          <a target="_blank" href="http://www.mondraker.com/">Mondraker</a>,&nbsp;
                            <a target="_blank" href="http://blgabogados.es/">BLG Abogados</a>.&nbsp;
                            </p>
                            <p className="last-project">
                              Check out my last side project: <a target="_blank" href="http://elasticflight.com/">Elastic Flight</a> — Find cheap flights with no particular date.
                            </p>
                            <p>Feel free to contact me.</p>
                            <p>
                              <OverlayTrigger placement="top" overlay={tooltipGithub}>
                                <a className="social-link" target="_blank" href="https://github.com/jonathanmartinez"><i className="fa fa-github"></i></a>
                              </OverlayTrigger>
                              <OverlayTrigger placement="top" overlay={tooltipLinkedin}>
                                <a className="social-link" target="_blank" href="http://linkedin.com/in/jonathan-martinez1"><i className="fa fa-linkedin"></i></a>
                              </OverlayTrigger>
                              <OverlayTrigger placement="top" overlay={tooltipEmail}>
                                <a className="social-link" target="_blank" href="mailto:jonymartinez1@gmail.com"><i className="fa fa-envelope"></i></a>
                              </OverlayTrigger>
                              <OverlayTrigger placement="top" overlay={tooltipSkype}>
                                <a className="social-link" target="_blank" href="skype:jonymartinez1@gmail.com?call"><i className="fa fa-skype"></i></a>
                              </OverlayTrigger>
                            </p>
                            <p className="coded">Coded with <i className="fa fa-heart text-danger"></i> by <a href="https://github.com/jonathanmartinez" target="_blank"> Jonathan Martínez </a></p>
                          </article>
                        </section>
                      </main>
                    </div>
                  );
                }
              }
