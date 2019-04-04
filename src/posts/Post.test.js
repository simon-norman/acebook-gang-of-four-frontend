import React from 'react';
import {shallow} from 'enzyme';
import Post from './Post';
import "../../test-setup.js";

it('should render div for a post', () => {
    const userCredentials = JSON.stringify({
      'access-token': '12345',
      client: 'chrome',
      uid: '4'
    })
    sessionStorage.setItem('user', userCredentials)


    const mockPost = 
        {id: 1,
        message: "Hello", 
         userId: 1,
         created_at: "2019-03-22",
         user:{email: 'an email'}
        }
      ;

    const wrapper = shallow(<Post post={mockPost} />);
    expect(wrapper.html()).toEqual('<div class="card" id="1"><div class="card-header"><div>an email</div><div>2019-03-22</div></div><div class="card-body"><div>Hello</div></div><div></div></div>');
})