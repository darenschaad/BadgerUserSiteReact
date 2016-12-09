import React, {Component} from 'react';

class Badge extends Component{
  constructor() {
    super();
    // this.state = {
    //   currentBadge: this.props.currentBadge,
    // }
  }
  render() {
    const imageStyle = {
      height: 'auto',
      width: 'auto',
      maxWidth: '200px',
      maxHeight: '200px',
    }

    return(
      <div>
        <h1>{this.props.currentBadge.name}</h1>
        <img style={imageStyle} src={this.props.currentBadge.imageUrl}></img>
        <h3>{this.props.currentBadge.description}</h3>
      </div>

    );
  }
}

export default Badge;
