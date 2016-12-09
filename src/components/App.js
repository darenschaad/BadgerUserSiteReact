import React, { Component } from 'react';
import base from '../base';
// import OurCarousel from './OurCarousel';
import BadgeList from './BadgeList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      badges: { },
      badge: { },
      loading: true,
      currentBadge: { },
    };
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

  goToBadge(currentBadge){
    this.setState({
      badges: { },
      currentBadge: currentBadge,
    });
    localStorage.setItem(`badge`, JSON.stringify(currentBadge));
    this.context.router.transitionTo(`/badge/${currentBadge.pushId}`);
  }

  render() {
    if (!this.state.loading) {
      console.log(this.state.badges);
    }
    return (
      <div className="App">
        {
          //set state to true so the page then loads
          this.state.loading === true ? <h3> LOADING... </h3> :
          <div>

            <BadgeList
              badgeArray={this.state.badges}
              goToBadge={this.goToBadge.bind(this)}
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
