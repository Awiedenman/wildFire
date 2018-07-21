import React, { Component } from 'react';
import { apiKey } from '../../api-key';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import { connect } from 'react-redux';


export class CurrentFires extends Component {
  render() {
    const initialCenter = {
      lat: 39,
      lng: -96.9
    }
    
    const style = {
      width: '100%',
      height: '100%'
    }
    
    return(
      <Map 
        style={style}
        google={this.props.google} 
        initialCenter={initialCenter}
        center={initialCenter}
        zoom= {5}
      >
      <Marker 
        position={initialCenter}
        name={'Current location'} /> 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
   )
  }
}

export default GoogleApiWrapper({ apiKey: apiKey })(CurrentFires);
// export default connect(mapStateToProps)(CurrentFires);
