import React, { Component } from 'react';
import postApi from '../posts/postApi'
class UpdatePost extends Component {
  constructor(props) {
    super(props);
    const sessionUser = sessionStorage.user
    this.state = { userId: JSON.parse(sessionUser).userId };
  }

  handleInputChange = (event) => {
      const name = event.target.name
      const value = event.target.value
    
      this.setState({[name]: value})
  }

  updatePost = (event) => {
      event.preventDefault();
      const post = {
        id: this.props.postid,
        message: this.state.message
      }
      postApi.updatePost({ post }, this.updatePostMessage)
  }

  updatePostMessage = () => {
    this.props.updateMessage(this.state.message);
  }

  render() {
      return (
        <div>
          <form className='update-post-form' onSubmit={this.updatePost}>
              <textarea placeholder="What's newer?" name='message' onChange={this.handleInputChange} className='form-control'/>
              <input type='submit' className="btn btn-outline-primary"/>   
          </form>
        </div>
      )
    }
}

export default UpdatePost;