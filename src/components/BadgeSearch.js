import React, { Component } from 'react';
import RandomBadge from './RandomBadge';
import BadgeList from './BadgeList';

class BadgeSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      // optionValue: 'name',
      searching: false,
      standardSearch: true,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.advancedSearch = this.advancedSearch.bind(this);
    this.standardSearch = this.standardSearch.bind(this);
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem('searchBy');
    this.setState({searchValue : localStorageRef});
    if(localStorageRef.length !== 0){
      this.setState({searching: true})
    }
  }

  advancedSearch(event) {
    this.setState({
      standardSearch: false
    })
  }

  standardSearch(event) {
    this.setState({
      standardSearch: true
    })
  }

  handleInputChange(event) {
  //  console.log(event.target.name);
  //  console.log(event.target.value);
   //using the event object and a computed property, grab state object property name from input/select's name property (i.e. 'searchValue' or 'optionValue') and set the state property equal to the value grabbed from the event object.
   this.setState({
     [event.target.name]: event.target.value,
     searching: true,
   });
   if(event.target.value.length <= 1 ) {
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
      {
        this.state.standardSearch === true ?
          <button id="advanced-search-button" type="button" onClick={this.advancedSearch}>Advanced Search</button>
        :
          <button id="advanced-search-button" type="button" onClick={this.standardSearch}>Standard Search</button>
      }


        {
          this.state.searching === true ?
            <BadgeList
              badgeArray={this.props.badgeArray}
              tagArray={this.props.tagArray}
              optionValue={this.state.optionValue}
              searchValue={this.state.searchValue}
              goToBadge={this.props.goToBadge}
            />
            :
          <RandomBadge
            badgeArray={this.props.badgeArray}
            goToBadge={this.props.goToBadge}
            searchValue={this.state.searchValue}
          />
        }

      </div>
    );
  }

}

export default BadgeSearch;


// dropdown search select
//
// <select
//   value={this.state.optionValue}
//   placeholder={this.state.optionValue}
//   name={'optionValue'}
//   onChange={this.handleInputChange}>
//     <option value="name">Name</option>
//     <option value="creator">Creator</option>
// </select>
//
