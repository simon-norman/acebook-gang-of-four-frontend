import React, { Component } from 'react';
import {shallow} from 'enzyme';
import Timeline from './Timeline.js';
import Post from './posts/Post';
import '../test-setup.js';

const mockXHR = {
  open: jest.fn(),
  send: jest.fn(),
  status: 200,
  readyState: 4,
  setRequestHeader: jest.fn(),
  responseText: JSON.stringify(
    [
      {
      id: 1,
      message: "Hello", 
       userId: 1,
       createdAt: "2019-03-22"
      },
      {id: 2,
      message: "I'm new here", 
      userId: 1,
      createdAt: "2019-03-23"},
      {id: 3,
      message: "Please like my post!", 
      userId: 2,
      createdAt: "2019-03-24"
      }
    ]
  )
}

  const oldHXR = window.XMLHttpRequest;
  window.XMLHttpRequest = jest.fn(() => mockXHR);

it('should render a list of Post components', () => { 
  const wrapper = shallow(<Timeline />);
  mockXHR.onreadystatechange();
  wrapper.update();
  expect(wrapper.find(Post).length).toEqual(3);
});