import React, {Component} from 'react';
import NavBar from './NavBar';

class CategoryList extends Component {

  render() {
    const localStorageRef = localStorage.getItem('category');

    const currentCategory = JSON.parse(localStorageRef);

    let filteredByCategory = this.props.badges.map(
      (badge, idx) => {
        if(badge.category === currentCategory) {
          return (
            <div key={idx}>
              {badge.name}
            </div>
          );
        }
      }
    );

    return (
      <div>
        <NavBar />
        {filteredByCategory}
      </div>
    );
  }

}

CategoryList.contextTypes = {
  router: React.PropTypes.object
}

export default CategoryList;
