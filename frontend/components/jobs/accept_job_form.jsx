import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { largeModalStyles, errorsList } from '../../util/form_util';


class AcceptJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal() {
    this.props.resetErrors();
    this.props.closeModal('acceptJobModal');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.takeJob(this.props.job.id, this.props.currentUser.id)
      .then(() => {
        this.props.resetErrors();
        this.props.closeModal('acceptJobModal');
      }).fail((err) => this.props.receiveErrors(err));
  }

  render() {
    const errors = errorsList(this.props);
    return (
      <div>
        <Modal
          className='modal-wrapper'
          isOpen={this.props.acceptJobModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal.bind(this)}
          style={largeModalStyles}
          contentLabel="Job Form"
        >
          <div className='form'>

            <h2>Agree to Accept</h2>

            {(this.props.errors.length > 0) ? errors : null }

            <form onSubmit={this.handleSubmit} id='accept-job-form'>

              <div className='checkbox-input'>
                <div className='cost-check'>
                  total cost: ${this.props.job.cost}
                </div>
                <input type="checkbox"
                  id="accept-cost"
                  required
                />
              <label for='accept-cost'>Check to confirm that you will be
                there for this job on {this.props.job.date}.
                </label>
              </div>

              <button type="submit">Take Job</button>

            </form>
          </div>

        </Modal>
      </div>
    );
  }
}

export default AcceptJobForm;
