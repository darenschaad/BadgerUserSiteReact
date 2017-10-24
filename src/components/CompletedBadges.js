import React, {Component} from 'react';
import BadgeTile from './BadgeTile';
import moment from 'moment';

class CompletedBadges extends Component {
  constructor(params){
    super();
    this.state={
        "completedBadgeArray" : []
    }

    this.goToBadge = this.goToBadge.bind(this);
  }

  componentDidMount() {
    let completedBadgeArray = [];
    let orderedCompletedBadgeArray = Object.values(this.props.completedBadges);
    orderedCompletedBadgeArray.sort(function(a,b){
      return (b.dateCompleted - a.dateCompleted);
    })
    let badgeKeys = Object.keys(this.props.badges);

    for (let j = 0; j < orderedCompletedBadgeArray.length; j++) {
      for (let i = 0; i < badgeKeys.length; i++) {
        if (orderedCompletedBadgeArray[j].pushId === Number(badgeKeys[i])){
          orderedCompletedBadgeArray[j].badge = this.props.badges[i];
          break;
        }
      }
    }

    this.setState({
      "completedBadgeArray" : orderedCompletedBadgeArray
    });
  }

  goToBadge(currentBadge, currentSearchTerm, currentSearchState){
    this.props.setCurrentBadgeId(currentBadge.pushId);
    //surface router with App.contextTypes below and then transition to a specific badge's route using the currentBadge object's pushId property
    localStorage.setItem(`searchBy`, currentSearchTerm);
    localStorage.setItem(`searchState`, currentSearchState);
    this.context.router.transitionTo(`/badge/${currentBadge.pushId}`);
  }

  render() {
    return(
      <div>
        <h1>My Completed Badges</h1>
          {this.state.completedBadgeArray.map((completedBadge, idx) => {
            console.log(completedBadge);
            return(
              <div key={idx}>
                <BadgeTile
                  badge={completedBadge.badge}
                  date={moment(completedBadge.dateCompleted).format('MMM Do YYYY')}
                  idx={idx}
                  searchValue={this.props.searchValue}
                  goToBadge={this.goToBadge}
                  searchState={this.props.searchState}
                />
              </div>
            );
          })}

      </div>
    );
  }
}

CompletedBadges.contextTypes = {
  router: React.PropTypes.object
}

export default CompletedBadges;
