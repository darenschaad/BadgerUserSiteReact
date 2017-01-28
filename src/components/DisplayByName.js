import React from 'react';
import * as branding from './branding';

const DisplayByName = (props) => {

  const searchTagsArray = [];
  const searchState = "standard";

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
    let index = branding.categories.indexOf(badge.category);

    let category = branding.categoryNames[index];

    let textColor = branding.textColors[index];

    let backgroundColor = branding.backgroundColors[index];

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
        <h2 className="standard-search-describer">Badges</h2>
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
