import React from 'react';
import BadgeTile from './BadgeTile';
// import * as branding from './branding';

const DisplayByName = (props) => {

  const searchTagsArray = [];

  props.tagArray.filter(
    (tag) => {
      if (tag.includes(props.searchValue.toLowerCase())) {
        searchTagsArray.push(tag);
        searchTagsArray.sort();
      }
      return searchTagsArray;
    }
  );

  let badgesFilteredByName = props.badgeArray.filter(
    (badge) => {
      return badge["name"].toLowerCase().indexOf(props.searchValue.toLowerCase()) !== -1;
    }
  );

  //map over filteredByTagsBadges to display list of everything from the database, or whatever the user is filtering with their search term.
  let badgesFilteredByNameMap = badgesFilteredByName.map((badge, idx) => {
    return(
      <div key={idx}>
        <BadgeTile
          badge={badge}
          idx={idx}
          searchValue={props.searchValue}
          goToBadge={props.goToBadge}
          searchState={props.searchState}
        />
      </div>
    );
  });

  let displayName;
  if (badgesFilteredByName.length === 0) {
    displayName = (
      <div className="standard-search-content">
        <h2 className="standard-search-describer">Sorry, there are no Badges with names that match this search</h2>
      </div>
    )
  } else {
    displayName = (
      <div className="standard-search-content">
        <h2 className="standard-search-describer">{props.sectionHeader}</h2>
        <div className="break"></div>
        {badgesFilteredByNameMap}
      </div>
    )
  }
  return(
    <div>
      {displayName}
    </div>
  );
}

export default DisplayByName;
