import React, { Component } from 'react';
import { apiKey } from '../../api-key';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';


export class CurrentFires extends Component {
  
  // currentFireMarkers = this.props.currentFires.map(fire => {
  //   return 
  //     <Marker
  //       // title={'The marker`s title will appear as a fire.'}
  //       name={fire.name}
  //       position={{lat: fire.latitude, lng: fire.longitude }} 
  //     />
  //     })
    
    render() {
      console.log(this.props.currentFires);
    const initialCenter = {
      lat: 39,
      lng: -96.9
    }
    
    const style = {
      width: '100%',
      height: '100%'
    }

    // const fireMarkers = 
    
    return(
      <Map 
        style={style}
        google={this.props.google} 
        initialCenter={initialCenter}
        center={initialCenter}
        zoom= {5}
      >
      {/* {this.currentFireMarkers} */}
      
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

