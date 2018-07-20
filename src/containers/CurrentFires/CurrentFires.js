import React, { Component } from 'react'
import { connect } from 'react-redux';
import { storeCurrentFireData } from '../../actions';
import { currentFireRequest } from '../../heplers/apiCalls';



class CurrentFires extends Component {

  async componentDidMount() {
    const currentFireData = await currentFireRequest();
    console.log(currentFireData)
    this.props.storeCurrentFireData(currentFireData)
  }

  render() {
    return (
      <div>
        {/* <Map/> */}
      </div>
    )
  }
}
export const mapDispatchToProps = dispatch => ({
  storeCurrentFireData: (currentFireData) => dispatch(storeCurrentFireData(currentFireData))
})

export default connect(null, mapDispatchToProps)(CurrentFires)