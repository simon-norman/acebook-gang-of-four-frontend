import React, { Component } from 'react';
import {shallow} from 'enzyme';
import Timeline from './Timeline.js';
import Post from './Post';
import '../../test-setup.js';

const mockXHR = {
  open: jest.fn(),
  send: jest.fn(),
  status: 200,
  readyState: 4,
  setRequestHeader: jest.fn(),
  getResponseHeader: jest.fn(),
  response: JSON.stringify(
    [
      {
        id: 1,
        message: "Hello", 
        userId: 1,
        createdAt: "2019-03-22"
      },
      {
        id: 2,
        message: "I'm new here", 
        userId: 1,
        createdAt: "2019-03-23"
      },
      {
        id: 3,
        message: "Please like my post!", 
        userId: 2,
        createdAt: "2019-03-24"
      }
    ]
  )
}

window.XMLHttpRequest = jest.fn(() => mockXHR);

const userCredentials = JSON.stringify({
  'access-token': '12345',
  client: 'chrome',
  uid: '4'
})

it('should render a list of Post components', () => {
  sessionStorage.setItem('user', userCredentials)
  const wrapper = shallow(<Timeline />);
  mockXHR.onreadystatechange();
  expect(wrapper.find(Post).length).toEqual(3);
});