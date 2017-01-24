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

  // componentDidMount(){
  //
  // }

 //  handleInputChange(event) {
 //   console.log(event.target.name);
 //   console.log(event.target.value);
 //   //using the event object and a computed property, grab state object property name from input/select's name property (i.e. 'searchValue' or 'optionValue') and set the state property equal to the value grabbed from the event object.
 //   this.setState({
 //     [event.target.name]: event.target.value,
 //     searching: true,
 //   });
 //   if(this.state.searchValue.length === 0) {
 //     this.setState({ searching: false })
 //   }
 // }

  //pass goToBadge the currentBadge parameter, which contains the object with all of the badge information
  goToBadge(currentBadge, currentSearchTerm, currentSearchState){
    //pass JSON string containing information from the badge object to local storage so that the browser can help carry that information to each badge's specific route
    localStorage.setItem(`badge`, JSON.stringify(currentBadge));
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
          <NavBar />
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
