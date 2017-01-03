import React, { Component } from 'react';


class BadgeList extends Component {

  render(){
    const searchTagsArray = [];
    

    let filteredByTagsBadges = this.props.tagArray.filter(
      (tag) => {
        // console.log(tag);
        // for (var i = 0; i < tagArray.length; i++) {
          if (tag.includes(this.props.searchValue.toLowerCase())) {
            searchTagsArray.push(tag);
            searchTagsArray.sort();
          }
        // }
      }
    );

    let filteredByTagsArrayBadges = this.props.badgeArray.filter(
      (badge) => {
        for (var i = 0; i < searchTagsArray.length; i++) {
          if (badge['tags'].toLowerCase().includes(searchTagsArray[i].toLowerCase())) {
            return badge['tags'].toLowerCase().includes(searchTagsArray[i].toLowerCase());
          }
        }

      }
    );

    let filteredByNameBadges = this.props.badgeArray.filter(
      (badge) => {
        return badge["name"].toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1;

      }
    );

    return(
      <div>
        <h2>Tags:</h2>
        <hr></hr>
        {
          searchTagsArray.map((tag, idx) =>{
              return(
                <div key={idx}>
                  <h4>{tag}</h4>
                    <hr></hr>
                    {
                      //map over filteredByTagsBadges to display list of everything from the database, or whatever the user is filtering with their search term.
                      filteredByTagsArrayBadges.map((badge, idx) => {
                        let badgeTagsArray = badge.tags.split(',');

                        if (badgeTagsArray.includes(tag)) {

                          return(
                            <div key={idx}>
                              <ul>
                                <li className='hover-hand' onClick={() => this.props.goToBadge(badge, this.props.searchValue)}>
                                  <img className='list-image' src={badge.imageUrl} alt={badge.name}></img>
                                  <a>
                                    {badge.name} <br/>
                                  {badge.tags}
                                </a>
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

        <h2>Matching Activity Names:</h2>
        <hr></hr>
        {
          //map over filteredByTagsBadges to display list of everything from the database, or whatever the user is filtering with their search term.
          filteredByNameBadges.map((badge, idx) => {
            return(
              <div key={idx}>
                <ul>
                  <li className='hover-hand' onClick={() => this.props.goToBadge(badge, this.props.searchValue)}>
                    <img className='list-image' src={badge.imageUrl} alt={badge.name}></img>
                    <a>
                    Activity: {badge.name} <br />
                    Creator: {badge.creator} <br />
                    Tags: {badge.tags}
                    </a>
                  </li>
                </ul>
              </div>
            );
          })
        }
      </div>
    );
  }
}

BadgeList.PropTypes = {
  badgeArray: React.PropTypes.array.isRequired,
  goToBadge: React.PropTypes.func.isRequired
};

export default BadgeList;
