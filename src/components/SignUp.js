import React, {Component} from 'react';
import base from '../base';
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName : "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
  }
  signUp(e) {
    e.preventDefault();
    console.log(this.props.currentUser.uid);
    // var authHandler = function(error, user) {
      let uid = this.props.currentUser.uid;
      let newUser = {firstName:this.state.firstName, lastName:this.state.lastName, pushId:uid}
      console.log(newUser);
      base.post(`users/${uid}`, {
        data: newUser,
        then(err){
          if (!err){
            console.log(!err);
          }else {
            this.context.router.transitionTo(`/`);
          }
        }
      })
    // }
    //make call to Facebook API
    // base.authWithOAuthPopup('facebook', authHandler.bind(this), {scope: 'public_profile, email'});
  }


  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value})
  }
  render() {
    return(
      <div>
        <form onSubmit={this.signUp}>
          <label>
            First Name:
            <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange}></input>
          </label>
          <label>
            Last Name:
            <input type="text" value={this.state.lastName}  name="lastName" onChange={this.handleChange}></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default SignUp;
