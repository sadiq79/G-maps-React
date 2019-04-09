import React, { Component } from 'react';
import { GoogleApiWrapper} from 'google-maps-react';
import CurrentLocation from './Map'

export class MapContainer extends Component {
  render() {
    return (
      <div>
        <CurrentLocation/>
      </div>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE'
})(MapContainer);
