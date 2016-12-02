import React, { Component } from 'react';
import Badge from './Badge';
import { Link } from 'react-router'

class BadgeList extends Component {
  render() {
    return (
      <div>
        <div className="master">
          <ul>
            {/* use Link to route around the app */}
            {this.props.badgeArray.map((badge, idx) => (
              <li key={badge.pushId}>
                <Link
                  to={`/badges/${badge.pushId}`}
                  activeStyle={{ color: 'red' }}
                >{badge.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default BadgeList;
