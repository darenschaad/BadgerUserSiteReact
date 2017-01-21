import React, {Component} from 'react';
import Linkify from 'react-linkify';
import NavBar from './NavBar';

class Badge extends Component{
  constructor() {
    super();
    this.state = {
      height: 0,
    }
  }





  // componentDidMount() {
  //   let height = document.getElementsByClassName('badge-detail-page-tile')[0].clientHeight;
  //   this.setState({ height });
  // }

  render() {

    function titleCase(str) {
     var splitStr = str.split(' ');
     for (var i = 0; i < splitStr.length; i++) {
         // You do not need to check if i is larger than splitStr length, as your for does that for you
         // Assign it back to the array
         if (splitStr[i] !== "of" && splitStr[i] !== "for" && splitStr[i] !== "the" && splitStr[i] !== "in") {

           splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
         }
     }

     // Directly return the joined string
     return splitStr.join(' ');
    }
    const localStorageRef = localStorage.getItem('badge');

    const ourBadge = JSON.parse(localStorageRef);

    const categories = [0,100,200,300,400,500,600,700,800,900];

    const index = categories.indexOf(ourBadge.category);

    const categoryNames = ["000 - GENERAL KNOWLEDGE", "100 - PHILOSOPHY & PSYCHOLOGY", "200 - RELIGION", "300 - SOCIAL SCIENCE", "400 - LANGUAGES", "500 - SCIENCE", "600 - TECHNOLOGY", "700 - ARTS & RECREATION", "800 - LITERATURE", "900 - HISTORY & GEOGRAPHY"];

    const textColors = ["#4C4C4C", "#0079A5", "#66008D", "#4D782D", "#C97100", "#25895A", "#000073", "#988967", "#76193C", "#985721"];

    const backgroundColors = ["#989DA7", "#DCF0FF", "#D0C0D6", "#CEDFB0", "#EEC99A", "#9EBAAC", "#B5B5CA", "#FDE192", "#DBC2CC", "#D8C2A9"];

    const category = categoryNames[index];

    const textColor = textColors[index];

    const backgroundColor = backgroundColors[index];

    //split tags with space separation so you don't have one long string with no space
    const splitTags = titleCase(ourBadge.tags.split(',').join(', '));

    //grab the height set to state and place it inside string before pixels so that it can be used below in styles
    // const categoryHeight = `${this.state.height}px`;

    return(
      <div>
        <NavBar />
        <div
          className="badge-detail-page-tile"
          style={{backgroundColor: backgroundColor}}
        >
          <div className="category-div">
            <h1 style={{color: textColor}} className="category-name">{ category }</h1>
          </div>
          <div className="detail-body">
            <h1 style={{color: textColor}}>{ourBadge.name}</h1>
            <img className='detail-image' src={ourBadge.imageUrl} alt={ourBadge.name}></img>
            <Linkify properties={{target: '_blank'}}>
              <h3 style={{color: textColor}}>To do: {ourBadge.description}</h3>
              <h3 style={{color: textColor}}>{ourBadge.comments}</h3>
              <h3 style={{color: textColor}}>Proof: {ourBadge.proof}</h3>
            </Linkify>
            <h4 style={{color: textColor}}>Challenges: {ourBadge.challenges}</h4>
            <h4 style={{color: textColor}}>Creator: {ourBadge.creator}</h4>
            <h4 style={{color: textColor}}>Keywords: {splitTags}</h4>
          </div>
        </div>
      </div>

    );
  }
}

export default Badge;
