import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { smallModalStyles, errorsList } from '../../util/form_util';

import merge from 'lodash/merge';

class JobFeedbackModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge(({
      user_id: this.props.currentUser.id,
      job_id: this.props.job.id,
      body: "",
      rating: "",
      job_status: this.props.job.status
    }), this.props.job.review);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal() {
    this.props.resetErrors();
    this.props.closeModal('jobFeedbackModal');
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.job.review) {
      this.props.updateFeedback(this.state)
        .then(() => {
          this.props.resetErrors();
          this.props.closeModal('jobFeedbackModal');
        });
    } else {
      this.props.giveFeedback(this.state)
      .then(() => {
        this.props.resetErrors();
        this.props.closeModal('jobFeedbackModal');
      });
    }
  }

  render() {
    console.log(this.props.jobFeedbackModalIsOpen);
    const errors = errorsList(this.props);
    return (
      <div>
        <Modal
          className='modal-wrapper'
          isOpen={this.props.jobFeedbackModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal.bind(this)}
          style={smallModalStyles}
          contentLabel="Feedback Form"
        >
          <div className='form'>

            <h2>Agree to Accept</h2>

            {(this.props.errors.length > 0) ? errors : null }

            <form onSubmit={this.handleSubmit} id='job-feedback-form'>

              <div className='number-input'>
                <input type="number"
                  id="rating"
                  onChange={this.update('rating')}
                  value={this.state.rating}
                  min="1"
                  max="5"
                  step="1"
                />
              <label for='rating'>Wage ($/hr)</label>
              </div>

              <div className='textarea-input'>
                <textarea id="body"
                  onChange={this.update('body')}
                  value={this.props.body}
                  placeholder=" "
                />
              <label for='body'>Review Comment</label>
              </div>

              <button type="submit">Leave Review</button>

            </form>
          </div>

        </Modal>
      </div>
    );
  }
}

export default JobFeedbackModal;
