import React, { Component } from 'react';


class BadgeList extends Component {

  render(){
    const array = [];
    let filteredByTagsBadges = this.props.badgeArray.filter(
      (badge) => {
        const tagArray = badge["tags"].split(',');

        for (var i = 0; i < tagArray.length; i++) {
          if (tagArray[i].includes(this.props.searchValue.toLowerCase()) && !array.includes(tagArray[i])) {
            array.push(tagArray[i]);
            array.sort();



          }

        }

        // console.log(this.props.searchValue.toLowerCase());
        // console.log(searchTagsArray);
        // return searchTagsArray;
        // return badge['tags'].toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1;
      }
    );
    console.log(array);

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
          array.map((tag, idx) =>{
              return(
                <div key={idx}>
                  <h4>
                    {tag}
                  </h4>
                </div>
              );
            })
        }

        <h2>Activity:</h2>
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
