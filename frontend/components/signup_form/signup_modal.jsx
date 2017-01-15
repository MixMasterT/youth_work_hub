import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import SignupFormContainer from './signup_form_container';

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
class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.props.closeModal('signupModal');
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.signupFormIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <SignupFormContainer />
        </Modal>
      </div>
    );
  }
}

export default SignupModal;
