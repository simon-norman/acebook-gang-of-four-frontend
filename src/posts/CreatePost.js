import React, { Component } from 'react';
import postApi from './postApi.js'

class CreatePost extends Component {
    constructor(props) {
      super(props);
      const sessionUser = sessionStorage.user
      this.state = { userId: JSON.parse(sessionUser).userId };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.createPost = this.createPost.bind(this);
      this.redirectToTimeline = this.redirectToTimeline.bind(this);
    }
  
    handleInputChange(event){
        const name = event.target.name
        const value = event.target.value
      
        this.setState({[name]: value})
    }

    createPost(event) {
        event.preventDefault();
        const post = {
          user_id: this.state.userId,
          message: this.state.message
        }
        postApi.createPost({ post }, this.redirectToTimeline)
    }

    redirectToTimeline() {
        this.props.history.push('/posts')
    }

    render() {
        return (
          <div>
            <form onSubmit={this.createPost}>
                <div className='form-item'>
                    What's new?: 
                    <textarea name='message' onChange={this.handleInputChange} className='form-control'/>
                </div>
                <input type='submit' className="btn btn-outline-primary"/>   
            </form>
          </div>
        )
      }
  }
  
  export default CreatePost;
  