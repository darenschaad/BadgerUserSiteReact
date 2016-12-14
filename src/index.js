import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Match, Miss } from '../node_modules/react-router/index';
import BadgeList from './components/BadgeList';
import Badge from './components/Badge';
import NotFound from './components/NotFound';

import './styles/normalize.css'
import './styles/App.scss';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/badge/:pushId" component={Badge} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
