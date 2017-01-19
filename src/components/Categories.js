import React, {Component} from 'react';
import NavBar from './NavBar';

class Categories extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <h1>Categories</h1>

        <div className="category-individual">
          <img className="category-image" id="category-000-image"  src="https://spcilk.github.io/badger-badge-images/images/000.png" alt="General knowledge category"/>
          <h4 className="category-text">000 - GENERAL KNOWLEDGE</h4>
        </div>
        <div className="category-individual">
          <img className="category-image" id="category-100-image"  src="https://spcilk.github.io/badger-badge-images/images/100.png" alt="General knowledge category"/>
          <h4 className="category-text">100 - PHILOSOPHY & PSYCHOLOGY</h4>
        </div>
        <div className="category-individual">
          <img className="category-image" id="category-200-image"  src="https://spcilk.github.io/badger-badge-images/images/200.png" alt="General knowledge category"/>
          <h4 className="category-text">200 - RELIGION</h4>
        </div>
        <div className="category-individual">
          <img className="category-image" id="category-300-image"  src="https://spcilk.github.io/badger-badge-images/images/300.png" alt="General knowledge category"/>
          <h4 className="category-text">300 - SOCIAL SCIENCE</h4>
        </div>
        <div className="category-individual">
          <img className="category-image" id="category-400-image"  src="https://spcilk.github.io/badger-badge-images/images/400.png" alt="General knowledge category"/>
          <h4 className="category-text">400 - LANGUAGES</h4>
        </div>
        <div className="category-individual">
          <img className="category-image" id="category-500-image"  src="https://spcilk.github.io/badger-badge-images/images/500.png" alt="General knowledge category"/>
          <h4 className="category-text">500 - SCIENCE</h4>
        </div>
        <div className="category-individual">
          <img className="category-image" id="category-600-image"  src="https://spcilk.github.io/badger-badge-images/images/600.png" alt="General knowledge category"/>
          <h4 className="category-text">600 - TECHNOLOGY</h4>
        </div>
        <div className="category-individual">
          <img className="category-image" id="category-700-image"  src="https://spcilk.github.io/badger-badge-images/images/700.png" alt="General knowledge category"/>
          <h4 className="category-text">700 - ARTS & RECREATION</h4>
        </div>
        <div className="category-individual">
          <img className="category-image" id="category-800-image"  src="https://spcilk.github.io/badger-badge-images/images/800.png" alt="General knowledge category"/>
          <h4 className="category-text">800 - LITERATURE</h4>
        </div>
        <div className="category-individual">
          <img className="category-image" id="category-900-image"  src="https://spcilk.github.io/badger-badge-images/images/900.png" alt="General knowledge category"/>
          <h4 className="category-text">900 - HISTORY & GEOGRAPHY</h4>
        </div>
      </div>
    );
  }
}

export default Categories;
