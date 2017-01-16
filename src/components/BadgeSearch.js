import React, { Component } from 'react';
import RandomBadge from './RandomBadge';
import BadgeList from './BadgeList';
import AdvancedBadgeList from './AdvancedBadgeList';

class BadgeSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      searching: false,
      standardSearch: true,
      nameCheckBox: true,
      creatorCheckBox: true,
      keywordsCheckBox: true,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.advancedSearch = this.advancedSearch.bind(this);
    this.standardSearch = this.standardSearch.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const localStorageSearchRef = localStorage.getItem('searchBy');
    const localSearchStateRef = localStorage.getItem('searchState');
    const localStorageAdvancedNameCheckRef = localStorage.getItem('advancedName');
    const localStorageAdvancedKeywordsCheckRef = localStorage.getItem('advancedKeywords');
    const localStorageAdvancedCreatorCheckRef = localStorage.getItem('advancedCreator');

    if (localStorageSearchRef !== null) {
      this.setState({searchValue : localStorageSearchRef});

      if(localStorageSearchRef.length >= 3){
        this.setState({searching: true})
      }
    }
    if (localStorageAdvancedNameCheckRef === "false") {
      this.setState({nameCheckBox : false});
    }
    if (localStorageAdvancedKeywordsCheckRef === "false") {
      this.setState({keywordsCheckBox : false})
    }
    if (localStorageAdvancedCreatorCheckRef === "false") {
      this.setState({creatorCheckBox : false})
    }
    if (localSearchStateRef === "advanced") {
        this.setState({standardSearch: false})
    }
  }

  advancedSearch(event) {
    this.setState({
      standardSearch : false,
    })
  }

  standardSearch(event) {
    this.setState({
      standardSearch: true,
    })
  }

  onChange(event) {
    if (event.target.value === "name") {
      this.setState({nameCheckBox: !this.state.nameCheckBox});
      localStorage.setItem(`advancedName`,  !this.state.nameCheckBox);
    } else if(event.target.value === "description") {
      this.setState({creatorCheckBox: !this.state.creatorCheckBox});
      localStorage.setItem(`advancedCreator`, !this.state.creatorCheckBox);
    } else if (event.target.value === "keywords") {
      this.setState({keywordsCheckBox: !this.state.keywordsCheckBox});
      localStorage.setItem(`advancedKeywords`, !this.state.keywordsCheckBox);
    }
  }

  handleInputChange(event) {
   this.setState({
     //Using computed property, sets the state object property by grabbing name prop from the event handler. Then sets that property equal to the event handler's value (what the user enters in)
     [event.target.name]: event.target.value,
     //As user types, sets searching to true so that a list of badges is generated based on user input
     searching: true,
   });
   //Searching will remain false until the user enters more than one character to optimize speed of rendered badges — one character renders too many options
   if(event.target.value.length <= 2 ) {
     this.setState({ searching: false })
   }
   else {
     this.setState({ searching : true })
   }

}

  render() {
    //sets background color based on the badge being rendered
    function setBackgroundColor (color){
      document.body.style.background = color;
    }

    //displayList will be rendered below in the return. Initializing it here, and then setting its value based on the if statements.
    let displayList;
    //if statements for displaying either advance search or standard search
    //if stadardSearch is set to false by clicking the Advanced Search Button, then the AdvancedBadgeList component will be rendered — this contains the list of badges broken out by name, keywords and creator
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
    }
      //if standardSearch is set (i.e. they haven't clicked the Advanced Search Button), the user will either see the RandomBadge component (user hasn't started searching) or the BadgeList component (user has started to search)
      else if (this.state.searching) {
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
        <div className="randomBadge">
          <RandomBadge
            badgeArray={this.props.badgeArray}
            goToBadge={this.props.goToBadge}
            searchValue={this.state.searchValue}
          />
        </div>
      )
    }

    return (
      <div>
        {setBackgroundColor('#e1e5ed')}

        {/*user input section*/}
        <input
          className="searchInput"
          value={this.state.searchValue}
          placeholder={'Type here to search everything'}
          name={'searchValue'}
          onChange={this.handleInputChange}
        />

      {
        //display either standard search (button that triggers advance search) or advanced search (radio button filters)
        this.state.standardSearch === true ?
          <div>
            <button
              className="searchButton"
              id="advanced-search-button"
              type="button"
              onClick={this.advancedSearch}>
                Advanced Search
            </button>
          </div>
        :
          <div className="advancedSearch">
            <h4>Filter Your Search By:</h4>
            <div className="searchFilters control-group">
              <label className="control control--radio">
                <input
                  type="radio"
                  value="name"
                  checked={this.state.nameCheckBox}
                  onChange={this.onChange}
                  />
                <div className="control__indicator"></div>
                <div className="search-filters">Badge Name</div>
              </label>
              <br/>

              <label className="control control--radio">
                <input
                  type="radio"
                  value="keywords"
                  checked={this.state.keywordsCheckBox}
                  onChange={this.onChange}
                  />
                <div className="control__indicator"></div>
                <div className="search-filters">Badge Keywords</div>
              </label>
              <br/>

              <label className="control control--radio">
                <input
                  type="radio"
                  value="description"
                  checked={this.state.creatorCheckBox}
                  onChange={this.onChange}
                  />
                <div className="control__indicator"></div>
                <div className="search-filters">Badge Creator</div>
              </label>
            </div>

            <button
              className="searchButton"
              id="advanced-search-button"
              type="button"
              onClick={this.standardSearch}>
                BACK TO STANDARD SEARCH
            </button>
            <br/>
          </div>
      }

        {/*Display the displayList variable set before the return. It will display the RandomBadge, BadgeList or AdvancedBadgeList components based on user input*/}
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
