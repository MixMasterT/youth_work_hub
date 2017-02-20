export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = [];
    this.handleClick = handleClick;

    this._createJobMarker = this._createJobMarker.bind(this);
    this._jobsToAdd = this._jobsToAdd.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(jobs) {
    this.jobs = jobs;
    this._jobsToAdd().forEach(this._createJobMarker);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _markersToRemove() {
    const jobIds = this.jobs.map( job => job.id);
    return this.markers.filter( marker => !markerIds.includes(marker.jobId))
  }

  _jobsToAdd() {
    const currentJobs = this.markers.map( marker => marker.marker.jobId);
    return this.markers.filter( marker => !currentJobs.includes(marker.id))
  }

  _removeMarker(marker) {
    const i = this.markers.indexOf(marker);
    this.markers[i].setMap(null);
    this.markers.splice(i, 1);
  }

  _createJobMarker(job) {
    const coords = new google.maps.LatLng(job.lat, job.lng);
    const marker = new google.maps.Marker({
      position: coords,
      map: this.map,
      jobId: job.id,
      label: 'J'
    });
    marker.addListener('click', () => this.handleClick(job));
    this.markers.push(marker);
  }
}
