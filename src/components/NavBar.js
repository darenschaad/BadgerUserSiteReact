import React, {Component} from 'react';

class NavBar extends Component {
  constructor() {
    super();
    this.goToPage = this.goToPage.bind(this);
  }

  goToPage(destination) {
    event.preventDefault();
    // const destination = this.destination.value;
    console.log(destination);
    console.log(event);
    this.context.router.transitionTo(`/${destination}`);
  }

  render(){
    return(
      <div className="navbar-div">
        <img className="navbar-clickable" onClick={this.goToPage.bind(this, "")} id="navbar-image"  src={require('../img/badgey.png')} alt="badger logo"/>
        <ul>
          <li className="navbar-clickable" onClick={this.goToPage.bind(this, "challenges")}>Challenges</li>
          <li className="navbar-clickable" onClick={this.goToPage.bind(this, "about")}>About</li>
          <li className="navbar-clickable" onClick={this.goToPage.bind(this, "categories")}>Categories</li>
        </ul>
      </div>
    );
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object
}

export default NavBar;
