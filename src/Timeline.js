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

  async getPosts() {
    try {
      this.state.posts = await axios.get('http://localhost:4000/posts')
    } catch(error) {
      console.log(error.reponse)
    }
  }

  render() {
    return (
      <div>
        { this.state.posts.map(post => {
          return <Post message={post.message} />
        }) }
      </div>
    )
    }
}

export default Timeline;
