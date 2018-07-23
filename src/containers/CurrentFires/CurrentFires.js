import React, { Component } from 'react';
import { apiKey } from '../../api-key';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';


export class CurrentFires extends Component {
  
  render() {
    const currentFireMarkers = this.props.currentFires.map(fire => {
      return <Marker
          title={fire.name}
          name={fire.name}
          // icon={{
          //   url: "/path/to/custom_icon.png",
          //   anchor: new google.maps.Point(32,32),
          //   scaledSize: new google.maps.Size(64,64)
          // }}
          position={{lat: fire.latitude, lng: fire.longitude }}
          key={fire.name} 
        />
    })
      
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
      {currentFireMarkers}
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
   )
  }
}

const mapStateToProps = (state) => ({
  currentFires: state.currentFires
})

const googleWrapper = GoogleApiWrapper({ apiKey: apiKey })(CurrentFires)

export default connect(mapStateToProps)(googleWrapper);

