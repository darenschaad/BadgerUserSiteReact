import React, { Component } from 'react';
import Badge from './Badge';

class BadgeList extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentBadge: { },
  //   }
  // }

  // goToBadge(badge){
  //   // const badgeId = badge.pushId;
  //   // this.context.router.transitionTo(`/badge/${badgeId}`);
  //   this.setState({
  //     currentBadge: badge
  //   });
  //   this.props.goToBadge(badge);
  // }

  render(){
    console.log(Object.getOwnPropertyNames(this.props.currentBadge).length);

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

    // return(
    //   <div>
    //     <h1>Hello World</h1>
    //     {BadgeDisplay}
    //   </div>
    // );

  }
}

BadgeList.contextTypes = {
  router: React.PropTypes.object
}

export default BadgeList;
