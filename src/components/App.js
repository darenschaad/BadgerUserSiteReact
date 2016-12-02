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
            />
          </div>
        }
      </div>
    );
  }
}

export default App;
