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
      homeMarker: null,
      jobsMarkers: []
    }

    this.addHomeMarker = this.addHomeMarker.bind(this);
    this.updateJobsMarker = this.updateJobsMarker.bind(this);
  }

  componentDidMount() {
    let mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    }

    //set current position for user orientation
    navigator.geolocation.getCurrentPosition((loc) => {
      if (loc.coords.latitude) {
        this.map.setCenter(new google.maps.LatLng(loc.coords.latitude,
                                                loc.coords.longitude));
        this.addHomeMarker(loc.coords.latitude, loc.coords.longitude);
      }
    });


    this.map = new google.maps.Map(this.mapNode, mapOptions);

    // google.maps.event.addListener(this.map, 'click', event => {
    //   this.addHomeMarker(event.latLng);
    // });

    this.markerManager = new MarkerManager(this.map);
  }

  addHomeMarker(lat, lng) {
    if (this.state.marker) { this.state.marker.setMap(null); }
    const color = "00GGFF";
    const pin = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + color);
    const image = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    const otherImage = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: { lat, lng },
      icon: image
    })
    this.setState({ homeMarker: otherImage })
  }

  updateJobsMarkers(jobsArray) {

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
