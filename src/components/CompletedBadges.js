import React, {Component} from 'react';
import BadgeTile from './BadgeTile'

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
    let completedbadgeKeys = Object.keys(this.props.completedBadges);
    let badgeKeys = Object.keys(this.props.badges);

    for (let j = 0; j < completedbadgeKeys.length; j++) {
      for (let i = 0; i < badgeKeys.length; i++) {
        if (completedbadgeKeys[j] === badgeKeys[i]) {
          completedBadgeArray.push(this.props.badges[i]);
          break;
        }
      }
    }
    this.setState({
      "completedBadgeArray" : completedBadgeArray
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
        <h1>CompletedBadges</h1>
          {this.state.completedBadgeArray.map((badge, idx) => {
            return(
              <div key={idx}>
                <BadgeTile
                  badge={badge}
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
