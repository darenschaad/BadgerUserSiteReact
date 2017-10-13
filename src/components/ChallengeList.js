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
    let url = window.location.href;
    var urlSplit = (url.split("challenges/"));
    var currentChallenge = urlSplit[1];
    console.log(currentChallenge);
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
      return(
        <div>
          <p> Hello</p>
        </div>
      )
    }
  }

}

ChallengeList.contextTypes = {
  router: React.PropTypes.object
}

export default ChallengeList;
