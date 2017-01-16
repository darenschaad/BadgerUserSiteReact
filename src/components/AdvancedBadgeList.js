import React, { Component } from 'react';


class BadgeList extends Component {

  render(){
    const searchTagsArray = [];
    const creatorArray = [];
    const creatorBadgeArray= [];
    const searchState = "advanced";

    if (this.props.searchValue.length >= 3) {

      this.props.tagArray.filter(
        (tag) => {
          if (tag.includes(this.props.searchValue.toLowerCase())) {
            searchTagsArray.push(tag);
            searchTagsArray.sort();
          }
        }
      );

      this.props.badgeArray.filter(
        (badge) => {
          // console.log(badge.creator);
          if(badge.creator.toLowerCase().includes(this.props.searchValue.toLowerCase()) && !creatorArray.includes(badge.creator)) {
            creatorArray.push(badge.creator);
            creatorArray.sort();
          }
        }
      )

    }

      let filteredByTagsArrayBadges = this.props.badgeArray.filter(
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
            // console.log(badges[i]);
            if (badges[i]['creator'].toLowerCase() === creator.toLowerCase()) {
              counter++
          }
        }
        return counter;
      }

      let filteredByCreatorBadges = this.props.badgeArray.filter(
        (badge) => {
          for (var i = 0; i < creatorArray.length; i++) {
            if (badge['creator'].toLowerCase().includes(creatorArray[i].toLowerCase())) {
              creatorBadgeArray.push(badge);
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

      let displayTypeSomething;
      if (this.props.searchValue.length <= 2) {
        displayTypeSomething = (
          <div  className="advanced-search-content">
            <h2>Type at least three characters to begin search</h2>
            <hr/>
          </div>
        )
      }

      let displayPickSomething;
      if (!this.props.nameCheckBox && !this.props.keywordsCheckBox && !this.props.creatorCheckBox) {
        displayPickSomething = (
          <div  className="advanced-search-content">
            <h2>Please check one of the options to search by</h2>
            <hr/>
          </div>
        )
      }

      let displayName;
      if (this.props.nameCheckBox && this.props.searchValue.length >= 3) {
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
              <h2>Search Results by Badge Name</h2>
              <hr/>
              {
                //map over filteredBadges to display list of everything from the database, or whatever the user is filtering with their search term.
                filteredByNameBadges.map((badge, idx) => {
                  return(
                    <div key={idx}>
                      <ul>
                        <li className='hover-hand' onClick={() => this.props.goToBadge(badge, this.props.searchValue, searchState)}>
                          <img className='list-image' src={badge.imageUrl} alt={badge.name}></img>
                          <a>
                            Activity: {badge.name} <br />
                            Creator: {badge.creator}
                          </a>
                        </li>
                      </ul>
                    </div>
                  );
                })
              }
            </div>
          )
        }
      }

      let displayKeywords;
      if (this.props.keywordsCheckBox && this.props.searchValue.length >= 3) {
        if (searchTagsArray.length === 0) {
          displayKeywords = (
            <div className="advanced-search-content">
              <h2>Sorry, there are no Badges with keywords that match this search</h2>
              <hr></hr>
            </div>
          )
        }else {
          displayKeywords = (
            <div className="advanced-search-content">
              <h2>Search By Keywords</h2>
              <hr></hr>
              {
                searchTagsArray.map((tag, idx) =>{
                  return(
                    <div key={idx}>
                      <h4>Keyword: {tag}</h4>
                      <hr></hr>
                      {
                        //map over filterTags to display list of everything from the database, or whatever the user is filtering with their search term.
                        filteredByTagsArrayBadges.map((badge, idx) => {
                          let badgeTagsArray = badge.tags.split(',');
                          if (badgeTagsArray.includes(tag)) {
                            return(
                              <div key={idx}>
                                <ul>
                                  <li className='hover-hand' onClick={() => this.props.goToBadge(badge, this.props.searchValue, searchState)}>
                                    <img className='list-image' src={badge.imageUrl} alt={badge.name}></img>
                                    <a>
                                      {badge.name}
                                      <br/>
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
          ) //close variable
        }
      } //close if statement

      let displayCreator;
      if (this.props.creatorCheckBox && this.props.searchValue.length >= 3) {
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
              <h2>Search By Creator</h2>
              <hr></hr>
              {
                creatorArray.map((creator, idx) =>{
                  return(
                    <div key={idx}>
                      <h2>{creator} ( {creatorBadges(creator, creatorBadgeArray)} )</h2>
                      <hr></hr>
                      {
                        //map over filterTags to display list of everything from the database, or whatever the user is filtering with their search term.
                        filteredByCreatorBadges.map((badge, idx) => {
                          let badgeCreator = badge.creator;
                          if (badgeCreator === creator) {
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
}

BadgeList.PropTypes = {
  badgeArray: React.PropTypes.array.isRequired,
  goToBadge: React.PropTypes.func.isRequired
};

export default BadgeList;
