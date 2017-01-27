import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import Login from './Login';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      className: 'closed',
    }
    this.goToPage = this.goToPage.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }

  goToPage(destination) {
    event.preventDefault();
    if (destination === "") {
      localStorage.setItem(`searchBy`, "");
    }
    this.context.router.transitionTo(`/${destination}`);
  }

  openMenu() {
    if(this.state.className === 'closed') {
      this.setState({ className: 'open' });
    } else {
      this.setState({ className: 'closed' })
    }
  }


  render(){
    return(
      <div className="navbar-div">
        <div className="navbar-icons">
          <img className="navbar-clickable" onClick={this.goToPage.bind(this, "")} id="navbar-image"  src={require('../img/badgey.png')} alt="badger logo"/>
          <FontAwesome onClick={this.openMenu} className="hamburger-icon" name="bars" />
        </div>
        <div>
          <ul className={this.state.className}>
            <li className="navbar-clickable" onClick={this.goToPage.bind(this, "challenges")}>Challenges</li>
            <li className="navbar-clickable" onClick={this.goToPage.bind(this, "about")}>About</li>
            <li className="navbar-clickable" onClick={this.goToPage.bind(this, "categories")}>Categories</li>
            <Login
              logIn={this.props.logIn}
              logOut={this.props.logOut}
              authenticated={this.props.authenticated}
              currentUser={this.props.currentUser} />
          </ul>
        </div>
      </div>
    );
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object
}

export default NavBar;
