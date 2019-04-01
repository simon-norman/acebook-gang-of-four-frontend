import React from 'react';
import {shallow} from 'enzyme';
import Post from './Post';
import "../test-setup.js";

it('should render div for a post', () => {
    const mockPost = 
        {id: 1,
        message: "Hello", 
         userId: 1,
         createdAt: "2019-03-22"
        }
      ;

    const wrapper = shallow(<Post post={mockPost} />);
    console.log("wrapper" + wrapper.html());
    expect(wrapper.html()).toEqual('<div class="card" id="1"><div class="card-header"><div>1</div><div>2019-03-22</div></div><div class="card-body"><div>Hello</div></div></div>');

})