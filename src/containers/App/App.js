import React, { Component } from 'react'
import { Header } from '../../components/Header/Header.js';
// import CurrentFires from '../../containers/CurrentFires/CurrentFires';
import { Route } from 'react-router-dom';
import { ReportFires } from '../../components/ReportFires/ReportFires';
import Home from '../Home/Home';


export class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Route exact path='/' component={Home}/>
        <Route exact path='/reportFires' component={ReportFires}/>
      </div>
    )
  }
}

export default App;