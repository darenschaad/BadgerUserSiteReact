import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
// import Login from './Login';
import { WindowResizeListener } from 'react-window-resize-listener'

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

  windowResize(windowSize) {
    if(windowSize.windowWidth >= 750){
      this.setState({ className: 'closed' });
    }
  }


  render(){
    return(
      <div className="navbar-div">
        <WindowResizeListener onResize={windowSize => this.windowResize(windowSize)} />
        <div className="navbar-icons">
          <img className="navbar-clickable" onClick={this.goToPage.bind(this, "")} id="navbar-image"  src={require('../img/badgey.png')} alt="badger logo"/>
          <FontAwesome onClick={this.openMenu} className="hamburger-icon" name="bars" />
        </div>
        <ul className={this.state.className}>
          <li className="navbar-clickable" onClick={this.goToPage.bind(this, "about")}>About</li>
          <li className="navbar-clickable" onClick={this.goToPage.bind(this, "categories")}>Categories</li>
          <li className="navbar-clickable" onClick={this.goToPage.bind(this, "challenges")}>Challenges</li>


        </ul>
      </div>
    );
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object
}

export default NavBar;
