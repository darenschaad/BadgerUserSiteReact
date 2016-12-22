import React, { Component } from 'react';


class BadgeList extends Component {

  render(){
    let filteredBadges = this.props.badgeArray.filter(
      (badge) => {
        let searchBy = this.props.optionValue;
        //use computed property to grab the property from the user (select dropdown) that we should be filtering our list by
        return badge[searchBy].toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1;
      }
    );

    return(
      <div>
        
        <BadgeSearch
          searchValue={this.state.searchValue}
          optionValue={this.state.optionValue}
          handleInputChange={this.handleInputChange}
        />

        {
          //map over filteredBadges to display list of everything from the database, or whatever the user is filtering with their search term.
          filteredBadges.map((badge, idx) => {
            return(
              <div key={idx}>
                <ul>
                  <li className='hover-hand' onClick={() => this.props.goToBadge(badge)}>
                    <a>
                    Activity: {badge.name} <br />
                    Creator: {badge.creator}
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
