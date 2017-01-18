import React from 'react';
import merge from 'lodash/merge';

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
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
      if (parseInt(this.state.wage) !== 0 && !isNaN(this.state.wage) &&
          parseInt(this.state.duration) !== 0 && !isNaN(this.state.duration)) {

        const cost = parseInt(this.state.wage) * parseInt(this.state.duration);
        this.setState({ cost });
        console.log(cost);
      }
    };
  }

  handleSubmit(e) {

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

  // activateCloudinaryWidget() {
  //   cloudinary.openUploadWidget({ cloud_name: 'youth-work-hub',
  //                                 upload_preset: 'profile_pic' },
  //                                 (error, result) => {
  //       this.setState({picture_url: result[0].secure_url});
  //     });
  // }

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
            />
            <label for='description'>Describe Job</label>
          </div>

          <div className='select-input'>
            <select name="job_type"
                    onChange={this.update('job_type')}>
              <option value="art">art</option>
              <option value="baby-sitting">baby-sitting</option>
              <option value="cleaning">cleaning</option>
              <option value="computer work">computer work</option>
              <option value="gardening">gardening</option>
              <option value="kitchen work">kitchen work</option>
              <option value="lawn-mowing">lawn-mowing</option>
              <option value="music">music</option>
              <option value="tutoring">tutoring</option>
              <option value="yard-work">yard-work</option>
            </select>
          </div>

          <div className='text-input'>
            <input type="text"
              id="address"
              onChange={this.update('address')}
              value={this.state.address}
              />
            <label for='address'>Address</label>
          </div>

          <div className='number-input'>
            <input type="number"
              id="duration"
              onChange={this.update('duration')}
              value={this.state.duration}
              min="1"
              step="1"
            />
            <label for='duration'>Duration (in hrs)</label>
          </div>

          <div className='number-input'>
            <input type="number"
              id="wage"
              onChange={this.update('wage')}
              value={this.state.wage}
              min="1"
              step="1"
            />
            <label for='wage'>Wage ($/hr)</label>
          </div>

          <div className='date-input'>
            <input type="datetime-local"
              id="start-time"
              onChange={this.update('start_time')}
              value={this.state.start_time}
            />
            <label for='start-time'>Start time</label>
          </div>

          <div className='checkbox-input'>
            <div className='cost-amount'>
              total cost: ${this.state.cost}
            </div>
            <input type="checkbox"
              id="accept-cost"
              required
              value={this.state.zip_code}
            />
            <label for='accept-cost'>Check to agree that you will pay
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
