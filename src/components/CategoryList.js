import React, {Component} from 'react';
import NavBar from './NavBar';
import Loading from './Loading';
// import base from './../base';

class CategoryList extends Component {
  constructor() {
    super();
    this.goToBadge = this.goToBadge.bind(this);
  }

  goToBadge(currentBadge){
    //pass JSON string containing information from the badge object to local storage so that the browser can help carry that information to each badge's specific route
    localStorage.setItem(`badge`, JSON.stringify(currentBadge));
    this.context.router.transitionTo(`/badge/${currentBadge.pushId}`);
  }

  render() {

    if(this.props.loading) {
      return(
        <div>
          <NavBar />
          <Loading />
        </div>
      );
    } else {
      const localStorageRef = localStorage.getItem('category');

      const currentCategory = JSON.parse(localStorageRef);

      let filteredByCategory = this.props.badges.map(
        (badge, idx) => {
          if(badge.category === currentCategory) {
            return (
              <div key={idx} onClick={() => this.goToBadge(badge)}>
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

}

CategoryList.contextTypes = {
  router: React.PropTypes.object
}

export default CategoryList;
