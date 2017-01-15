import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import LoginFormContainer from './login_form_container';

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
class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.props.closeModal('loginModal');
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.loginFormIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <LoginFormContainer />
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
