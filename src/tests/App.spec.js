import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
import BadgeList from '../components/BadgeList';

describe('App', () => {
  const state = {
    badges: {},
    loading: true,
  };

  it('should start with empty badges', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('badges')).to.eql({});
  });

  it('should start with loading set as true', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('loading')).to.equal(true);
  });

  // it('should render BadgeList if loading is false', () => {
  //   const wrapper = shallow(<App />);
  //   if(wrapper.state('loading').to.equal(true)) {
  //     expect(wrapper.containsAllMatchingElements([
  //       <h3>LOADING...</h3>
  //     ]))
  //   } else {
  //     expect(wrapper.containsAllMatchingElements([
  //       <BadgeList />
  //     ]))
  //   }
  // });


  it('passes badges to goToBadge', () => {
    const wrapper = shallow(<App/>);
    const badgeList = wrapper.find(BadgeList);
    const goToBadge = wrapper.instance().goToBadge;
    expect(badgeList.prop('goToBadge')).to.eql(goToBadge);
  });
});
