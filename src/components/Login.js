import React, {Component} from 'react';
// import base from '../base';

class Login extends Component {

  render() {
    if(!this.props.authenticated) {
      return (
          <li onClick={this.props.logIn}>Login/Sign Up</li>
      );
    } else {
      const user = this.props.currentUser;
      return(
        <span>
          <div id="user-navbar-info">
            <img id="user-photo" src={user.photoURL} role="presentation" />
            <li onClick={this.props.logOut}>Log Out</li>
          </div>
        </span>
      );
    }
  }

}

export default Login;

// <li onClick={this.props.logOut}>Logout</li>
