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
    this.goToBookmarkedBadges = this.goToBookmarkedBadges.bind(this);
    this.goToCompletedBadges = this.goToCompletedBadges.bind(this);
    this.goToBadgerProfiles = this.goToBadgerProfiles.bind(this);
  }

  componentDidMount() {

    let uid = this.props.currentUser.uid;
    console.log(uid);
  }

  signUp(e) {
    e.preventDefault();
    console.log(this.props.currentUser.uid);
    // var authHandler = function(error, user) {
      let uid = this.props.currentUser.uid;
      let photoURL = this.props.currentUser.userPhoto;
      let newName = this.state.firstName + " " + this.state.lastName;
      let newUser = {name:newName, photoURL:photoURL, pushId:uid}
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
  //   base.authWithOAuthPopup('facebook', authHandler.bind(this), {scope: 'public_profile, email'});
  }


  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value})
  }

  goToBookmarkedBadges() {
    this.context.router.transitionTo(`/my-bookmarks`);
  }
  goToCompletedBadges() {
    this.context.router.transitionTo(`/my-completed-badges`);
  }
  goToBadgerProfiles() {
    this.context.router.transitionTo('/badger-profiles');
  }
  render() {
    return(
      <div>
        <h1>{this.props.currentUser.userName}{"'"}s Badger Profile</h1>
        <hr></hr>
        <h3>Alter how your badger name appears to others:</h3>
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
        <button type="submit" className="searchButton" onClick={this.goToBookmarkedBadges}>Bookmarked Badges</button>
        <button type="submit" className="searchButton" onClick={this.goToCompletedBadges}>Completed Badges</button>
        <button type="submit" className="searchButton" onClick={this.goToBadgerProfiles}>Badger Profiles</button>
      </div>
    );
  }
}


SignUp.contextTypes = {
  router: React.PropTypes.object
}
export default SignUp;
