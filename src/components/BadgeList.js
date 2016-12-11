import React, { Component } from 'react';
import Badge from './Badge';
import BadgeSearch from './BadgeSearch';

class BadgeList extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      optionValue: 'name',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
   this.setState({ [event.target.name]: event.target.value });
  }

  render(){
    let filteredBadges = this.props.badgeArray.filter(
      (badge) => {
        let searchBy = this.state.optionValue;
        return badge[searchBy].toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1;
      }
    );

    return(
      <div>
        <BadgeSearch
          searchValue={this.state.searchValue}
          optionValue={this.state.optionValue}
          handleInputChange={this.handleInputChange}
        />

        {filteredBadges.map((badge, idx) => {
          return(
            <div key={idx}>
              <ul>
                <li onClick={() => this.props.goToBadge(badge)}>
                  <a>
                    {badge.name} <br />
                    {badge.creator}
                  </a>
                </li>
              </ul>
            </div>
          );
        })}

      </div>
    );
  }
}

export default BadgeList;
