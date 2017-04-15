import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import App from './components/App';
import { BrowserRouter, Match, Miss, browserHistory } from './react-router/index';
import Badge from './components/Badge';
import Categories from './components/Categories';
import CategoryList from './components/CategoryList';
import Challenges from './components/Challenges'
import NotFound from './components/NotFound';
import base from './base';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import BookmarkedBadges from './components/BookmarkedBadges';

import './styles/App.scss';
import './styles/animate.css';

class Root extends Component {
  constructor() {
    super();
    this.state = {
      badges: { },
      tags: [ ],
      loading: true,
      authenticated: false,
      currentUser: { },
      bookmarkedBadges: { }
    }
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.getUser = this.getUser.bind(this);
    this.signUp = this.signUp.bind(this);
    this.setCurrentBadgeId = this.setCurrentBadgeId.bind(this);
    this.getBadgeById = this.getBadgeById.bind(this);
    this.isBadgeBookmarked = this.isBadgeBookmarked.bind(this);
  }

  componentDidMount(){
    //after component mounts, sync with Firebase database and set the badges list equal to this.state.badges empty object
    localStorage.setItem(`searchBy`, "");

    let uId = localStorage.getItem("userId");
    if (uId !== "") {
      this.setState({ authenticated: false });
    }

    if (!this.state.currentUser.uid) {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser) {
        this.setState({currentUser: currentUser, authenticated: true});
      }
    }
    //after component mounts, sync with Firebase database and set the badges list equal to this.state.badges empty object
    this.ref = base.syncState(`/tags`, {
      context: this,
      state: "tags",
      asArray: true
    })

    if(uId !== "") {
      this.ref = base.syncState(`/bookmarkedBadges/${uId}`, {
        context: this,
        state: "bookmarkedBadges"
      });
    }

    this.ref = base.syncState(`/badges`, {
      context: this,
      state: "badges",
      asArray: true,

      //setState loading to false so that everything renders once Firebase has been synced — thus loading is no longer true
      then() {
        this.setState({ loading: false })
      }
    });
  }

  getBadgeById(badgeId) {
    var component = this;
    var refresh = setInterval(function() {
      if(!component.state.loading) {
        var currentBadge = component.state.badges[badgeId];
        component.setState({currentBadgeId: currentBadge.pushId});
        clearInterval(refresh);
      }
    }, 500);
  }

  setCurrentBadgeId(badgeId) {
    this.setState({currentBadgeId : badgeId});
  }

  displayUser(user) {
    let userObject = { uid:user.user.uid, userPhoto:user.user.photoURL }
    let userJSON = JSON.stringify(userObject);
    // console.log(user);
    localStorage.setItem('currentUser', userJSON);
    this.setState({ authenticated: true, currentUser: userObject});

  }

  displayLoginError(error) {
    alert("There was an error accessing Facebook: " + error.message);
  }

  getUser(uid) {
    base.fetch(`users/${uid}`,{
      context:this,
      then(data){
        return data;
      }
    });
  }

  signUp(user) {
    // var authHandler = function(error, user) {
    let uid = user.user.uid;
    let name = user.user.displayName;
    let photoURL = user.user.photoURL;
    let newUser = {name:name, photoURL:photoURL, pushId:uid};
    base.post(`users/${uid}`, {
      data: newUser,
      then(err){
        if (!err){
          console.log(!err);
        }else {
          this.context.router.transitionTo(`/`);
        }
      }
    });
  }

  logIn() {
    //call the methods that show the error or the
    var authHandler = function(error, user) {
      if(error) this.displayLoginError(error);
      this.displayUser(user);
      console.log(user);
      let uid = user.user.uid;
      localStorage.setItem(`userId`, uid);
      let test = this.getUser(uid);
      if (test === undefined) {
        this.signUp(user);
      }
      location.reload();
    }
    //make call to Facebook API
    base.authWithOAuthPopup('facebook', authHandler.bind(this), {scope: 'public_profile, email'});

  }

  logOut() {
    //signs out currently logged in user
    base.unauth()
    this.setState({ authenticated: false, currentUser: { }});
    localStorage.setItem('currentUser', null);
    localStorage.setItem(`userId`, "");
    location.reload();
  }

  isBadgeBookmarked() {
    for(var key in this.state.bookmarkedBadges) {
      console.log(key);
      try {
        console.log(this.state.badges[this.state.currentBadgeId].pushId)
      } catch(e) {
        return false;
      }
      if(Number(key) === Number(this.state.badges[this.state.currentBadgeId].pushId)) {
        return true;
      }
    }
    return false;
  }

  render() {
    return(
      <div>
        <BrowserRouter history={browserHistory}>
          <div>
            <Match
              pattern="/"
              component={() => (
                <NavBar
                  badges={this.state.badges}
                  tags={this.state.tags}
                  loading={this.state.loading}
                  authenticated={this.state.authenticated}
                  logIn={this.logIn}
                  logOut={this.logOut}
                  currentUser={this.state.currentUser} />
              )}
            />
            <Match
              exactly
              pattern="/"
              component={() => (
                <App
                  badges={this.state.badges}
                  tags={this.state.tags}
                  loading={this.state.loading}
                  setCurrentBadgeId={this.setCurrentBadgeId}
                  />
              )}
            />

            <Match
              exactly
              pattern="/categories"
              component={() => (
                <Categories
                  authenticated={this.state.authenticated}
                  logIn={this.logIn}
                  logOut={this.logOut}
                  currentUser={this.state.currentUser}
                  badges={this.state.badges}
                  tags={this.state.tags}
                  loading={this.state.loading}
                  params={this.props.params}
                />
              )}
            />

            <Match
              pattern="/categories/:categoryId"
              component={() => (
                <CategoryList
                  authenticated={this.state.authenticated}
                  logIn={this.logIn}
                  logOut={this.logOut}
                  currentUser={this.state.currentUser}
                  badges={this.state.badges}
                  loading={this.state.loading}
                  setCurrentBadgeId={this.setCurrentBadgeId}/>
              )}
            />

            <Match exactly pattern="/about" component={About} />

            <Match exactly pattern="/challenges" component={Challenges} />

            <Match exactly pattern="/my-bookmarks"
              component={() => (
                <BookmarkedBadges
                  authenticated={this.state.authenticated}
                  bookmarkedBadges={this.state.bookmarkedBadges}
                  currentUser={this.state.currentUser}
                  loading={this.state.loading}
                  badges={this.state.badges}
                  setCurrentBadgeId={this.setCurrentBadgeId}/>
              )}
            />

            <Match
              pattern="/badge/:pushId"
              component={() => (
                <Badge
                  authenticated={this.state.authenticated}
                  bookmarked={this.isBadgeBookmarked()}
                  currentBadge={this.state.badges[this.state.currentBadgeId] || {}}
                  currentUser={this.state.currentUser}
                  getBadgeById={this.getBadgeById}
                  loading={this.state.loading}
                />
                )}
                />

            <Match
              pattern="/signup"
              component={() => (
                <SignUp
                  currentUser={this.state.currentUser} />
              )}
            />

            <Miss component={NotFound} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
