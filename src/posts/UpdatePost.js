import React, { Component } from 'react';

class UpdatePost extends Component {
  constructor(props) {
    super(props);
    const sessionUser = sessionStorage.user
    this.state = { userId: JSON.parse(sessionUser).userId };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.updatePostMessage = this.updatePostMessage.bind(this);
  }

  handleInputChange(event){
      const name = event.target.name
      const value = event.target.value
    
      this.setState({[name]: value})
  }

  updatePost(event) {
      event.preventDefault();
      const post = {
        user_id: this.state.userId,
        message: this.state.message
      }
      postApi.updatePost({ post }, this.updatePostMessage)
  }

  updatePostMessage() {
      // update post with new message
  }

  render() {
      return (
        <div>
          <form onSubmit={this.updatePost}>
              <div className='form-item'>
                  What's newer?: 
                  <textarea name='message' onChange={this.handleInputChange} className='form-control'/>
              </div>
              <input type='submit' className="btn btn-outline-primary"/>   
          </form>
        </div>
      )
    }
}

export default UpdatePost;