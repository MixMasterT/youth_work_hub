import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import LoginFormContainer from '../login_form/login_form_container';
import SignupFormContainer from '../signup_form/signup_form_container';
/*
The app element allows you to specify the portion of your app that should be hidden (via aria-hidden)
to prevent assistive technologies such as screenreaders from reading content outside of the content of
your modal.  It can be specified in the following ways:

* element
Modal.setAppElement(appElement);

* query selector - uses the first element found if you pass in a class.
Modal.setAppElement('#your-app-element');

*/

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
class ModalManager extends React.Component {
  constructor(props) {
    super(props);

    // this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  //
  // openModal() {
  //   this.setState({modalIsOpen: true});
  // }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.props.closeModal('loginModal');
  }

  render() {
    console.log(this.props);
    return (
      <Modal
        isOpen={true}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <LoginFormContainer />
      </Modal>
    );
  }
}

export default ModalManager;
