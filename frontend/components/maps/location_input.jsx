import React from 'react'

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class LocationInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: null
    }

    this.addMarker = this.addMarker.bind(this);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    google.maps.event.addListener(this.map, 'click', event => {
      this.addMarker(event.latLng);
    });
  }

  addMarker(coords) {
    console.log(coords);
    if (this.state.marker) { this.state.marker.setMap(null); }
    const marker = new google.maps.Marker({
      position: coords,
      map: this.map,
      title: this.props.markerTitle
    })
    this.setState({ marker })
    this.props.onMapClick(getCoordsObj(coords))
  }

  render() {
    return (
      <div className='map-wrapper'>
        <div className="map" ref={ map => this.mapNode = map }></div>
      </div>
    )
  }
}

export default LocationInput;
