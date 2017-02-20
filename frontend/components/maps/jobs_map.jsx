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
      jobMarkers: []
    }

    this.addHomeMarker = this.addHomeMarker.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.updateJobsMarkers = this.updateJobsMarkers.bind(this);
  }

  componentDidMount() {
    console.log(`Inside componentDidMount, props = ${this.props}`);
    let mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    }

    console.log(this.props);

    navigator.geolocation.getCurrentPosition((loc) => {
      if (loc.coords.latitude) {
        this.map.setCenter(new google.maps.LatLng(loc.coords.latitude,
                                                loc.coords.longitude));
        this.addHomeMarker(loc.coords.latitude, loc.coords.longitude);
      }
    });

    this.map = new google.maps.Map(this.mapNode, mapOptions)

    google.maps.event.addListener(this.map, 'idle', () => {
      this.updateJobsMarkers(this.props.jobs, this.map)
    })
    this.markerManager = new MarkerManager(this.map);
  }

  addHomeMarker(lat, lng) {
    if (this.state.homeMarker) { this.state.homeMarker.setMap(null); }
    const image = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    const otherImage = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: { lat, lng },
      label: 'H',
      icon: image
    })
    this.setState({ homeMarker: otherImage })
  }

  addMarker(coords, title) {
    if (this.state.marker) { this.state.marker.setMap(null); }
    const marker = new google.maps.Marker({
      position: coords,
      map: this.map,
      title: title,
      label: 'J'
    })
    return marker;
  }

  updateJobsMarkers(allJobs, map) {
    const bounds = map.getBounds();
    const jobs = this.props.jobs;

    const newMarkers = [];
    Object.keys(allJobs).forEach((key) => {
      const job = jobs[key];
      if(job.lat) {
        const coords = {lat: job.lat, lng: job.lng}
        if(bounds.contains(coords)) {
          newMarkers.push(this.addMarker(coords, job.job_type));
        }
      }
    })
    this.state.jobMarkers.concat(newMarkers);
    console.log(this.state);
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
