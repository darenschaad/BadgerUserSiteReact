import React, { Component } from 'react';
import RandomBadge from './RandomBadge';
import BadgeList from './BadgeList';
import AdvancedBadgeList from './AdvancedBadgeList';

class BadgeSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      // optionValue: 'name',
      searching: false,
      standardSearch: true,
      nameCheckBox: true,
      creatorCheckBox: true,
      keywordsCheckBox: true,
      // isChecked: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.advancedSearch = this.advancedSearch.bind(this);
    this.standardSearch = this.standardSearch.bind(this);
    // this.checkboxClick = this.checkboxClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem('searchBy');
    const localSearchStateRef = localStorage.getItem('searchState');
    this.setState({searchValue : localStorageRef});
    if (localSearchStateRef == "advanced") {
        this.setState({standardSearch: false})
    } else {
      if(localStorageRef.length !== 0){
        this.setState({searching: true})
    }
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

  onChange(event) {
    if (event.target.value == "category") {
      this.setState({nameCheckBox: !this.state.nameCheckBox});
    } else if(event.target.value == "description") {
      this.setState({creatorCheckBox: !this.state.creatorCheckBox});
    } else if (event.target.value == "keywords") {
      this.setState({keywordsCheckBox: !this.state.keywordsCheckBox});
    }

  }

  handleInputChange(event) {
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

    //if statements for displaying either advance search or regular search
    let displayList;
    if(this.state.standardSearch === false) {
      displayList = (
        <div>
          <AdvancedBadgeList
            badgeArray={this.props.badgeArray}
            tagArray={this.props.tagArray}
            optionValue={this.state.optionValue}
            searchValue={this.state.searchValue}
            goToBadge={this.props.goToBadge}
            nameCheckBox={this.state.nameCheckBox}
            creatorCheckBox={this.state.creatorCheckBox}
            keywordsCheckBox={this.state.keywordsCheckBox}
          />
        </div>
      )
    } else {
      if (this.state.searching) {
        displayList = (
          <div>
            <BadgeList
              badgeArray={this.props.badgeArray}
              tagArray={this.props.tagArray}
              optionValue={this.state.optionValue}
              searchValue={this.state.searchValue}
              goToBadge={this.props.goToBadge}
            />
          </div>
        )
      } else {
        displayList = (
          <div>
            <RandomBadge
              badgeArray={this.props.badgeArray}
              goToBadge={this.props.goToBadge}
              searchValue={this.state.searchValue}
            />
          </div>
        )
      }
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
        //display either standard search or advanced search
        this.state.standardSearch === true ?
          <div>
            <button id="advanced-search-button" type="button" onClick={this.advancedSearch}>Advanced Search</button>
          </div>
        :
          <div>
            <button id="advanced-search-button" type="button" onClick={this.standardSearch}>Standard Search</button>
            <br/>
            <h3>Search Badges By:</h3>
            <label>
              <input type="checkbox" value="category" checked={this.state.nameCheckBox} onChange={this.onChange} />
              Badge Name
            </label>
            <br/>
            <label>
              <input type="checkbox" value="keywords" checked={this.state.keywordsCheckBox} onChange={this.onChange} />
              Badge Keywords
            </label>
            <br/>
            <label>
              <input type="checkbox" value="description" checked={this.state.creatorCheckBox} onChange={this.onChange} />
              Badge Creator
            </label>


          </div>
      }


      { displayList }

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
