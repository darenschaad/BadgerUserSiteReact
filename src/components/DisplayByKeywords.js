import React from 'react';

const DisplayByKeywords = (props) => {
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

  let badgesFilteredByTags = props.badgeArray.filter(
    (badge) => {
      for (var i = 0; i < searchTagsArray.length; i++) {
        if (badge['tags'].toLowerCase().includes(searchTagsArray[i].toLowerCase())) {
          return badge;
        }
      }
      return badge;
    }
  );


  let searchTagsArrayMap = searchTagsArray.map((tag, idx) =>{
    //map over filteredByTagsBadges to display list of everything from the database, or whatever the user is filtering with their search term.
    let badgesFilteredByTagsMap = badgesFilteredByTags.map((badge, idx) => {
      let badgeTagsArray = badge.tags.toLowerCase().split(',');

      if (badgeTagsArray.includes(tag)) {

        return(
          <div key={idx} className="standard-search-individual-keywords">
            <img
              className='list-image'
              src={badge.imageUrl}
              alt={badge.name}
              title={badge.name}
              onClick={() => props.goToBadge(badge, props.searchValue, searchState)}
            />
          </div>
        );
      }
      return null;
    });
    return(
      <div key={idx}>
        <p className="tag"><span className="tag-description">Badges that include the keyword </span>"{tag}"</p>
        <div className="standard-search-block-keywords">
          {badgesFilteredByTagsMap}
        </div>
      </div>
    );
  });




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
        { searchTagsArrayMap }
      </div>
    )
  }

  //final return
  return(
    <div>
      { displayKeywords }
    </div>
  );
}

export default DisplayByKeywords;
