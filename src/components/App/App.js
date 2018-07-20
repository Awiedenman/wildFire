import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CurrentFires from '../../containers/CurrentFires/CurrentFires';



class App extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={CurrentFires} />
      </div>
    );
  }
}

export default App;

