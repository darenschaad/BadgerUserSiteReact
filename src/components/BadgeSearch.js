import React, { Component } from 'react';

class BadgeSearch extends Component {

  render() {
    return (
      <div>
        <input
          value={this.props.searchValue}
          placeholder={'Enter search term'}
          name={'searchValue'}
          onChange={this.props.handleInputChange}
        />

        <select
          value={this.props.optionValue}
          placeholder={this.props.optionValue}
          name={'optionValue'}
          onChange={this.props.handleInputChange}>
            <option value="name">Name</option>
            <option value="creator">Creator</option>
        </select>

      </div>
    );
  }

}

export default BadgeSearch;
