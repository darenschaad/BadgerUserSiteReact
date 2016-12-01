import React, { Component } from 'react';
import base from '../base';
import OurCarousel from './OurCarousel';
// import BadgeList from './BadgeList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      badges: { },
    };
  }

  componentWillMount(){
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
    this.ref = base.syncState(`badges`, {context: this, state: "badges", asArray: true});

  }

  render() {
    // console.log(this.state.badges);
    return (
      <div className="App">
        <h1>Hello</h1>
        <OurCarousel />
      </div>
    );
  }
}

export default App;
