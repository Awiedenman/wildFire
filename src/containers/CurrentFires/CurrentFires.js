import React, { Component } from 'react';
import { apiKey } from '../../api-key';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import MarkerClusterer from 'node-js-marker-clusterer';

export class CurrentFires extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
 
  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const currentFireMarkers = this.props.currentFires.map(fire => {
      return <Marker
        google={this.props.google}
        title={fire.fire_name ? fire.fire_name : fire.last_name}
        name={<a href='https://www.google.com'>{`${fire.fire_name || fire.last_name}`}</a>}
        acresBurned={fire.acres_burned}
        lastUpdate={fire.last_update}
        // icon={{url: "../../images/fire.svg",
        // anchor: new google.maps.Point(32,32),
        // scaledSize: new google.maps.Size(64,64)
        // }}
        onClick={this.onMarkerClick}
        position={{lat: fire.latitude, lng: fire.longitude }}
        key={fire.fire_name + fire.latitude} 
      />;
    });

    const initialCenter = {
      lat: 45,
      lng: -105
    };

    // const mc = new MarkerClusterer(
    //   this.props.google.maps.Map(), // from new google.maps.Map();
    //   currentFireMarkers, // from const markers = locations.map()
    //   {
    //     styles: [{
    //       width: 40,
    //       height: 40,
    //       url: '/assets/icon-markercluster.png',
    //       textColor: 'white',
    //     }],
    //   },
    // );

    return (
      <div className='map'>
        <Map
          google={this.props.google} 
          style={this.props.style}
          initialCenter={initialCenter}
          center = {{
            lat: this.state.selectedPlace.latitude,
            lng: this.state.selectedPlace.longitude
          }}
          zoom= {3.4}
          onClick={this.onMapClicked}
          minZoom={3.4}
          maxZoom={14}
        >
          {this.props.isLoading ? 
            <img id='wolf' src={ require('../../images/no-fire.svg')}/> :
            currentFireMarkers}
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
    );
  }
}

export const mapStateToProps = (state) => ({
  currentFires: state.currentFires
});

const googleWrapper = GoogleApiWrapper({ apiKey: apiKey })(CurrentFires);

export default connect(mapStateToProps)(googleWrapper);

CurrentFires.propTypes = {
  currentFires: PropTypes.array,
  google: PropTypes.object,
  style: PropTypes.object,
  isLoading: PropTypes.bool
};