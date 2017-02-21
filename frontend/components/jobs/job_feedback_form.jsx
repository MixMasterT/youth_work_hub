import React from 'react';

import { errorsList } from '../../util/form_util';

import merge from 'lodash/merge';

import { connect } from 'react-redux';

import { giveFeedback,
         updateFeedback,
         fetchJob } from '../../actions/job_actions';

import { closeModal } from '../../actions/modal_actions';

import { resetErrors, receiveErrors } from '../../actions/session_actions';

import JobFeedbackModal from './job_feedback_modal';

const mapStateToProps = (state, {params}) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  jobFeedbackModalIsOpen: state.modals.jobFeedbackModal,
  job: state.jobDetail
});

const mapDispatchToProps = dispatch => ({
  closeModal: (modalName) => dispatch(closeModal(modalName)),
  resetErrors: () => dispatch(resetErrors()),
  giveFeedback: (feedback) => dispatch(giveFeedback(feedback)),
  updateFeedback: (feedback) => dispatch(updateFeedback(feedback)),
  fetchJob: (id) => dispatch(fetchJob(id))
});

class JobFeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge(({
      user_id: this.props.currentUser ? this.props.currentUser.id : "",
      job_id: this.props.job.id,
      body: "",
      rating: "5",
      job_status: this.props.job.status
    }), this.props.job.review);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})}
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.job.review) {
      this.props.updateFeedback(this.state)
        .then(() => {
          this.props.resetErrors();
          this.props.closeModal('jobFeedbackModal');
          this.props.fetchJob(this.props.job.id);
        });
    } else {
      this.props.giveFeedback(this.state)
      .then(() => {
        this.props.resetErrors();
        this.props.closeModal('jobFeedbackModal');
        this.props.fetchJob(this.props.job.id);
      });
    }
  }

  render() {
    const errors = errorsList(this.props);
    const rating = this.state.rating;
    return (
      <div className='form'>

        <h2>Leave Feedback</h2>

        {(this.props.errors.length > 0) ? errors : null }

        <form onSubmit={this.handleSubmit} id='job-feedback-form'>

          <div className='fulfillment'>


          </div>

          <div className='rating-clarifier'>
            <h4>You are giving this job {rating} stars</h4>
          </div>

          <div className='rating-stars'>

            <input type="radio" className="rating-input" id='one'
              onChange={this.update('rating')} value="1"  name="rating-score"
              defaultChecked={rating === 1}>
            </input>
            <span></span>
            <label htmlFor="one" className="rating-star"></label>

            <input type="radio" className="rating-input" id='two'
              onChange={this.update('rating')} value="2" name="rating-score"
              defaultChecked={rating === 2}>
            </input>
            <span></span>
            <label htmlFor="two" className="rating-star"></label>

            <input type="radio" className="rating-input" id='three'
              onChange={this.update('rating')} value="3" name="rating-score"
              defaultChecked={rating === 3}>
            </input>
            <span></span>
            <label htmlFor='three' className="rating-star"></label>

            <input type="radio" className="rating-input" id='four'
              onChange={this.update('rating')} value="4"  name="rating-score"
              defaultChecked={rating === 4}>
            </input>
            <span></span>
            <label htmlFor='four' className="rating-star"></label>

            <input type="radio" className="rating-input" id='five'
              onChange={this.update('rating')} value="5" name="rating-score"
              defaultChecked={rating === 5 || rating === ""}>
            </input>
            <span></span>
            <label htmlFor='five' className="rating-star"></label>

          </div>


          <div className='textarea-input'>
            <textarea id="body"
              onChange={this.update('body')}
              placeholder=" "
            />
            <label htmlFor='body'>Review Comment</label>
          </div>

          <button type="submit">Leave Review</button>

        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobFeedbackForm);
