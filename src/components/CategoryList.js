import React, {Component} from 'react';
import Loading from './Loading';


class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      category : ""
    }
    this.goToBadge = this.goToBadge.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  goToBadge(currentBadge){
    //pass JSON string containing information from the badge object to local storage so that the browser can help carry that information to each badge's specific route
    // localStorage.setItem(`badge`, JSON.stringify(currentBadge));
    const pushId = currentBadge.pushId;
    // const urlIndex = currentBadge.index.substring(1);
    this.context.router.transitionTo(`/badge/${pushId}`);
  }

  handleChange(event) {
    this.context.router.transitionTo(`/categories/${event.target.value}`);
  }

  render() {
    document.body.scrollTop = 0;

    if(this.props.loading) {
      return(
        <div>
          <Loading />
        </div>
      );
    } else {
      let url = window.location.href;
      try {

      } catch (e) {

      } finally {

      }
      const currentCategory = Number(url.substr(url.length - 3));

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
          <select value={currentCategory} onChange={this.handleChange} className="category-list-category-title">
            <option value="000">000 - General Knowledge</option>
            <option value="100">100 - PHILOSOPHY & PSYCHOLOGY</option>
            <option value="200">200 - RELIGION</option>
            <option value="300">300 - SOCIAL SCIENCE</option>
            <option value="400">400 - LANGUAGES</option>
            <option value="500">500 - SCIENCE</option>
            <option value="600">600 - TECHNOLOGY</option>
            <option value="700">700 - ARTS & RECREATION</option>
            <option value="800">800 - LITERATURE</option>
            <option value="900">900 - HISTORY & GEOGRAPHY</option>
          </select>
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
