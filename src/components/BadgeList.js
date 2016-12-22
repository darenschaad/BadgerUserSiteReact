import React, { Component } from 'react';


class BadgeList extends Component {

  render(){
    let filteredByTagsBadges = this.props.badgeArray.filter(
      (badge) => {
        // let searchBy = "tags";
        //use computed property to grab the property from the user (select dropdown) that we should be filtering our list by
        return badge["tags"].toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1;
      }
    );
    let filteredByNameBadges = this.props.badgeArray.filter(
      (badge) => {
        let searchBy = "name";
        //use computed property to grab the property from the user (select dropdown) that we should be filtering our list by
        return badge["name"].toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1;
      }
    );

    return(
      <div>
        <h2>Tags:</h2>
        <hr></hr>
        {
          //map over filteredByTagsBadges to display list of everything from the database, or whatever the user is filtering with their search term.
          filteredByTagsBadges.map((badge, idx) => {
            return(
              <div key={idx}>
                <ul>
                  <li className='hover-hand' onClick={() => this.props.goToBadge(badge, this.props.searchValue)}>
                    <img className='list-image' src={badge.imageUrl} alt={badge.name}></img>
                    <a>
                    Activity: {badge.name} <br />
                    Creator: {badge.creator} <br />
                    Tags: {badge.tags}
                    </a>
                  </li>
                </ul>
              </div>
            );
          })
        }
        <h2>Activity:</h2>
        <hr></hr>
        {
          //map over filteredByTagsBadges to display list of everything from the database, or whatever the user is filtering with their search term.
          filteredByNameBadges.map((badge, idx) => {
            return(
              <div key={idx}>
                <ul>
                  <li className='hover-hand' onClick={() => this.props.goToBadge(badge)}>
                    <img className='list-image' src={badge.imageUrl} alt={badge.name}></img>
                    <a>
                    Activity: {badge.name} <br />
                    Creator: {badge.creator} <br />
                    Tags: {badge.tags}
                    </a>
                  </li>
                </ul>
              </div>
            );
          })
        }
      </div>
    );
  }
}

BadgeList.PropTypes = {
  badgeArray: React.PropTypes.array.isRequired,
  goToBadge: React.PropTypes.func.isRequired
};

export default BadgeList;
