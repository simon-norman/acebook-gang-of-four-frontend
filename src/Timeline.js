import React, { Component } from 'react';
import CreatePost from './posts/CreatePost';
import Post from './posts/Post';
import postApi from './posts/postApi';
import authentication from './authentication/authentication'

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.state.posts = [];
    this.getPosts();
  }

  getPosts = () => {
    postApi.getPosts((posts) => {
      this.setState({posts: posts});
    });
  }

  render() {
      return authentication.redirectIfLoggedOut(
        <div>
          <CreatePost getPosts={this.getPosts}/>
          <div>
            { 
              this.state.posts.map((post, i) => {
                return <Post post={post} key={i}/>
              }) 
            }
          </div>
        </div>
      )
    }
}

export default Timeline;
