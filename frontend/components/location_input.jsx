import React from 'react'

class LocationInput extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {

    return (
      <div className='map-wrapper'>
        <h1> TEST MAPS </h1>
        <div className="map" ref={ map => this.mapNode = map }></div>
      </div>
    )
  }
}

export default LocationInput;
