import React from 'react';

import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class JobsMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: null
    }

    this.addMarker = this.addMarker.bind(this);
  }

  componentDidMount() {
    let mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    }

    navigator.geolocation.getCurrentPosition((loc) => {
      if (loc.coords.latitude) {
        this.map.setCenter(new google.maps.LatLng(loc.coords.latitude,
                                                loc.coords.longitude));
        this.addMarker(loc.coords.latitude, loc.coords.longitude);
      }
    });


    this.map = new google.maps.Map(this.mapNode, mapOptions);

    google.maps.event.addListener(this.map, 'click', event => {
      this.addMarker(event.latLng);
    });

    this.markerManager = new MarkerManager(this.map);
  }

  addMarker(lat, lng) {
    if (this.state.marker) { this.state.marker.setMap(null); }
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.map,
      title: this.props.markerTitle
    })
    this.setState({ marker })
  }

  render() {
    return (
      <div className='map-wrapper'>
        <h1> JOBS MAP </h1>
        <div className="map" ref={ map => this.mapNode = map }
        ></div>
      </div>
    )
  }
}

export default JobsMap;
