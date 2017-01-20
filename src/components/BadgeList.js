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
            return badge;
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
        <div className="standard-search-content">
          <h2 className="standard-search-describer">Sorry, there are no Badges with keywords that match this search</h2>
        </div>
      )
    } else {
      displayKeywords = (
        <div className="standard-search-content">
          <h2 className="standard-search-describer">Keywords</h2>
          <div className="break"></div>
          {
            searchTagsArray.map((tag, idx) =>{
              return(
                <div>
                  <span className="tag">"{tag}"</span>
                  <div key={idx} className="standard-search-block-keywords">
                    {
                      //map over filteredByTagsBadges to display list of everything from the database, or whatever the user is filtering with their search term.
                      filteredByTagsArrayBadges.map((badge, idx) => {
                        let badgeTagsArray = badge.tags.toLowerCase().split(',');

                        if (badgeTagsArray.includes(tag)) {

                          return(
                            <div key={idx} className="standard-search-individual-keywords">
                              <img
                                className='list-image'
                                src={badge.imageUrl}
                                alt={badge.name}
                                title={badge.name}
                                onClick={() => this.props.goToBadge(badge, this.props.searchValue, searchState)}
                              />
                            </div>
                          );
                        }
                      })
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
      )
    }

    let displayName;
    if (filteredByNameBadges.length === 0) {
      displayName = (
        <div className="standard-search-content">
          <h2 className="standard-search-describer">Sorry, there are no Badges with names that match this search</h2>
        </div>
      )
    } else {
      displayName = (
        <div className="standard-search-content">
          <h2 className="standard-search-describer">Badges</h2>
          <div className="break"></div>
          {
            //map over filteredByTagsBadges to display list of everything from the database, or whatever the user is filtering with their search term.
            filteredByNameBadges.map((badge, idx) => {
              return(
                <div key={idx} className="standard-search-individual-names">
                  <ul className="badge-list">
                    <li className='badge-list-item hover-hand' onClick={() => this.props.goToBadge(badge, this.props.searchValue, searchState)}>
                      <img className='list-image' src={badge.imageUrl} alt={badge.name}></img>
                      <a className="badge-list-details">
                        Activity: {badge.name}
                        <br/>
                      </a>
                      <br/>
                    </li>
                  </ul>
                </div>
              );
            })
          }
        </div>
      )
    }

    return(
      <div className="animated slideInUp">
        {displayKeywords}
        {displayName}
      </div>
    );
  }
}

BadgeList.PropTypes = {
  badgeArray: React.PropTypes.array.isRequired,
  goToBadge: React.PropTypes.func.isRequired
};

export default BadgeList;
