import React, {Component} from 'react';

class Badge extends Component{
  render() {
    return(
      <h1>{this.props.badges.name}</h1>
    );
  }
}

export default Badge;
