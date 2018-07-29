import React, { Component } from 'react';
import { apiKey } from '../../api-key';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
// !import { MarkerClusterer} from 'js-marker-clusterer'

import './CurrentFires.css';


export class CurrentFires extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    // debugger;
    const currentFireMarkers = this.props.currentFires.map(fire => {
      return <Marker
      google={this.props.google}
      title={fire.name}
      name={fire.name}
      acresBurned={fire.acresBurned}
      lastUpdate={fire.lastUpdate}
      // icon={{url: "../../images/fire.svg",
      //   anchor: new google.maps.Point(32,32),
      //   scaledSize: new google.maps.Size(64,64)
          // }}
          onClick={this.onMarkerClick}
          position={{lat: fire.latitude, lng: fire.longitude }}
          key={fire.name} 
        />
      // !const markerCluster = new MarkerClusterer(map, currentFireMarkers, {imagePath: '../../images/fire.svg'});

    })
      // debugger;
    const initialCenter = {
      lat: 45,
      lng: -75
    }
    
    // const style = {
    //   width: '100%',
    //   height: '100%'
    // }
    
    return(
      <div className='map'>
        <Map 
          google={this.props.google} 
          // style={style}
          initialCenter={initialCenter}
          center = {{
            lat: this.state.selectedPlace.latitude,
            lng: this.state.selectedPlace.longitude
          }}
          zoom= {3.4}
          onClick={this.onMapClicked}
        >
        {currentFireMarkers}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
              <h3>Current Burn: {this.state.selectedPlace.acresBurned}</h3>
              <h3>Last updated on {this.state.selectedPlace.lastUpdate}</h3>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  currentFires: state.currentFires
})

const googleWrapper = GoogleApiWrapper({ apiKey: apiKey })(CurrentFires)

export default connect(mapStateToProps)(googleWrapper);

