import React, {Component} from 'react';
import Loading from './Loading';

class Challenges extends Component {
  constructor(){
    super();
    this.goToChallenge = this.goToChallenge.bind(this);
  }

  goToChallenge(currentChallenge) {
    // console.log(value);
    // localStorage.setItem(`category`, JSON.stringify(currentChallenge));
      this.context.router.transitionTo(`/challenges/${currentChallenge}`);

  }

  render() {
    if (this.props.loading) {
      return(
        <div>
          <Loading />
        </div>
      )
    }
    else {
      return(
        <div>
          <h1 className="categories-categories-title">Challenges</h1>
          <div className="category-000-div">
            <div className="category-individual animated slideInRight" value={'good-sport'} onClick={() => this.goToChallenge('good-sport')}>
              <img className="category-image" id="category-000-image"  src="https://spcilk.github.io/badger-badge-images/images/goodsport.png" alt="Good Sport Challenge"/>
              <h4 className="category-text">GOOD SPORT</h4>
            </div>
          </div>
          <div className="category-100-div">
            <div className="category-individual animated slideInRight" value={'kitchen-sciences'} onClick={() => this.goToChallenge('kitchen-sciences')}>
              <img className="category-image" id="category-100-image"  src="https://spcilk.github.io/badger-badge-images/images/kitchensciences.png" alt="Kitchen Sciences Challenge"/>
              <h4 className="category-text">KITCHEN SCIENCES</h4>
            </div>
          </div>
          <div className="category-200-div">
            <div className="category-individual animated slideInRight" value={'know-it-all'} onClick={() => this.goToChallenge('know-it-all')}>
              <img className="category-image" id="category-200-image"  src="https://spcilk.github.io/badger-badge-images/images/knowitall.png" alt="Know It All Challenge"/>
              <h4 className="category-text">Know It All</h4>
            </div>
          </div>
          <div className="category-300-div">
            <div className="category-individual animated slideInRight" value={'master-gardener'} onClick={() => this.goToChallenge('master-gardener')}>
              <img className="category-image" id="category-300-image"  src="https://spcilk.github.io/badger-badge-images/images/mastergardener.png" alt="Master Gardener Challenge"/>
              <h4 className="category-text">Master Gardener</h4>
            </div>
          </div>
          <div className="category-400-div">
            <div className="category-individual animated slideInRight" value={'media-consumption'} onClick={() => this.goToChallenge('media-consumption')}>
              <img className="category-image" id="category-400-image"  src="https://spcilk.github.io/badger-badge-images/images/media-consumption.png" alt="Media Consumption Challenge"/>
              <h4 className="category-text">Media Consumption</h4>
            </div>
          </div>
          <div className="category-500-div">
            <div className="category-individual animated slideInRight" value={'media-production'} onClick={() => this.goToChallenge('media-production')}>
              <img className="category-image" id="category-500-image"  src="https://spcilk.github.io/badger-badge-images/images/media-production.png" alt="Media Production Challenge"/>
              <h4 className="category-text">Media Production</h4>
            </div>
          </div>
          <div className="category-600-div">
            <div className="category-individual animated slideInRight" value={'model-citizen'} onClick={() => this.goToChallenge('model-citizen')}>
              <img className="category-image" id="category-600-image"  src="https://spcilk.github.io/badger-badge-images/images/model-citizen.png" alt="Model Citizen Challenge"/>
              <h4 className="category-text">Model Citizen</h4>
            </div>
          </div>
          <div className="category-700-div">
            <div className="category-individual animated slideInRight" value={'party-animal'} onClick={() => this.goToChallenge('party-animal')}>
              <img className="category-image" id="category-700-image"  src="https://spcilk.github.io/badger-badge-images/images/partyanimal.png" alt="Party Animal Challenge"/>
              <h4 className="category-text">Party Animal</h4>
            </div>
          </div>
          <div className="category-800-div">
            <div className="category-individual animated slideInRight" value={'professional-development'} onClick={() => this.goToChallenge('professional-development')}>
              <img className="category-image" id="category-800-image"  src="https://spcilk.github.io/badger-badge-images/images/professional-development.png" alt="Professional Development Challenge"/>
              <h4 className="category-text">Professional Development</h4>
            </div>
          </div>
          <div className="category-900-div">
            <div className="category-individual animated slideInRight" value={'survival-skills'} onClick={() => this.goToChallenge('survival-skills')}>
              <img className="category-image" id="category-900-image"  src="https://spcilk.github.io/badger-badge-images/images/survivalskills.png" alt="Survival Skills Challenge"/>
              <h4 className="category-text">Survival Skills</h4>
            </div>
          </div>
          <div className="category-000-div">
            <div className="category-individual animated slideInRight" value={'textiles'} onClick={() => this.goToChallenge('textiles')}>
              <img className="category-image" id="category-000-image"  src="https://spcilk.github.io/badger-badge-images/images/textiles.png" alt="Textiles Challenge"/>
              <h4 className="category-text">Textiles</h4>
            </div>
          </div>
        </div>
      );
    }
  }
}

Challenges.contextTypes = {
  router: React.PropTypes.object
}

export default Challenges;
