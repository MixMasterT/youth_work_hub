import React from 'react'

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class LocationInput extends React.Component {
  constructor(props) {
    super(props);

    this.addMarker = this.addMarker.bind(this);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this.addMarker(event.latLng);
    });
  }

  addMarker(coords) {
    console.log(coords);
    const marker = new google.maps.Marker({
      position: coords,
      map: this.map,
      title: "Test"
    })
  }

  render() {

    return (
      <div className='map-wrapper'>
        <h1> TEST MAPS </h1>
        <div className="map" ref={ map => this.mapNode = map }
             onClick ={ this.handleMapClick }
        ></div>
      </div>
    )
  }
}

export default LocationInput;
