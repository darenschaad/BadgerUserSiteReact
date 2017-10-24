import React, {Component} from 'react';
import BadgeTile from './BadgeTile'

class BookmarkedBadges extends Component {
  constructor(params){
    super();
    this.state={
        "bookmarkedBadgeArray" : []
    }

    this.goToBadge = this.goToBadge.bind(this);
  }

  componentDidMount() {
    let bookmarkedBadgeArray = [];
    let bookmarkedbadgeKeys = Object.keys(this.props.bookmarkedBadges);
    let badgeKeys = Object.keys(this.props.badges);

    for (let j = 0; j < bookmarkedbadgeKeys.length; j++) {
      for (let i = 0; i < badgeKeys.length; i++) {
        if (bookmarkedbadgeKeys[j] === badgeKeys[i]) {
          bookmarkedBadgeArray.push(this.props.badges[i]);
          break;
        }
      }
    }
    this.setState({
      "bookmarkedBadgeArray" : bookmarkedBadgeArray
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
        <h1>My Bookmarked Badges</h1>
          {this.state.bookmarkedBadgeArray.map((badge, idx) => {
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

BookmarkedBadges.contextTypes = {
  router: React.PropTypes.object
}

export default BookmarkedBadges;
