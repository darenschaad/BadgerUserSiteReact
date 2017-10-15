import React, {Component} from 'react';
import Loading from './Loading';

class Categories extends Component {
  constructor() {
    super();
    this.goToCategory = this.goToCategory.bind(this);
  }

  goToCategory(currentCategory) {
    // console.log(value);
    // localStorage.setItem(`category`, JSON.stringify(currentCategory));
    if (currentCategory === 0) {
      this.context.router.transitionTo(`/categories/${currentCategory}00`);
    } else{
      this.context.router.transitionTo(`/categories/${currentCategory}`);
    }
  }

  render() {
    if(this.props.loading) {
      return(
        <div>
          <Loading />
        </div>
      );
    } else {
      return(
        <div>

          <h1 className="categories-categories-title">Categories</h1>
          <div className="category-000-div">
            <div className="category-individual animated slideInRight" value={0} onClick={() => this.goToCategory(0)} >
              <img className="category-image" id="category-000-image"  src="https://spcilk.github.io/badger-badge-images/images/000.png" alt="General knowledge category"/>
              <h4 className="category-text">000 - GENERAL KNOWLEDGE</h4>
            </div>
          </div>
          <div className="category-100-div">
            <div className="category-individual animated slideInRight" value={100} onClick={() => this.goToCategory(100)} >
              <img className="category-image" id="category-100-image"  src="https://spcilk.github.io/badger-badge-images/images/100.png" alt="General knowledge category"/>
              <h4 className="category-text">100 - PHILOSOPHY & PSYCHOLOGY</h4>
            </div>
          </div>
          <div className="category-200-div">
            <div className="category-individual animated slideInRight" value={200} onClick={() => this.goToCategory(200)} >
              <img className="category-image" id="category-200-image"  src="https://spcilk.github.io/badger-badge-images/images/200.png" alt="General knowledge category"/>
              <h4 className="category-text">200 - RELIGION</h4>
            </div>
          </div>
          <div className="category-300-div">
            <div className="category-individual animated slideInRight" value={300} onClick={() => this.goToCategory(300)} >
              <img className="category-image" id="category-300-image"  src="https://spcilk.github.io/badger-badge-images/images/300.png" alt="General knowledge category"/>
              <h4 className="category-text">300 - SOCIAL SCIENCE</h4>
            </div>
          </div>
          <div className="category-400-div">
            <div className="category-individual animated slideInRight" value={400} onClick={() => this.goToCategory(400)} >
              <img className="category-image" id="category-400-image"  src="https://spcilk.github.io/badger-badge-images/images/400.png" alt="General knowledge category"/>
              <h4 className="category-text">400 - LANGUAGES</h4>
            </div>
          </div>
          <div className="category-500-div">
            <div className="category-individual animated slideInRight" value={500} onClick={() => this.goToCategory(500)} >
              <img className="category-image" id="category-500-image"  src="https://spcilk.github.io/badger-badge-images/images/500.png" alt="General knowledge category"/>
              <h4 className="category-text">500 - SCIENCE</h4>
            </div>
          </div>
          <div className="category-600-div">
            <div className="category-individual animated slideInRight" value={600} onClick={() => this.goToCategory(600)} >
              <img className="category-image" id="category-600-image"  src="https://spcilk.github.io/badger-badge-images/images/600.png" alt="General knowledge category"/>
              <h4 className="category-text">600 - TECHNOLOGY</h4>
            </div>
          </div>
          <div className="category-700-div">
            <div className="category-individual animated slideInRight" value={700} onClick={() => this.goToCategory(700)} >
              <img className="category-image" id="category-700-image"  src="https://spcilk.github.io/badger-badge-images/images/700.png" alt="General knowledge category"/>
              <h4 className="category-text">700 - ARTS & RECREATION</h4>
            </div>
          </div>
          <div className="category-800-div">
            <div className="category-individual animated slideInRight" value={800} onClick={() => this.goToCategory(800)} >
              <img className="category-image" id="category-800-image"  src="https://spcilk.github.io/badger-badge-images/images/800.png" alt="General knowledge category"/>
              <h4 className="category-text">800 - LITERATURE</h4>
            </div>
          </div>
          <div className="category-900-div">
            <div className="category-individual animated slideInRight" value={900} onClick={() => this.goToCategory(900)} >
              <img className="category-image" id="category-900-image"  src="https://spcilk.github.io/badger-badge-images/images/900.png" alt="General knowledge category"/>
              <h4 className="category-text">900 - HISTORY & GEOGRAPHY</h4>
            </div>
          </div>
        </div>
      );
    }
  }
}

Categories.contextTypes = {
  router: React.PropTypes.object
}

export default Categories;
