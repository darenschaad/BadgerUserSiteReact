import React, { Component } from 'react';
import Badge from './Badge';

class BadgeList extends Component {
  render(){
    // console.log(this.props.badges);
    const badgeListMap = this.props.badgeArray.map((item, idx) => {
      return(
        <div key={idx}>
          <Badge
            badges={item}
          />
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
