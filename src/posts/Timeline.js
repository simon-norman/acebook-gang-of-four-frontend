import React, { Component } from 'react';
import CreatePost from './CreatePost';
import Post from './Post';
import postApi from './postApi';
import authentication from '../authentication/authentication'

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.state.posts = [];
    this.getPosts();
  }

  getPosts = () => {
    postApi.getPosts((posts) => {
      console.log("posts " + posts)
      this.setState({posts: posts});
    });
  }

  render() {
      return (
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
