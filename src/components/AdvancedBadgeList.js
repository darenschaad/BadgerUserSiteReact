import React from 'react';
import DisplayByName from './DisplayByName';
import BadgeTile from './BadgeTile';
// import * as branding from './branding';

const AdvancedBadgeList = (props) => {
  const searchTagsArray = [];
  const creatorArray = [];
  const creatorBadgeArray= [];
  const searchState = "advanced";

  //if the user searches more than 3 characters, proceed to push potential badges into an array of badges and an array of tags.
  if (props.searchValue.length >= 3) {
    props.tagArray.filter(
      (tag) => {
        if (tag.includes(props.searchValue.toLowerCase())) {
          searchTagsArray.push(tag);
          searchTagsArray.sort();
        }
        return tag;
      }
    );

    props.badgeArray.filter(
      (badge) => {
        if(badge.creator.toLowerCase().includes(props.searchValue.toLowerCase()) && !creatorArray.includes(badge.creator)) {
          creatorArray.push(badge.creator);
          creatorArray.sort();
        }
        return badge;
      }
    );
  }
  //end of array creation

  let filteredBadgesByName = props.badgeArray.filter(
    (badge) => {
      return badge["name"].toLowerCase().indexOf(props.searchValue.toLowerCase()) !== -1;
    }
  );

  //either/or for the results of a user's search by name
  let displayName;
  if (props.nameCheckBox && props.searchValue.length >= 3) {
    if (filteredBadgesByName.length === 0) {
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

  //map over filterTags to display list of everything from the database, or whatever the user is filtering with their search term.
  let filteredBadgesByTags = props.badgeArray.filter(
    (badge) => {
      for (var i = 0; i < searchTagsArray.length; i++) {
        if (badge['tags'].toLowerCase().includes(searchTagsArray[i].toLowerCase())) {
          return true;
        }
      }
      return false;
    }
  );

  let searchTagsArrayMap = searchTagsArray.map((tag, idx) => {
    //this will be rendered below in the return
    let filteredBadgesByTagsMap = filteredBadgesByTags.map((badge, idx) => {
      let badgeTagsArray = badge.tags.toLowerCase().split(',');

      if (badgeTagsArray.includes(tag)) {
        return(
          <div key={idx}>
            <BadgeTile
              badge={badge}
              idx={idx}
              searchValue={props.searchValue}
              goToBadge={props.goToBadge}
              searchState={searchState}
            />
          </div>
        );
      }
      return null;
    });
    return(
      <div key={idx}>
        <h4><span className="tag-description">Badges that include the keyword </span>"{tag}"</h4>
        {filteredBadgesByTagsMap}
      </div>
    );
  });

  //either/or for the results of a user's search by keywords
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
          { searchTagsArrayMap }
        </div>
      )
    }
  }

  let creatorBadges = (creator, badges) => {
    var counter = 0;
      for (var i = 0; i < badges.length; i++) {
        if (badges[i]['creator'].toLowerCase() === creator.toLowerCase()) {
          counter++
      }
    }
    return counter;
  }

  let filteredBadgesByCreator = props.badgeArray.filter(
    (badge) => {
      for (var i = 0; i < creatorArray.length; i++) {
        if (badge['creator'].toLowerCase().includes(creatorArray[i].toLowerCase())) {
          creatorBadgeArray.push(badge);
          return badge;
        }
      }
      return null;
    }
  );

  let creatorArrayMap = creatorArray.map((creator, idx) => {
    return(
      <div key={idx}>
        <h2>{creator} ( {creatorBadges(creator, creatorBadgeArray)} )</h2>
        {
          //map over filterTags to display list of everything from the database, or whatever the user is filtering with their search term.
          filteredBadgesByCreator.map((badge, idx) => {
            let badgeCreator = badge.creator;

            if (badgeCreator === creator) {
              return(
                <div key={idx}>
                  <BadgeTile
                    badge={badge}
                    idx={idx}
                    searchValue={props.searchValue}
                    goToBadge={props.goToBadge}
                    searchState={searchState}
                  />
                </div>
              );
            }
            return null;
          })
        }
      </div>
    );
  });

  //either/or for the results of a user's search by keywords
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
          { creatorArrayMap }
        </div>
      ) //close variable
    }
  } //close if statement

  //if the user hasn't typed anything or selected any of the boxes, instruct them to do so
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
  //end of user instructions

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
