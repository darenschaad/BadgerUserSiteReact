import React, {Component} from 'react';
// import base from '../base';

class Login extends Component {

  render() {
    if(!this.props.authenticated) {
      return (
          <button onClick={this.props.logIn}>Login</button>
      );
    } else {
      const user = this.props.currentUser;
      return(
        <span>
          <button onClick={this.props.logOut}>Logout</button>
          <img src={user.photoURL} role="presentation" />
          <h5>{user.displayName}</h5>
        </span>
      );
    }
  }

}

export default Login;
