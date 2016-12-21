import React, { Component } from 'react';
import RandomBadge from './RandomBadge';
import BadgeList from './BadgeList';

class BadgeSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      optionValue: 'name',
      searching: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
   console.log(event.target.name);
   console.log(event.target.value);
   //using the event object and a computed property, grab state object property name from input/select's name property (i.e. 'searchValue' or 'optionValue') and set the state property equal to the value grabbed from the event object.
   this.setState({
     [event.target.name]: event.target.value,
     searching: true,
   });
   if(event.target.value.length === 0) {
     this.setState({ searching: false })
   }
  }


  render() {
    function setBackgroundColor (color){
      document.body.style.background = color;
    }
    return (
      <div>
        {setBackgroundColor('#e6ffff')}
        <input
          value={this.state.searchValue}
          placeholder={'Enter search term'}
          name={'searchValue'}
          onChange={this.handleInputChange}
        />

        <select
          value={this.state.optionValue}
          placeholder={this.state.optionValue}
          name={'optionValue'}
          onChange={this.handleInputChange}>
            <option value="name">Name</option>
            <option value="creator">Creator</option>
        </select>

        {
          this.state.searching === true ?
            <BadgeList
              badgeArray={this.props.badgeArray}
              optionValue={this.state.optionValue}
              searchValue={this.state.searchValue}
              goToBadge={this.props.goToBadge}
            />
          :
          <RandomBadge
            badgeArray={this.props.badgeArray}
            goToBadge={this.props.goToBadge}
          />
        }

      </div>
    );
  }

}

export default BadgeSearch;
