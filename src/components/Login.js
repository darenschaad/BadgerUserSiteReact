import React, {Component} from 'react';
import base from '../base';

class Login extends Component {

  render() {
    if(!this.props.authenticated) {
      return (
        <div>
          <button onClick={this.props.logIn}>Login</button>
        </div>
      );
    } else {
      const user = this.props.currentUser;
      return(
        <div>
          <button onClick={this.props.logOut}>Logout</button>
          <img src={user.photoURL} />
          <h5>{user.displayName}</h5>
        </div>
      );
    }
  }

}

export default Login;

// <img src={user.user.photoURL} />
// <h5>{user.user.displayName}</h5>
