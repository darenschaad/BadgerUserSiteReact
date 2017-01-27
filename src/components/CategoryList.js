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
    // localStorage.setItem(`badge`, JSON.stringify(currentBadge));
    const pushId = currentBadge.pushId;
    const urlIndex = currentBadge.index.substring(1);
    this.context.router.transitionTo(`/badge/${pushId}`);
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

      const divIndex = "category-list-index-" + index;

      const categoryNames = ["000 - GENERAL KNOWLEDGE", "100 - PHILOSOPHY & PSYCHOLOGY", "200 - RELIGION", "300 - SOCIAL SCIENCE", "400 - LANGUAGES", "500 - SCIENCE", "600 - TECHNOLOGY", "700 - ARTS & RECREATION", "800 - LITERATURE", "900 - HISTORY & GEOGRAPHY"];

      const textColors = ["#4C4C4C", "#0079A5", "#66008D", "#4D782D", "#C97100", "#25895A", "#000073", "#988967", "#76193C", "#985721"];

      // const backgroundColors = ["#989DA7", "#DCF0FF", "#D0C0D6", "#CEDFB0", "#EEC99A", "#9EBAAC", "#B5B5CA", "#FDE192", "#DBC2CC", "#D8C2A9"];

      const category = categoryNames[index];

      const textColor = textColors[index];

      // const backgroundColor = backgroundColors[index];

      let categoryBadgeCount = 0;

      let filteredByCategory = this.props.badges.map(
        (badge, idx) => {
          if(badge.category === currentCategory) {
            categoryBadgeCount++;
            return (
              <div className={divIndex}  key={idx} >
                <div className="category-list-div" onClick={() => this.goToBadge(badge)}>
                  <img className='category-list-image' src={badge.imageUrl} alt={badge.name}></img>
                  <h4 className="category-list-text" style={{color: textColor}}>{badge.name}</h4>
                </div>
              </div>
            );
          }
          return filteredByCategory;
        }
      );
      return (
        <div>
          <NavBar />
          <h1 className="category-list-category-title">{category} ({categoryBadgeCount})</h1>
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
