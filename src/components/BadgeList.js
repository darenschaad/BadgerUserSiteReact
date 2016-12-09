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


    return(
      <div>
        {badgeListMap}
      </div>
    );
  }
}

export default BadgeList;
