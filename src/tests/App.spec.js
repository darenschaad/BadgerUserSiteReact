import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
import BadgeList from '../components/BadgeList';

describe('App', () => {
  it('should render BadgeList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsAllMatchingElements([
      <BadgeList

      />
    ])).to.equal(true);
  });

  it('should start with empty badges', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('badges')).to.eql({});
  });
});
