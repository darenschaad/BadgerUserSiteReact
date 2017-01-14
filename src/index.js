import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import App from './components/App';
import { BrowserRouter, Match, Miss } from '../node_modules/react-router/index';
import Badge from './components/Badge';
import Categories from './components/Categories';
import Challenges from './components/Challenges'
import NotFound from './components/NotFound';

import './styles/normalize.css';
import './styles/App.scss';
import './styles/animate.css';

const Root = () => {
  return(
    <div>
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={App} />
          <Match exactly pattern="/categories" component={Categories} />
          <Match exactly pattern="/about" component={About} />
          <Match exactly pattern="/challenges" component={Challenges} />
          <Match pattern="/badge/:pushId" component={Badge} />
          <Miss component={NotFound} />
        </div>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
