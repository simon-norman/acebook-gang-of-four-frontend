import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post'

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: this.getPosts()
    };
  }

  // async getPosts() {
    // try {
    //   this.state.posts = await axios.get('http://localhost:4000/posts')
    // } catch(error) {
    //   console.log(error.reponse)
    // }
  // }

  getPosts() {
    return [
      {id: 1,
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
      createdAt: "2019-03-24"}
    ]
  }

  render() {
    return (
      <div>
        { this.state.posts.map((post, i) => {
          return <Post post={post} key={i}/>
        }) }
      </div>
    )
    }
}

export default Timeline;
