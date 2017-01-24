import React, {Component} from 'react';

class RandomBadge extends Component {
  constructor() {
    super();
    this.state = {
      rand1 : 0,
      rand2 : 1,
      rand3 : 2,
      // windowWidth: window.innerWidth
    }
  }

  componentDidMount() {
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
    let rand3 = getRandomNumber(length);
    while (rand1 === rand3 || rand2 === rand3) {
      rand3 = getRandomNumber(length);
    }
    this.setState({ rand1 : rand1, rand2 : rand2, rand3 : rand3})
  }

  // window.onresize = function(event) {
  //   this.setState({ windowWidth: window.innerWidth })
  //   // return window.innerWidth;
  // };

  render() {
    let badgeArray = this.props.badgeArray;
    let rand1 = this.state.rand1;
    let rand2 = this.state.rand2;
    let rand3 = this.state.rand3;


    let badge1 = badgeArray[rand1];
    let badge2 = badgeArray[rand2];
    let badge3 = badgeArray[rand3];

    const categories = [0,100,200,300,400,500,600,700,800,900];

    let index1 = categories.indexOf(badge1.category);
    let index2 = categories.indexOf(badge2.category);
    let index3 = categories.indexOf(badge3.category);
    const categoryNames = ["000 - GENERAL KNOWLEDGE", "100 - PHILOSOPHY & PSYCHOLOGY", "200 - RELIGION", "300 - SOCIAL SCIENCE", "400 - LANGUAGES", "500 - SCIENCE", "600 - TECHNOLOGY", "700 - ARTS & RECREATION", "800 - LITERATURE", "900 - HISTORY & GEOGRAPHY"];
    const textColors = ["#4C4C4C", "#0079A5", "#66008D", "#4D782D", "#C97100", "#25895A", "#000073", "#988967", "#76193C", "#985721"];
    const backgroundColors = ["#989DA7", "#DCF0FF", "#D0C0D6", "#CEDFB0", "#EEC99A", "#9EBAAC", "#B5B5CA", "#FDE192", "#DBC2CC", "#D8C2A9"];
    const category1 = categoryNames[index1];
    const textColor1 = textColors[index1];
    const backgroundColor1 = backgroundColors[index1];

    const category2 = categoryNames[index2];
    const textColor2 = textColors[index2];
    const backgroundColor2 = backgroundColors[index2];

    const category3 = categoryNames[index3];
    const textColor3 = textColors[index3];
    const backgroundColor3 = backgroundColors[index3];

    let readMore1;
    let detailLength1 = badge1.description + "\n" + badge1.comments;

    if(detailLength1.length > 250) {
      readMore1 = (
        <span className="read-more">...</span>
      );
    }

    let readMore2;
    let detailLength2 = badge2.description + "\n" + badge2.comments;
    if(detailLength2.length > 250) {
      readMore2 = (
        <span className="read-more">...</span>
      );
    }

    let readMore3;
    let detailLength3 = badge3.description + "\n" + badge3.comments;
    if(detailLength3.length > 250) {
      readMore3 = (
        <span className="read-more">...</span>
      );
    }

    return (
      <div className="random-badge-div animated slideInUp">
        <h2>RANDOM BADGES</h2>
        <div className="break"></div>
        <div className="random-badge-div">
          <div className='badge-tile hover-hand random-badge-content' style={{backgroundColor : backgroundColor1}} onClick={() => this.props.goToBadge(badge1, this.props.searchValue)}>
            <div className="badge-tile-image-details">
              <img className='detail-image' src={badge1.imageUrl} alt={badge1.names}></img>
              <div className="badge-tile-details">
                <h1 style={{color: textColor1}}>{badge1.name}</h1>
                <span className="badge-tile-subtitle" style={{color: textColor1}}>To do: </span>
                <span className="badge-tile-description">{detailLength1.substring(0, 250)} {readMore1}</span>
                <br />
                <span className="badge-tile-subtitle" style={{color: textColor1}}>Proof: </span>
                <span className="badge-tile-description">{badge1.proof}</span>
              </div>
            </div>
            <h1 className="badge-tile-category" style={{color: textColor1}}>{category1}</h1>
          </div>

          <div className='badge-tile hover-hand random-badge-content' style={{backgroundColor : backgroundColor2}} onClick={() => this.props.goToBadge(badge2, this.props.searchValue)}>
            <div className="badge-tile-image-details">
              <img className='detail-image' src={badge2.imageUrl} alt={badge2.names}></img>
              <div className="badge-tile-details">
                <h1 style={{color: textColor2}}>{badge2.name}</h1>
                <span className="badge-tile-subtitle" style={{color: textColor2}}>To do: </span>
                <span className="badge-tile-description">{detailLength2.substring(0, 250)} {readMore2}</span>
                <br />
                <span className="badge-tile-subtitle" style={{color: textColor2}}>Proof: </span>
                <span className="badge-tile-description">{badge2.proof}</span>
              </div>
            </div>
            <h1 className="badge-tile-category" style={{color: textColor2}}>{category2}</h1>
          </div>

          <div className='badge-tile hover-hand random-badge-content' style={{backgroundColor : backgroundColor3}} onClick={() => this.props.goToBadge(badge3, this.props.searchValue)}>
            <div className="badge-tile-image-details">
              <img className='detail-image' src={badge3.imageUrl} alt={badge3.names}></img>
              <div className="badge-tile-details">
                <h1 style={{color: textColor3}}>{badge3.name}</h1>
                <span className="badge-tile-subtitle" style={{color: textColor3}}>To do: </span>
                <span className="badge-tile-description">{detailLength3.substring(0, 250)} {readMore3}</span>
                <br />
                <span className="badge-tile-subtitle" style={{color: textColor3}}>Proof: </span>
                <span className="badge-tile-description">{badge3.proof}</span>
              </div>
            </div>
            <h1 className="badge-tile-category" style={{color: textColor3}}>{category3}</h1>
          </div>
        </div>
      </div>
    );
  }

}

export default RandomBadge;
