import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import LoginFormContainer from './login_form/login_form_container';
import SignupFormContainer from './signup_form/signup_form_container';

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
class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    // console.log(`props = `, this.props);

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.refs.subtitle.style.color = '#f00';
  // }

  closeModal() {
    console.log("close modal requested");
    console.log((this.props.closeModal));
    this.props.closeModal('loginForm');
  }



  render() {
    console.log(this.props);
    return (
      <div>
        <Modal
          isOpen={this.props.loginFormIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.props.closeModal}
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
