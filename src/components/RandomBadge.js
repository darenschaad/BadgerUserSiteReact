import React, {Component} from 'react';

class RandomBadge extends Component {

  render() {
    let badgeArray = this.props.badgeArray;
    let length = badgeArray.length;
    function getRandomNumber(length) {
      return Math.floor(Math.random() * (length));
    }
    let rand1 = getRandomNumber(length);
    let rand2 = getRandomNumber(length);
    while (rand1 === rand2) {
      rand2 = getRandomNumber(length);
    }

    let badge1 = badgeArray[rand1];
    let badge2 = badgeArray[rand2];

    const categories = [0,100,200,300,400,500,600,700,800,900];

    let index1 = categories.indexOf(badge1.category);

    const categoryNames = ["000 - GENERAL KNOWLEDGE", "100 - PHILOSOPHY & PSYCHOLOGY", "200 - RELIGION", "300 - SOCIAL SCIENCE", "400 - LANGUAGES", "500 - SCIENCE", "600 - TECHNOLOGY", "700 - ARTS & RECREATION", "800 - LITERATURE", "900 - HISTORY & GEOGRAPHY"];
    const textColors = ["#4C4C4C", "#0079A5", "#66008D", "#4D782D", "#C97100", "#25895A", "#000073", "#988967", "#76193C", "#985721"];
    const backgroundColors = ["#989DA7", "#DCF0FF", "#D0C0D6", "#CEDFB0", "#EEC99A", "#9EBAAC", "#B5B5CA", "#FDE192", "#DBC2CC", "#D8C2A9"];

    return (
      <div>
        <h2>RANDOM BADGES</h2>
        <hr></hr>

        <div className='hover-hand' onClick={() => this.props.goToBadge(badge1)}>
          <h1>Activity: {badge1.name}</h1>
          <img className='detail-image' src={badge1.imageUrl} alt={badge1.names}></img>
          <h3>To do: {badge1.description} <br></br> {badge1.comments}</h3>
          <hr></hr>
          <h3>Proof: {badge1.proof}</h3>
        </div>

        <div className='hover-hand' onClick={() => this.props.goToBadge(badge2)}>
          <h1>Activity: {badge2.name}</h1>
          <img className='detail-image' src={badge2.imageUrl} alt={badge2.names}></img>
          <h3>To do: {badge2.description} <br></br> {badge2.comments}</h3>
          <hr></hr>
          <h3>Proof: {badge2.proof}</h3>
        </div>
      </div>
    );
  }

}

export default RandomBadge;
