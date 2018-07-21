import React from 'react'
import { connect } from "react-redux";


const FireMarker = () => {

  const fireMarkers = this.props.currentFires.items.map(fire => {
    console.log(fire)
  })

  return (
    <div></div>
  )
}

const mapStateToProps = (state) => {
  currentFires : state.currentFires
}

export default connect(mapStateToProps)(FireMarker)