export default class MarkerManager {
  constructor(map, handleClick) {
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
    let marker;
    if (job.status === 'pending') {
      marker = new google.maps.Marker({
        position: coords,
        map: this.map,
        jobId: job.id,
        title: job.job_type + ", " + dateString,
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%24|00FF00'
      });
    } else if (job.status === 'designated') {
      marker = new google.maps.Marker({
        position: coords,
        map: this.map,
        jobId: job.id,
        title: job.job_type + ", " + dateString,
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=J|FFFF00'
      });
    } else if (job.status === 'fulfilled') {
      marker = new google.maps.Marker({
        position: coords,
        map: this.map,
        jobId: job.id,
        title: job.job_type + ", " + dateString,
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=F|FF00FF'
      });
    } else if (job.status === 'unfulfilled') {
      marker = new google.maps.Marker({
        position: coords,
        map: this.map,
        jobId: job.id,
        title: job.job_type + ", " + dateString,
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=U|FF0000'
      });
    }
    marker.addListener('click', () => this.handleClick(job));
    this.markers.push(marker);
  }
}
