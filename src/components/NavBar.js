import React, {Component} from 'react';

class NavBar extends Component {
  constructor() {
    super();
    this.goToPage = this.goToPage.bind(this);
  }

  goToPage(event) {
    console.log(event);
    this.context.router.transitionTo(`/${event.target.value}`);
  }

  render(){
    return(
      <div>
        <ul>
          <li value={'about'} onClick={this.goToPage}>About</li>
          <li value={'categories'} onClick={this.goToPage}>Categories</li>
        </ul>
      </div>
    );
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object
}

export default NavBar;
