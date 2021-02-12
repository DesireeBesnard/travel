import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '500px',
  height: '250px'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 47.248735403553226,
            lng: 6.02998086871693
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);