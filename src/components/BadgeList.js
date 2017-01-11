import React, { Component } from 'react';


class BadgeList extends Component {

  render(){
    const searchTagsArray = [];
    const searchState = "standard"

    this.props.tagArray.filter(
      (tag) => {
          if (tag.includes(this.props.searchValue.toLowerCase())) {
            searchTagsArray.push(tag);
            searchTagsArray.sort();
          }
      }
    );

    let filteredByTagsArrayBadges = this.props.badgeArray.filter(
      (badge) => {
        for (var i = 0; i < searchTagsArray.length; i++) {
          if (badge['tags'].toLowerCase().includes(searchTagsArray[i].toLowerCase())) {
            return badge['tags'].toLowerCase().includes(searchTagsArray[i].toLowerCase());
          }
        }

      }
    );

    let filteredByNameBadges = this.props.badgeArray.filter(
      (badge) => {
        return badge["name"].toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1;

      }
    );

    let displayKeywords;
    if (searchTagsArray.length === 0) {
      displayKeywords = (
        <div>
          <h2>Sorry, there are no Badges with keywords that match this search</h2>
          <hr></hr>
        </div>
      )
    } else {
      displayKeywords = (
        <div>
          <h2>Search By Keywords</h2>
          <hr></hr>
          {
            searchTagsArray.map((tag, idx) =>{
              return(
                <div key={idx}>
                  <h4>Keyword: {tag}</h4>
                  <hr></hr>
                  {
                    //map over filteredByTagsBadges to display list of everything from the database, or whatever the user is filtering with their search term.
                    filteredByTagsArrayBadges.map((badge, idx) => {
                      let badgeTagsArray = badge.tags.split(',');

                      if (badgeTagsArray.includes(tag)) {

                        return(
                          <div key={idx}>
                            <ul>
                              <li className='hover-hand' onClick={() => this.props.goToBadge(badge, this.props.searchValue, searchState)}>
                                <img className='list-image' src={badge.imageUrl} alt={badge.name}></img>
                                <a>
                                  {badge.name} <br/>
                                {badge.tags}
                              </a>
                              <hr/>
                            </li>
                          </ul>
                        </div>
                      );
                      }
                    })
                  }
                </div>
              );
            })
          }
        </div>
      )
    }

    return(
      <div>
        {displayKeywords}


        <h2>Matching Activity Names:</h2>
        <hr></hr>
        {
          //map over filteredByTagsBadges to display list of everything from the database, or whatever the user is filtering with their search term.
          filteredByNameBadges.map((badge, idx) => {
            return(
              <div key={idx}>
                <ul>
                  <li className='hover-hand' onClick={() => this.props.goToBadge(badge, this.props.searchValue, searchState)}>
                    <img className='list-image' src={badge.imageUrl} alt={badge.name}></img>
                    <a>
                    Activity: {badge.name} <br />
                    Creator: {badge.creator} <br />
                    Tags: {badge.tags}
                    </a>
                    <br/>
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
