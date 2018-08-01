import React, { Component } from 'react';
import { Header } from '../../components/Header/Header.js';
import { Route } from 'react-router-dom';
import { ReportFires } from '../../components/ReportFires/ReportFires';
import Home from '../../containers/Home/Home';

export class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Route exact path='/' component={Home}/>
        <Route exact path='/reportFires' component={ReportFires}/>
      </div>
    );
  }
}

export default App;