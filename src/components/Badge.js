import React, {Component} from 'react';

class Badge extends Component{
  render() {
    const imageStyle = {
      height: 'auto',
      width: 'auto',
      maxWidth: '200px',
      maxHeight: '200px',
    }

    return(
      <div>
        <h1>We made It</h1>
        <h1>{this.props.badge.name}</h1>
        <img style={imageStyle} src={this.props.badge.imageUrl}></img>
        <h3>{this.props.badge.description}</h3>
      </div>

    );
  }
}

export default Badge;
