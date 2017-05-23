import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={{
            		particles: {
            			"number":{"value":80, "density": {
        "enable": true,
        "value_area": 800
      }},
            		},
                interactivity:{"events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"}}}
            	}} />

              <Navbar />
              <div className="container">
                <div className="row">
                  <div className="col-xs-8 col-xs-offset-2 text-center">
                    <br/><br/><br/><br/>
                    <h1>JONATHAN MARTINEZ</h1>
                    <p >Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                    <p >Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. .</p>
                  </div>
                </div>
              </div>

      </div>
    );
  }
}

export default App;
