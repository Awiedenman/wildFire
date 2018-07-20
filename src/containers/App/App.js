import React, { Component } from 'react'
import { connect } from 'react-redux';
import { storeCurrentFireData } from '../../actions';
import { currentFireRequest, currentFireArticlesRequest } from '../../heplers/apiCalls';
// import { CurrentFireMapContainer } from '../../containers/CurrentFireMapContainer/CurrentFireMapContainer';
import CurrentFires from '../../containers/CurrentFires/CurrentFires';


class App extends Component {

  async componentDidMount() {
    console.log('load');
    
    const currentFireData = await currentFireRequest();
    console.log(currentFireData)
    this.props.storeCurrentFireData(currentFireData)

    const currentFireArticlesData = await currentFireArticlesRequest();
    console.log(currentFireArticlesData)
  }

  render() {
    return (
      <div>
        <CurrentFires/>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  storeCurrentFireData: (currentFireData) => dispatch(storeCurrentFireData(currentFireData))
})

export default connect(null, mapDispatchToProps)(App)