// import React from 'react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import { apiKey } from '../../api-key';


// export const CurrentFireMap = () => {
//   const initialCenter = {
//       lat: 39,
//       lng: -96.9
//     }
    
//     const style = {
//       width: '100%',
//       height: '100%'
//     }
//   return(
//       <Map 
//         style={style}
//         google={this.props.google} 
//         initialCenter={initialCenter}
//         center={initialCenter}
//         zoom= {5}
//       >
//         <Marker 
//           position={initialCenter}
//           name={'Current location'} /> 
//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               {/* <h1>{this.state.selectedPlace.name}</h1> */}
//             </div>
//         </InfoWindow>
//       </Map>
//    )
// }
// export default GoogleApiWrapper({ apiKey: apiKey })(CurrentFireMap);