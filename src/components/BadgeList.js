import React, { Component } from 'react';

const categories = [0,100,200,300,400,500,600,700,800,900];
const categoryNames = ["000 - GENERAL KNOWLEDGE", "100 - PHILOSOPHY & PSYCHOLOGY", "200 - RELIGION", "300 - SOCIAL SCIENCE", "400 - LANGUAGES", "500 - SCIENCE", "600 - TECHNOLOGY", "700 - ARTS & RECREATION", "800 - LITERATURE", "900 - HISTORY & GEOGRAPHY"];

const textColors = ["#4C4C4C", "#0079A5", "#66008D", "#4D782D", "#C97100", "#25895A", "#000073", "#988967", "#76193C", "#985721"];

const backgroundColors = ["#989DA7", "#DCF0FF", "#D0C0D6", "#CEDFB0", "#EEC99A", "#9EBAAC", "#B5B5CA", "#FDE192", "#DBC2CC", "#D8C2A9"];


class BadgeList extends Component {

  render(){

    const searchTagsArray = [];
    const searchState = "standard";

    this.props.tagArray.filter(
      (tag) => {
        if (tag.includes(this.props.searchValue.toLowerCase())) {
          searchTagsArray.push(tag);
          searchTagsArray.sort();
        }
        return searchTagsArray;
      }
    );

    let filteredByTagsArrayBadges = this.props.badgeArray.filter(
      (badge) => {
        for (var i = 0; i < searchTagsArray.length; i++) {
          if (badge['tags'].toLowerCase().includes(searchTagsArray[i].toLowerCase())) {
            return badge;
          }
        }
        return filteredByTagsArrayBadges;
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
                <div key={idx}>
                  <p className="tag"><span className="tag-description">Badges that include the keyword </span>"{tag}"</p>
                  <div className="standard-search-block-keywords">
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
                        return filteredByTagsArrayBadges;
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
              let index = categories.indexOf(badge.category);

              let category = categoryNames[index];

              let textColor = textColors[index];

              let backgroundColor = backgroundColors[index];

              return(
                <div key={idx} className="standard-search-individual-names">
                  <div style={{backgroundColor: backgroundColor}} className='badge-tile hover-hand random-badge-content' onClick={() => this.props.goToBadge(badge, this.props.searchValue, searchState)}>
                    <div className="badge-tile-image-details">
                      <img className='detail-image' src={badge.imageUrl} alt={badge.names}></img>
                      <div className="badge-tile-details">
                        <h1 style={{color: textColor }} >{badge.name}</h1>
                        <span style={{color: textColor }} className="badge-tile-subtitle">To do: </span>
                        <span className="badge-tile-description">{badge.description}</span>
                        <br />
                        <span style={{color: textColor }} className="badge-tile-subtitle">Proof: </span>
                        <span className="badge-tile-description">{badge.proof}</span>
                      </div>
                    </div>
                    <h1 style={{color: textColor }} className="badge-tile-category">{category}</h1>
                  </div>
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
