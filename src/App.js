import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import CurrentLocation from './Map'

export class MapContainer extends Component {
  state={
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
  render() {
    return (
      
        <CurrentLocation centerAroundCurrentLoaction google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={'current location'}/>
        <InfoWindow marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace}</h4>
          </div>
        </InfoWindow>
        </CurrentLocation>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE'
})(MapContainer);
