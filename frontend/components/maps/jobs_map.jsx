import React from 'react';

import { withRouter } from 'react-router';

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
  }

  componentDidMount() {
    let mapOptions = {
      center: { lat: 35.7, lng: -92.8 },
      zoom: 3
    }

    navigator.geolocation.getCurrentPosition((loc) => {
      if (loc.coords.latitude) {
        this.map.setCenter(new google.maps.LatLng(loc.coords.latitude,
                                                loc.coords.longitude));
        this.addHomeMarker(loc.coords.latitude, loc.coords.longitude);
      }
    });

    this.map = new google.maps.Map(this.mapNode, mapOptions)

    google.maps.event.addListener(this.map, 'idle', () => {
      const mapBounds = this.map.getBounds();
      const northEast = mapBounds.getNorthEast();
      const southWest = mapBounds.getSouthWest();
      const locFilter = {
        bounds: {
          northEast: getCoordsObj(northEast),
          southWest: getCoordsObj(southWest)
        }
      }


      this.props.fetchJobs(locFilter);
    })
    this.markerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.markerManager.updateMarkers(this.props.jobsArray);
  }

  componentWillReceiveProps(newProps) {
    this.markerManager.updateMarkers(newProps.jobsArray);
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
    this.map.setZoom(13);
  }

  handleMarkerClick(job) {
    this.props.router.push(`jobs/${job.id}`)
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

export default withRouter(JobsMap);
