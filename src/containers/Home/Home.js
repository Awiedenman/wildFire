import React, {Component} from 'react';
import CurrentFires from '../CurrentFires/CurrentFires';
import { fireDataCleaner } from '../../heplers/cleaner';
import { currentFireRequest } from '../../heplers/apiCalls/apiCalls';
import { storeCurrentFireData } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  async componentDidMount() {  
    await this.setState({isLoading: true}) 
    const currentFireData = await currentFireRequest();
    await this.setState({isLoading: false})
    const parsedFiresData = JSON.parse(currentFireData)
    const cleanedCurrentFireData = fireDataCleaner(parsedFiresData);
    this.props.storeCurrentFireData(cleanedCurrentFireData)
  }
  
  render() {
    return(
      <div>
        <CurrentFires/>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  storeCurrentFireData: (cleanedCurrentFireData) => dispatch(storeCurrentFireData(cleanedCurrentFireData))
})
// debugger

export default withRouter(connect(null, mapDispatchToProps)(Home));

