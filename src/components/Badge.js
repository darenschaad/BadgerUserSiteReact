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
        <h1>{this.props.badges.name}</h1>
        <img style={imageStyle} src={this.props.badges.imageUrl}></img>
      </div>

    );
  }
}

export default Badge;
