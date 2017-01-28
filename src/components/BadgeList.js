import React from 'react';
import DisplayByKeywords from './DisplayByKeywords';
import DisplayByName from './DisplayByName';

const BadgeList = (props) => {
  return(
    <div className="animated slideInUp">
      <DisplayByKeywords
        tagArray={props.tagArray}
        searchValue={props.searchValue}
        badgeArray={props.badgeArray}
      />

      <DisplayByName
        tagArray={props.tagArray}
        searchValue={props.searchValue}
        badgeArray={props.badgeArray}
      />
    </div>
  );
}

BadgeList.PropTypes = {
  badgeArray: React.PropTypes.array.isRequired,
  goToBadge: React.PropTypes.func.isRequired
};

export default BadgeList;
