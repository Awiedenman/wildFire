import React, { Component } from 'react'
import { connect } from 'react-redux';
import { storeCurrentFireData } from '../../actions';
import { fireDataCleaner } from '../../heplers/cleaner';
import { Header } from '../../components/Header/Header.js';
import { currentFireRequest /* currentFireArticlesRequest*/ } from '../../heplers/apiCalls/apiCalls';
import CurrentFires from '../../containers/CurrentFires/CurrentFires';
import { Route } from 'react-router-dom';
import { ReportFires } from '../../components/ReportFires/ReportFires';
import { withRouter } from 'react-router-dom';


export class App extends Component {

  async componentDidMount() {    
    const currentFireData = await currentFireRequest();
    const parsedFiresData = JSON.parse(currentFireData)
    console.log(parsedFiresData)
    const cleanedCurrentFireData = fireDataCleaner(parsedFiresData);
    console.log('cleanedCurrentFireData', cleanedCurrentFireData)
    this.props.storeCurrentFireData(cleanedCurrentFireData)

    // const currentFireArticlesData = await currentFireArticlesRequest();
    // const parsedFireArticleData = JSON.parse(currentFireArticlesData)
    // console.log(parsedFireArticleData)
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path='/' component={CurrentFires}/>
        <Route exact path='/reportFires' component={ReportFires}/>

      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  storeCurrentFireData: (cleanedCurrentFireData) => dispatch(storeCurrentFireData(cleanedCurrentFireData))
})

export default withRouter(connect(null, mapDispatchToProps)(App));