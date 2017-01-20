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
      const currentCategory = Number(localStorage.getItem('category'));

      const categories = [0,100,200,300,400,500,600,700,800,900];

      const index = categories.indexOf(currentCategory);

      const categoryNames = ["000 - GENERAL KNOWLEDGE", "100 - PHILOSOPHY & PSYCHOLOGY", "200 - RELIGION", "300 - SOCIAL SCIENCE", "400 - LANGUAGES", "500 - SCIENCE", "600 - TECHNOLOGY", "700 - ARTS & RECREATION", "800 - LITERATURE", "900 - HISTORY & GEOGRAPHY"];

      const category = categoryNames[index];


      let filteredByCategory = this.props.badges.map(
        (badge, idx) => {
          if(badge.category === currentCategory) {
            return (
              <div className="category-list-div" key={idx} onClick={() => this.goToBadge(badge)}>
                <img className='category-list-image' src={badge.imageUrl} alt={badge.name}></img>
                <h4 className="category-list-text">{badge.name}</h4>
              </div>
            );
          }
        }
      );
      return (
        <div>
          <NavBar />
          <h1 className="category-list-category-title">{category}</h1>
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
