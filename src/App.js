import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
var convert = require('xml-js');


class App extends Component {

  componentDidMount(){
    this.currentFireRequest();

  }

  currentFireRequest = async () => {
    const url = 'https://cors-anywhere.herokuapp.com/https://www.geomac.gov/DynContent/georss/nifc_large_firesW3C.xml';
    const xmlResponse = await fetch(url);
    // consorle.log(xmlData)
    const currentFireData = await xmlResponse.text();
    var result = convert.xml2json(
      currentFireData, {
        compact: true,
        spaces: 2
      });
    console.log(result)
    console.log(currentFireData)
    return currentFireData

  }

  render() {
    return (
      <main>
        <header>
        </header>
      </main>
    );
  }
}

export default App;
