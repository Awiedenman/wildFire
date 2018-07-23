import React, { Component } from 'react'
import { connect } from 'react-redux';
import { storeCurrentFireData } from '../../actions';
import { fireDataCleaner } from '../../heplers/cleaner';
import { currentFireRequest, currentFireArticlesRequest } from '../../heplers/apiCalls';
// import { CurrentFireMapContainer } from '../../containers/CurrentFireMapContainer/CurrentFireMapContainer';
import CurrentFires from '../../containers/CurrentFires/CurrentFires';


class App extends Component {

  async componentDidMount() {
    // console.log('load');
    
    const currentFireData = await currentFireRequest();
    const parsedFiresData = JSON.parse(currentFireData)
    // console.log(parsedFiresData)
    fireDataCleaner(parsedFiresData);
    this.props.storeCurrentFireData(parsedFiresData)

    const currentFireArticlesData = await currentFireArticlesRequest();
    const parsedFireArticleData = JSON.parse(currentFireArticlesData)

    // console.log(parsedFireArticleData)
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
  storeCurrentFireData: (parsedFiresData) => dispatch(storeCurrentFireData(parsedFiresData))
})

export default connect(null, mapDispatchToProps)(App)