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

import CloseModalButton from '../close_modal_button/close_modal_button';

const mapStateToProps = (state, {params}) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  jobFeedbackModalIsOpen: state.modals.jobFeedbackModal,
  job: state.jobDetail,
  worker: state.workerDetail
});

const mapDispatchToProps = dispatch => ({
  closeJobFeedbackForm: () => dispatch(closeModal('jobFeedbackModal')),
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
      rating: "1",
      job_status: this.props.job.status,
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
          this.props.closeJobFeedbackForm();
          this.props.fetchJob(this.props.job.id);
        });
    } else {
      this.props.giveFeedback(this.state)
        .then(() => {
          this.props.resetErrors();
          this.props.closeJobFeedbackForm();
          this.props.fetchJob(this.props.job.id);
      });
    }
  }

  render() {
    const errors = errorsList(this.props);
    const rating = this.state.rating;
    const completion = this.state.job_status;

    // const ratingStars = ['one', 'two', 'three', 'four', 'five'].map((str, i) => {
    //   return (
    //       <input type="radio" className="rating-input" id={str} key={i}
    //         onChange={this.update('rating')} value={i + 1}  name="rating-score"
    //         defaultChecked={rating === {i}}>
    //       </input>
    //
    //   )
    // })
    return (
      <div className='form'>

        <CloseModalButton modalName={'jobFeedbackModal'} />

        <h2>Leave Feedback</h2>


        {(this.props.errors.length > 0) ? errors : null }

        <form onSubmit={this.handleSubmit} id='job-feedback-form'>

          <div className='fulfillment'>


          </div>

          <div className='rating-clarifier'>
            <h4>You give this job {rating} star{rating === "1" ? "" : "s"}</h4>
          </div>

          <div className='rating-stars'>

            <div className="stars">
            	<input
                type="radio"
                id="difficulty-5"
                defaultChecked={this.state.rating === "5"}
                onChange={this.update('rating')}
                value="5"
              />
            	<label htmlFor="difficulty-5"
                className={(this.state.rating==="5" ? "checked" : "")}
              >
            		<i className="fa fa-star"></i>
             		<i className="fa fa-star-o"></i>
            	</label>
            	<input
                type="radio"
                id="difficulty-4"
                defaultChecked={this.state.rating === "4"}
                onChange={this.update('rating')}
                value="4"
              />
            	<label htmlFor="difficulty-4"
                className={(this.state.rating==="4" ? "checked" : "")}
              >
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star-o"></i>
              </label>
            	<input
                type="radio"
                id="difficulty-3"
                defaultChecked={this.state.rating === "3"}
                onChange={this.update('rating')}
                value="3"
              />
            	<label htmlFor="difficulty-3"
                className={(this.state.rating==="3" ? "checked" : "")}
              >
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star-o"></i>
              </label>
            	<input
                type="radio"
                id="difficulty-2"
                defaultChecked={this.state.rating === "2"}
                onChange={this.update('rating')}
                value="2"
              />
            	<label htmlFor="difficulty-2"
                className={(this.state.rating==="2" ? "checked" : "")}
              >
              	 <i className="fa fa-star"></i>
                 <i className="fa fa-star-o"></i>
              </label>
            	<input
                type="radio"
                id="difficulty-1"
                defaultChecked={this.state.rating === "1"}
                onChange={this.update('rating')}
                value="1"
              />
            	<label htmlFor="difficulty-1"
                className={(this.state.rating==="1" ? "checked" : "")}
              >
              	 <i className="fa fa-star"></i>
              </label>
            </div>

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
              value={this.state.body}
              onChange={this.update('body')}
              placeholder=" "
            />
            <label htmlFor='body'>Review Comment</label>
          </div>

          <div className="completion-checkboxes">

            <h5>Please indicate whether or not {this.props.worker.username} did the job:</h5>
            <div className='completed-input'>
              <input type="radio" className="rad" id="completed"
                onChange={this.update('job_status')} value="fulfilled"
                checked={completion === "fulfilled"}
                />
              <label htmlFor='completed'>Yes</label>
            </div>

            <div className='completed-input'>
              <input type="radio" className="rad" id="incomplete"
                onChange={this.update('job_status')} value="unfulfilled"
                checked={completion === "unfulfilled"}
                />
              <label htmlFor='incomplete'>No</label>
            </div>

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
