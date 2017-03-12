
exports.__esModule = true;
exports.routerContext = exports.historyContext = exports.location = exports.history = exports.matchContext = exports.action = undefined;

var _react = require('react');

var action = exports.action = _react.PropTypes.oneOf(['PUSH', 'REPLACE', 'POP']);

exports.matchContext = _react.PropTypes.shape({
  addMatch: _react.PropTypes.func.isRequired,
  removeMatch: _react.PropTypes.func.isRequired
});

exports.history = _react.PropTypes.shape({
  listen: _react.PropTypes.func.isRequired,
  listenBefore: _react.PropTypes.func.isRequired,
  push: _react.PropTypes.func.isRequired,
  replace: _react.PropTypes.func.isRequired,
  go: _react.PropTypes.func.isRequired
});

exports.location = _react.PropTypes.shape({
  pathname: _react.PropTypes.string.isRequired,
  search: _react.PropTypes.string.isRequired,
  hash: _react.PropTypes.string.isRequired,
  state: _react.PropTypes.any,
  key: _react.PropTypes.string
});

exports.historyContext = _react.PropTypes.shape({
  action: action.isRequired,
  location: location.isRequired,
  push: _react.PropTypes.func.isRequired,
  replace: _react.PropTypes.func.isRequired,
  go: _react.PropTypes.func.isRequired,
  goBack: _react.PropTypes.func.isRequired,
  goForward: _react.PropTypes.func.isRequired,
  canGo: _react.PropTypes.func,
  block: _react.PropTypes.func.isRequired
});

exports.routerContext = _react.PropTypes.shape({
  transitionTo: _react.PropTypes.func.isRequired,
  replaceWith: _react.PropTypes.func.isRequired,
  blockTransitions: _react.PropTypes.func.isRequired,
  createHref: _react.PropTypes.func.isRequired
});
