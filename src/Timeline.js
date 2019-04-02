import React, { Component } from 'react';
import Post from './posts/Post';
import postApi from './posts/postApi';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.state.posts = [];
    this.getPosts();
  }

  getPosts() {
    postApi.getPosts((posts) => {
      this.setState({posts: posts});
    });
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
