import React, {Component} from 'react';

class Badge extends Component{
  // constructor() {
  //   super();
  //   this.state = {
  //     currentBadge: this.props.currentBadge,
  //   }
  // }
  render() {
    const localStorageRef = localStorage.getItem('badge');
    const ourBadge = JSON.parse(localStorageRef);
    // console.log(ourBadge.category)
    const categories = [0,100,200,300,400,500,600,700,800,900];
    const index = categories.indexOf(ourBadge.category);
    const categoryNames = ["000 - GENERAL KNOWLEDGE", "100 - PHILOSOPHY & PSYCHOLOGY", "200 - RELIGION", "300 - SOCIAL SCIENCE", "400 - LANGUAGES", "500 - SCIENCE", "600 - TECHNOLOGY", "700 - ARTS & RECREATION", "800 - LITERATURE", "900 - HISTORY & GEOGRAPHY"]
    const textColors = ["#4C4C4C", "#0079A5", "#66008D", "#4D782D", "#C97100", "#25895A", "#000073", "#988967", "#76193C", "#985721"];
    const backgroundColors = ["#989DA7", "#DCF0FF", "#D0C0D6", "#CEDFB0", "#EEC99A", "#9EBAAC", "#B5B5CA", "#FDE192", "#DBC2CC", "#D8C2A9"];
    const category = categoryNames[index];
    const textColor = textColors[index];
    const backgroundColor = backgroundColors[index];
    console.log(textColor);
    function setBackgroundColor (color){
      document.body.style.background = color;
    }

    return(
      <div>
        {setBackgroundColor(backgroundColor)}
        <h1 style={{color: textColor}} className="category-name">{ category }</h1>
        <h1 style={{color: textColor}}>{ourBadge.name}</h1>
        <img className='detail-image' src={ourBadge.imageUrl} alt={ourBadge.name}></img>
        <h3 style={{color: textColor}}>To do: {ourBadge.description}</h3>
        <h3 style={{color: textColor}}>{ourBadge.comments}</h3>
        <h3 style={{color: textColor}}>Proof: {ourBadge.proof}</h3>
        <h4 style={{color: textColor}}>Challenges: {ourBadge.challenges}</h4>
        <h4 style={{color: textColor}}>Tags: {ourBadge.tags}</h4>
      </div>

    );
  }
}

export default Badge;
