import React from 'react';
import DisplayByName from './DisplayByName';
import * as branding from './branding';

const AdvancedBadgeList = (props) => {
    const searchTagsArray = [];
    const creatorArray = [];
    const creatorBadgeArray= [];
    const searchState = "advanced";

    if (props.searchValue.length >= 3) {
      props.tagArray.filter(
        (tag) => {
          if (tag.includes(props.searchValue.toLowerCase())) {
            searchTagsArray.push(tag);
            searchTagsArray.sort();
          }
        }
      );

      props.badgeArray.filter(
        (badge) => {
          // console.log(badge.creator);
          if(badge.creator.toLowerCase().includes(props.searchValue.toLowerCase()) && !creatorArray.includes(badge.creator)) {
            creatorArray.push(badge.creator);
            creatorArray.sort();
          }
        }
      )
    }

    let filteredByTagsArrayBadges = props.badgeArray.filter(
      (badge) => {
        for (var i = 0; i < searchTagsArray.length; i++) {
          if (badge['tags'].toLowerCase().includes(searchTagsArray[i].toLowerCase())) {
            return badge['tags'].toLowerCase().includes(searchTagsArray[i].toLowerCase());
          }
        }

      }
    );

    function creatorBadges(creator, badges) {
      var counter = 0;
        for (var i = 0; i < badges.length; i++) {
          if (badges[i]['creator'].toLowerCase() === creator.toLowerCase()) {
            counter++
        }
      }
      return counter;
    }

    let filteredByCreatorBadges = props.badgeArray.filter(
      (badge) => {
        for (var i = 0; i < creatorArray.length; i++) {
          if (badge['creator'].toLowerCase().includes(creatorArray[i].toLowerCase())) {
            creatorBadgeArray.push(badge);
            return badge;
          }
        }
      }
    );

    let filteredByNameBadges = props.badgeArray.filter(
      (badge) => {
        return badge["name"].toLowerCase().indexOf(props.searchValue.toLowerCase()) !== -1;
      }
    );

    let displayTypeSomething;
    if (props.searchValue.length <= 2) {
      displayTypeSomething = (
        <div  className="advanced-search-content">
          <h2>Type at least three characters to begin search</h2>
          <hr/>
        </div>
      )
    }

    let displayPickSomething;
    if (!props.nameCheckBox && !props.keywordsCheckBox && !props.creatorCheckBox) {
      displayPickSomething = (
        <div  className="advanced-search-content">
          <h2>Please check one of the options to search by</h2>
          <hr/>
        </div>
      )
    }

    let displayName;
    if (props.nameCheckBox && props.searchValue.length >= 3) {
      if (filteredByNameBadges.length === 0) {
        displayName = (
          <div  className="advanced-search-content">
            <h2>Sorry, there are no Badges with names that match this search</h2>
            <hr></hr>
          </div>
        )
      } else {
        displayName = (
          <div className="advanced-search-content">
            <DisplayByName
              searchValue={props.searchValue}
              tagArray={props.tagArray}
              badgeArray={props.badgeArray}
              goToBadge={props.goToBadge}
              searchState={searchState}
              sectionHeader="Name"
            />
          </div>
        )
      }
    }

    let displayKeywords;
    if (props.keywordsCheckBox && props.searchValue.length >= 3) {
      if (searchTagsArray.length === 0) {
        displayKeywords = (
          <div className="advanced-search-content">
            <h2>Sorry, there are no Badges with keywords that match this search</h2>
            <hr></hr>
          </div>
        )
      } else {
        displayKeywords = (
          <div className="advanced-search-content">
            <h2>Keywords</h2>
            <div className="break"></div>
            {
              searchTagsArray.map((tag, idx) =>{
                return(
                  <div key={idx}>
                    <h4>"{tag}"</h4>
                    {
                      //map over filterTags to display list of everything from the database, or whatever the user is filtering with their search term.
                      filteredByTagsArrayBadges.map((badge, idx) => {
                        let badgeTagsArray = badge.tags.toLowerCase().split(',');

                        let index = branding.categories.indexOf(badge.category);

                        let category = branding.categoryNames[index];

                        let textColor = branding.textColors[index];

                        let backgroundColor = branding.backgroundColors[index];

                        if (badgeTagsArray.includes(tag)) {
                          return(
                            <div key={idx} className="standard-search-individual-names">
                              <div style={{backgroundColor: backgroundColor}} className='badge-tile hover-hand random-badge-content' onClick={() => props.goToBadge(badge, props.searchValue, searchState)}>
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
                        }
                      })
                    }
                  </div>
                );
              })
            }
          </div>
        ) //close variable
      }
    } //close if statement

    let displayCreator;
    if (props.creatorCheckBox && props.searchValue.length >= 3) {
      if (creatorArray.length === 0) {
        displayCreator = (
          <div className="advanced-search-content">
            <h2>Sorry, there are no Badge creators that match this search</h2>
            <hr></hr>
          </div>
        )
      } else {
        displayCreator = (
          <div className="advanced-search-content">
            <h2>Creator</h2>
            <div className="break"></div>
            {
              creatorArray.map((creator, idx) =>{
                return(
                  <div key={idx}>
                    <h2>{creator} ( {creatorBadges(creator, creatorBadgeArray)} )</h2>
                    {
                      //map over filterTags to display list of everything from the database, or whatever the user is filtering with their search term.
                      filteredByCreatorBadges.map((badge, idx) => {
                        let badgeCreator = badge.creator;

                        let badgeTagsArray = badge.tags.toLowerCase().split(',');

                        let index = branding.categories.indexOf(badge.category);

                        let category = branding.categoryNames[index];

                        let textColor = branding.textColors[index];

                        let backgroundColor = branding.backgroundColors[index];

                        if (badgeCreator === creator) {
                          return(
                            <div key={idx} className="standard-search-individual-names">
                              <div style={{backgroundColor: backgroundColor}} className='badge-tile hover-hand random-badge-content' onClick={() => props.goToBadge(badge, props.searchValue, searchState)}>
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
                        }
                      })
                    }
                  </div>
                );
              })
            }
          </div>
        ) //close variable
      }
    } //close if statement

  return(
    <div className="advancedBadgeByList">
      {displayTypeSomething}
      {displayPickSomething}
      {displayName}
      {displayKeywords}
      {displayCreator}
    </div>
  );
}

AdvancedBadgeList.PropTypes = {
  badgeArray: React.PropTypes.array.isRequired,
  goToBadge: React.PropTypes.func.isRequired
};

export default AdvancedBadgeList;
