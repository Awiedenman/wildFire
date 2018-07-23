import React, { Component } from 'react';
import { apiKey } from '../../api-key';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';


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
    console.log('click on');
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
 
  onMapClicked = (props) => {
    console.log('click off');
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const currentFireMarkers = this.props.currentFires.map(fire => {
      return <Marker
          google={this.props.google}
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
    })
      
    const initialCenter = {
      lat: 39,
      lng: -96.9
    }
    
    const style = {
      width: '100%',
      height: '100%'
    }
    
    console.log(this.state.selectedPlace)
    return(
      <Map 
        google={this.props.google} 
        style={style}
        initialCenter={initialCenter}
        center = {{
          lat: this.state.selectedPlace.latitude,
          lng: this.state.selectedPlace.longitude
        }}
        zoom= {5}
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
    )
  }
}

const mapStateToProps = (state) => ({
  currentFires: state.currentFires
})

const googleWrapper = GoogleApiWrapper({ apiKey: apiKey })(CurrentFires)

export default connect(mapStateToProps)(googleWrapper);

