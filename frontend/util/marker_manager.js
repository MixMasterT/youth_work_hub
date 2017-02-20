export default class MarkerManager {
  constructor(map, handleClick, handleHover) {
    this.map = map;
    this.markers = [];
    this.jobs = [];
    this.handleClick = handleClick;

    this.updateMarkers = this.updateMarkers.bind(this);
    this._createJobMarker = this._createJobMarker.bind(this);
    this._jobsToAdd = this._jobsToAdd.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(jobs) {
    console.log("from Marker Manager");
    console.log(jobs);
    if(jobs) { this.jobs = jobs; }
    this._jobsToAdd().forEach(this._createJobMarker);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _markersToRemove() {
    const jobIds = this.jobs.map( job => job.id);
    return this.markers.filter( marker => !jobIds.includes(marker.jobId))
  }

  _jobsToAdd() {
    const currentJobs = this.markers.map( marker => marker.jobId);
    return this.jobs.filter( job => !currentJobs.includes(job.id))
  }

  _removeMarker(marker) {
    const i = this.markers.indexOf(marker);
    this.markers[i].setMap(null);
    this.markers.splice(i, 1);
  }

  _createJobMarker(job) {
    const date = new Date(job.start_time);
    const dateString = date.toDateString();
    const coords = new google.maps.LatLng(job.lat, job.lng);
    const marker = new google.maps.Marker({
      position: coords,
      map: this.map,
      jobId: job.id,
      label: 'J',
      title: job.job_type + ", " + dateString
    });
    marker.addListener('click', () => this.handleClick(job));
    marker.addListener('mouseover', () => this.handleHover(job));
    this.markers.push(marker);
  }
}
