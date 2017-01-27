import React, { Component } from 'react';
// import base from '../base';
import BadgeSearch from './BadgeSearch';
import NavBar from './NavBar';
import Loading from './Loading';

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   badges: this.props.badges,
    //   tags: this.props.tags,
    //   loading: this.props.loading,
    // };
    this.goToBadge = this.goToBadge.bind(this);
  }

  //pass goToBadge the currentBadge parameter, which contains the object with all of the badge information
  goToBadge(currentBadge, currentSearchTerm, currentSearchState){
    //surface router with App.contextTypes below and then transition to a specific badge's route using the currentBadge object's pushId property
    localStorage.setItem(`searchBy`, currentSearchTerm);
    localStorage.setItem(`searchState`, currentSearchState);
    this.context.router.transitionTo(`/badge/${currentBadge.pushId}`);
  }

  render() {
    //once this.state.loading is true after Firebase is synced, the page will render
    if(this.props.loading) {
      return(
        <Loading />
      );
    } else {
      return (
        <div className="App">
          <NavBar
            authenticated={this.props.authenticated}
            logIn={this.props.logIn}
            currentUser={this.props.currentUser}
            logOut={this.props.logOut}
          />
          <div id="intro-section">
            <img id="intro-image" src={require('../img/badgers-name.png')} alt="badgers name logo"/>
          </div>
          <BadgeSearch
            badgeArray={this.props.badges}
            tagArray={this.props.tags}
            goToBadge={this.goToBadge}
          />
        </div>
      );
    }
  }
}

//surface the router using the App component's context property
App.contextTypes = {
  router: React.PropTypes.object
}

export default App;
