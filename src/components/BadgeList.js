import React, { Component } from 'react';
import Badge from './Badge';

class BadgeList extends Component {
  goToBadge(badge){
    console.log(badge.pushId);
  }

  render(){
    const badgeListMap = this.props.badgeArray.map((item, idx) => {
      return(
        <div key={idx}>
          <ul>
            <li onClick={() => this.goToBadge(item)}><a>{item.name}</a></li>
          </ul>
        </div>
      );
    });
    return(
      <div>
        <h1>Hello World</h1>
        {badgeListMap}
      </div>
    );

  }
}
export default BadgeList;
