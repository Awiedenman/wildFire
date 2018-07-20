import React, { Component } from 'react';
import { apiKey } from '../../api-key';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class CurrentFireMapContainer extends Component {
  render() {
    const location = {
      lat: 39,
      lng: -104.9
    }
    
    const style = {
      width: '100%',
      height: '100%'
    }
    
    return(
      <Map 
        style={style}
        google={this.props.google} 
        initialcenter={location}
      >
      <Marker 
        position={location}
        zoom= {7}
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

export default GoogleApiWrapper({ apiKey: apiKey })(CurrentFireMapContainer);