import React, {Component} from 'react';

class RandomBadge extends Component {

  render() {
    let badgeArray = this.props.badgeArray;
    let length = badgeArray.length;
    function getRandomNumber(length) {
      return Math.floor(Math.random() * (length));
    }
    let badge1 = badgeArray[getRandomNumber(length)];
    console.log(badge1);
    return (
      <div>
        <h1>Activity: {badge1.name}</h1>
        <img src={badge1.imageUrl}></img>
        <h1></h1>
      </div>
    );
  }

}

export default RandomBadge;
