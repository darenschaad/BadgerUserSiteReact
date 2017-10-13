import React, {Component} from 'react';
import Loading from './Loading';

class ChallengeList extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.goToBadge = this.goToBadge.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
  }


  goToBadge(currentBadge){
    this.props.setCurrentBadgeId(currentBadge.pushId);
    //pass JSON string containing information from the badge object to local storage so that the browser can help carry that information to each badge's specific route
    // localStorage.setItem(`badge`, JSON.stringify(currentBadge));
    const pushId = currentBadge.pushId;
    // const urlIndex = currentBadge.index.substring(1);
    this.context.router.transitionTo(`/badge/${pushId}`);
  }

  handleChange(event) {
    this.context.router.transitionTo(`/challenges/${event.target.value}`);
  }

  render() {
    document.body.scrollTop = 0;

    if(this.props.loading) {
      return(
        <div>
          <Loading />
        </div>
      );
    }else {
      let url = window.location.href;
      let urlSplit = (url.split("challenges/"));
      let currentChallenge = urlSplit[1];
            
      try {

      } catch (e) {

      } finally {

      }
      const challenges = ['good-sport', 'kitchen-sciences', 'know-it-all', 'master-gardener', 'media-consumption', 'media-production', 'model-citizen', 'party-animal', 'professional-development', 'survival-skills', 'textiles'];

      const index = challenges.indexOf(currentChallenge);

      const divIndex = "challenge-list-index-" + currentChallenge;

      const textColors = ["#4C4C4C", "#0079A5", "#66008D", "#4D782D", "#C97100", "#25895A", "#000073", "#988967", "#76193C", "#985721", "#4C4C4C"];

      const textColor = textColors[index];

      let challengeBadgeCount = 0;

      let filteredByChallenge = this.props.badges.map(
        (badge, idx) => {
          if(badge.challenges.toLowerCase().replace(" ","-").includes(currentChallenge)){
            challengeBadgeCount++;
            return (
              <div className={divIndex}  key={idx} >
                <div className="category-list-div" onClick={() => this.goToBadge(badge)}>
                  <img className='category-list-image' src={badge.imageUrl} alt={badge.name}></img>
                  <h4 className="category-list-text" style={{color: textColor}}>{badge.name}</h4>
                </div>
              </div>
            );
          }
          return filteredByChallenge;
        }
      );
      return(
        <div>
          <select value={currentChallenge} onChange={this.handleChange} className="category-list-category-title">
            <option value="000">000 - GENERAL KNOWLEDGE</option>
            <option value="100">100 - PHILOSOPHY & PSYCHOLOGY</option>
            <option value="200">200 - RELIGION</option>
            <option value="300">300 - SOCIAL SCIENCE</option>
            <option value="400">400 - LANGUAGES</option>
            <option value="500">500 - SCIENCE</option>
            <option value="600">600 - TECHNOLOGY</option>
            <option value="700">700 - ARTS & RECREATION</option>
            <option value="800">800 - LITERATURE</option>
            <option value="900">900 - HISTORY & GEOGRAPHY</option>
          </select>
          ({challengeBadgeCount})
          {filteredByChallenge}
        </div>
      )

    }
  }

}

ChallengeList.contextTypes = {
  router: React.PropTypes.object
}

export default ChallengeList;
