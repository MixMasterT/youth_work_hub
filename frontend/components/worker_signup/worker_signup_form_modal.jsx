import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import WorkerSignupForm from './worker_signup_form';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class WorkerSignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.closeModal('workerSignupModal');
  }


  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.workerSignupFormIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Worker Signup Form"
        >
          <WorkerSignupForm
            closeModal={this.props.closeModal}
            openModal={this.props.openModal}
            currentUser={this.props.currentUser}
            errors={this.props.errors}
            edit={this.props.edit}
            signup={this.props.signup}
            login={this.props.login}
          />
        </Modal>
      </div>
    );
  }
}

export default WorkerSignupModal;
