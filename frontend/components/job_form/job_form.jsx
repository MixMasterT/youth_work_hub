import React from 'react';
import merge from 'lodash/merge';

import LocationInput from '../maps/location_input';

class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({
      user_id: this.props.currentUser.id,
      description: "",
      job_type: "",
      address: "",
      duration: "",
      wage: "",
      start_time: "",
      lat: "",
      lng: "",
      cost: ""
    }, this.props.currentJob);

    this.geocoder = new google.maps.Geocoder();

    this.markerPos = null;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value}, () => {
        const wage = parseInt(this.state.wage);
        const duration = parseInt(this.state.duration);
        if (wage !== 0 && !isNaN(wage) &&
        duration !== 0 && !isNaN(duration)) {

          const cost = wage * duration;
          this.setState({ cost });
        }
      });
    };
  }

  setLocation(coords) {
    this.geocoder.geocode(({ latLng:coords }), (res, status) => {
      if (status === "OK") {
        this.setState({ address: res[0].formatted_address });
      }
    })

    this.setState({ lat: coords.lat, lng: coords.lng })
  }

  handleSubmit(e) {
    if(   this.state.description === ""||
          this.state.job_type === ""||
          this.state.address === ""||
          this.state.duration === ""||
          this.state.wage === ""||
          this.state.start_time === ""||
          this.state.cost === "") {
      this.props.frontendErrors(["form field can't be blank"]);
    } else {
      e.preventDefault();

      const state = this.state;
      if (this.props.currentJob) {
        this.props.editJob(this.state)
        .then(this.props.closeModal('jobFormModal'));
      } else {
        const id = this.props.currentUser.id;
        this.props.addJob(merge(this.state, { user_id: id}))
        .then(this.props.closeModal('jobFormModal'));
      }
    }

  }

  render() {
    const errors = this.props.errors;
    const errList = <ul className="error-list">
                      {errors.map((er) => <li key={er}>{er}</li>)}
                    </ul>;
    let text = this.props.currentJob ? "Update Job" : "Add Job";

    return (
      <div className='form'>

        <h2>{text}</h2>

        {(errors.length > 0) ? errList : null }

        <form onSubmit={this.handleSubmit} id='job-form'>

          <div className='textarea-input'>
            <textarea id="description"
              onChange={this.update('description')}
              value={this.props.description}
              placeholder=" "
            />
            <label htmlFor='description'>Describe Job</label>
          </div>

          <div className='select-input'>
            <select name="job_type"
                    onChange={this.update('job_type')}>
              <option>select one</option>
              <option value="art">art</option>
              <option value="baby-sitting">baby-sitting</option>
              <option value="cleaning">cleaning</option>
              <option value="computer work">computer work</option>
              <option value="gardening">gardening</option>
              <option value="kitchen work">kitchen work</option>
              <option value="lawn-mowing">lawn-mowing</option>
              <option value="music">music</option>
              <option value="pet-care">pet-care</option>
              <option value="tutoring">tutoring</option>
              <option value="yard-work">yard-work</option>
            </select>
          </div>

          <h3>Click on the map or type in address below</h3>

          <div className='location-input'>
            <LocationInput
              markerTitle='Job Location'
              onMapClick={this.setLocation}
              markerPos={this.markerPos}
            />
          </div>

          <div className='text-input'>
            <input type="text"
              id="address"
              placeholder=" "
              onChange={this.update('address')}
              value={this.state.address}
              />
            <label htmlFor='address'>Address</label>
          </div>

          <div className='date-input'>
            <input type="datetime-local"
              id="start-time"
              onChange={this.update('start_time')}
              value={this.state.start_time}
            />
            <label htmlFor='start-time'>Start time</label>
          </div>

          <div className='number-input'>
            <input type="number"
              id="duration"
              onChange={this.update('duration')}
              value={this.state.duration}
              min="1"
              step="1"
            />
            <label htmlFor='duration'>Duration (in hrs)</label>
          </div>

          <div className='number-input'>
            <input type="number"
              id="wage"
              onChange={this.update('wage')}
              value={this.state.wage}
              min="1"
              step="1"
            />
            <label htmlFor='wage'>Wage ($/hr)</label>
          </div>

          <div className='checkbox-input'>
            <div className='cost-amount'>
              <h3>total cost: ${this.state.cost}</h3>
            </div>

            <input type="checkbox"
              id="accept-cost"
              required
            />

            <label htmlFor='accept-cost'>Check to agree: you will pay
              this amount when the service is rendered.
            </label>
          </div>

          <button type="submit">{text}</button>

        </form>
      </div>
    );
  }
}

export default JobForm;
