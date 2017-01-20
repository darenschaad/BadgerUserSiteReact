import React, {Component} from 'react';
import NavBar from './NavBar';

class CategoryList extends Component {

  // componentDidMount() {
  //
  // }

  render() {
    const localStorageRef = localStorage.getItem('category');

    const currentCategory = JSON.parse(localStorageRef);

    // let filteredByCategory = this.props.badges.filter(
    //   (badge) => {
    //     return badge["category"].indexOf(currentCategory);
    //   }
    // );

    return (
      <div>
        <NavBar />

      </div>
    );
  }

}

CategoryList.contextTypes = {
  router: React.PropTypes.object
}

export default CategoryList;
