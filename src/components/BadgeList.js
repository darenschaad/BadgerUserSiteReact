import React, { Component } from 'react';
import Badge from './Badge';

class BadgeList extends Component {
  render(){
    const badgeListMap = this.props.badgeArray.map((badge, idx) => {
      return(
        <div key={idx}>
          <ul>
            <li onClick={() => this.props.goToBadge(badge)}>
              <a>
                {badge.name}
              </a>
            </li>
          </ul>
        </div>
      );
    });

    if (Object.getOwnPropertyNames(this.props.currentBadge).length == 0) {
      return(
        <div>
          {badgeListMap}
        </div>
      );
    } else {
      return(
        <div>
          <Badge currentBadge={this.props.currentBadge} />
        </div>
      );
    }
  }
}

export default BadgeList;
