import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './components/App';
import BadgeList from './components/BadgeList';
import Badge from './components/Badge';
import NotFound from './components/NotFound';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/badges" component={BadgeList}>
        <Route path="/badges/:pushId" component={Badge}/>
      </Route>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
