import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Match, Miss } from '../node_modules/react-router/index';
import Badge from './components/Badge';
import NotFound from './components/NotFound';

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
