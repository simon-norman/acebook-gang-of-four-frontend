import React, { Component } from 'react';
import CreatePost from './CreatePost';
import Post from './Post';
import postApi from './postApi';

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
      return (
        <div className='center-form'>
          <CreatePost getPosts={this.getPosts}/>
          <div className='posts'>
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
