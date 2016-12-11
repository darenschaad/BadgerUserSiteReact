import React, { Component } from 'react';
import base from '../base';
// import OurCarousel from './OurCarousel';
import BadgeList from './BadgeList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      badges: { },
      loading: true,
      currentBadge: { },
    };
    this.goToBadge = this.goToBadge.bind(this);
  }

  componentDidMount(){
    this.ref = base.syncState(`/badges`, {
      context: this,
      state: "badges",
      asArray: true,
      then() {
        this.setState({ loading: false })
      }
    });
  }

  //pass goToBadge the currentBadge parameter, which contains the object with all of the badge information
  goToBadge(currentBadge){
    this.setState({
      badges: { },
      currentBadge: currentBadge,
    });
    //pass JSON string containing information from the badge object to local storage so that the browser can help carry that information to each badge's specific route
    localStorage.setItem(`badge`, JSON.stringify(currentBadge));
    //surface router with App.contextTypes below and then transition to a specific badge's route using the currentBadge object's pushId property
    this.context.router.transitionTo(`/badge/${currentBadge.pushId}`);
  }

  render() {
    return (
      <div className="App">
        {
          //set state to true so the page then loads
          this.state.loading === true ? <h3> LOADING... </h3> :
          <div>

            <BadgeList
              badgeArray={this.state.badges}
              goToBadge={this.goToBadge}
              currentBadge={this.state.currentBadge}
            />
          </div>
        }
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App;
