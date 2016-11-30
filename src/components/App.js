import React, { Component } from 'react';
import base from '../base';

class App extends Component {
  constructor() {
    super();
    this.state = {
      badges: { },
    };
  }

  componentDidMount() {
    base.fetch('badges', {
      context:this,
      state: 'badges',
      asArray: true,
      then(data) {
        this.setState({badges:data});
        console.log(data);
        console.log(this.state);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
