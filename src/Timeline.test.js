import React, { Component } from 'react';
import {shallow} from 'enzyme';
import Timeline from './Timeline.js';
import Post from './Post';
import '../test-setup.js';

it('should render a list of Post components', () => {
  const wrapper = shallow(<Timeline />);
  expect(wrapper.find(Post).length).toEqual(3);
});