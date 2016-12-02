import React, { Component } from 'react';
import base from '../base';
import OurCarousel from './OurCarousel';
// import BadgeList from './BadgeList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      badges: { },
      loading: true,
    };
  }

  componentDidMount(){
    // base.fetch('badges', {
    //   context:this,
    //   state: 'badges',
    //   asArray: true
    // }).then(data => {
    //   console.log(data);
    //   this.setState({
    //     badges: data
    //   });
    // }).catch(error => {
    //   //handle error
    // });
    this.ref = base.syncState(`/badges`, {
      context: this,
      state: "badges",
      asArray: true,
      then() {
        this.setState({ loading: false })
      }
    });
  }

  // updateAppState(currentBadges) {
  //   this.setState({ badges: currentBadges });
  // }

  render() {
    if (!this.state.loading) {
      console.log(this.state.badges);
    }
    return (
      <div className="App">

        { this.state.loading === true ? <h3> LOADING... </h3> :
          <div>
            <OurCarousel />
          </div>
        }
      </div>
    );
  }
}

export default App;
