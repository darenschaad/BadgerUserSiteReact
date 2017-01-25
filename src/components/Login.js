import React, {Component} from 'react';
import base from '../base';

class Login extends Component {

  render() {
    if(!this.props.authenticated) {
      return (
        <div>
          <button onClick={this.props.login}>Login</button>
        </div>
      );
    } else {
      return(
        <div>
          <button>Logout</button>
        </div>
      );
    }
  }

}

export default Login;
