import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { storeCurrentFireData } from './actions';
import { currentFireRequest } from './heplers/apiCalls';


class App extends Component {

  async componentDidMount(){
    const currentFireData = await currentFireRequest();
    console.log(currentFireData)
    this.props.storeCurrentFireData(currentFireData)
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

export const mapDispatchToProps = dispatch => ({
  storeCurrentFireData: (currentFireData) => dispatch(storeCurrentFireData(currentFireData))
})

export default connect(null, mapDispatchToProps)(App);

