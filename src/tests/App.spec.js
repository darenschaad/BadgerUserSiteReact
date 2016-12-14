import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
import BadgeList from '../components/BadgeList';

describe('App', () => {

  // it('passes badges to goToBadge', () => {
  //   const wrapper = shallow(<App/>);
  //   const badgeList = wrapper.find(BadgeList);
  //   const goToBadge = wrapper.instance().goToBadge;
  //   expect(badgeList.prop('goToBadge')).to.eql(goToBadge);
  // });

  //
  // it('should render BadgeList', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.containsAllMatchingElements([
  //     <h3>LOADING... </h3>,
  //     <BadgeList
  //       badgeArray={this.state.badges}
  //       goToBadge={this.goToBadge}
  //       currentBadge={this.state.currentBadge}
  //     />
  //   ])).to.equal(true);
  // });

  it('should start with empty badges', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('badges')).to.eql({});
  });

  it('should start by loading', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('loading')).to.equal(true);
  });
});
