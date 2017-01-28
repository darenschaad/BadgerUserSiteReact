import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import App from './components/App';
import { BrowserRouter, Match, Miss, browserHistory } from '../node_modules/react-router/index';
import Badge from './components/Badge';
import Categories from './components/Categories';
import CategoryList from './components/CategoryList';
import Challenges from './components/Challenges'
import NotFound from './components/NotFound';
import base from './base';

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
    }
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount(){
    //after component mounts, sync with Firebase database and set the badges list equal to this.state.badges empty object
    localStorage.setItem(`searchBy`, "");

    //after component mounts, sync with Firebase database and set the badges list equal to this.state.badges empty object
    this.ref = base.syncState(`/tags`, {
      context: this,
      state: "tags",
      assArray: true
    })

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

  displayUser(user) {
    this.setState({ authenticated: true, currentUser: user.user});
    localStorage.setItem('userId', this.state.currentUser.uid);
  }

  displayLoginError(error) {
    alert("There was an error accessing Facebook: " + error.message);
  }

  logIn() {
    //call the methods that show the error or the
    var authHandler = function(error, user) {
      if(error) this.displayLoginError(error);
      this.displayUser(user);
    }
    //make call to Facebook API
    base.authWithOAuthPopup('facebook', authHandler.bind(this), {scope: 'public_profile, email'});
  }

  logOut() {
    //signs out currently logged in user
    base.unauth()
    this.setState({ authenticated: false, currentUser: { }});
    localStorage.setItem('userId', '');
  }

  render() {
    return(
      <div>
        <BrowserRouter history={browserHistory}>
          <div>
            <Match
              exactly
              pattern="/"
              component={() => (
                <App
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
              pattern="/categories"
              component={() => (
                <Categories
                  badges={this.state.badges}
                  tags={this.state.tags}
                  loading={this.state.loading}
                 />
              )}
            />

            <Match
              pattern="/categories/:categoryId"
              component={() => (
                <CategoryList
                  badges={this.state.badges}
                  tags={this.state.tags}
                  loading={this.state.loading} />
              )}
            />

            <Match exactly pattern="/about" component={About} />

            <Match exactly pattern="/challenges" component={Challenges} />

            <Match pattern="/badge/:pushId" component={Badge} />

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
