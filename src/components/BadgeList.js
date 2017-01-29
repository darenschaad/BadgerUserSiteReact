import React from 'react';
import DisplayByKeywords from './DisplayByKeywords';
import DisplayByName from './DisplayByName';

const BadgeList = (props) => {
  const searchState = "standard";
  
  return(
    <div className="animated slideInUp">
      <DisplayByKeywords
        tagArray={props.tagArray}
        searchValue={props.searchValue}
        badgeArray={props.badgeArray}
        goToBadge={props.goToBadge}
      />

      <DisplayByName
        tagArray={props.tagArray}
        searchValue={props.searchValue}
        searchState={searchState}
        badgeArray={props.badgeArray}
        goToBadge={props.goToBadge}
        sectionHeader="Badges"
      />
    </div>
  );
}

BadgeList.PropTypes = {
  badgeArray: React.PropTypes.array.isRequired,
  goToBadge: React.PropTypes.func.isRequired
};

export default BadgeList;
