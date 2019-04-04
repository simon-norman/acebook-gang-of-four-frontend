import React, { Component } from 'react';
import UpdateButton from './UpdateButton'
class Post extends Component {

  constructor(props) {
    super(props);
    this.state = { post: this.props.post }
  }

  updateMessage(newMessage) {
    const post = this.state;
    post.message = newMessage;
    this.setState({post});
  }

  render() {
    return (
      <div className="card" id={this.state.post.id}>
        <div className="card-header">
          <div>{this.state.post.user.email}</div>
          <div>{this.state.post.created_at}</div>
        </div>
        <div className="card-body">
          <div>{this.state.post.message}</div>
        </div>
        <div>
          <UpdateButton updateMessage={this.updateMessage} email={this.state.post.user.email} created_at={this.state.post.created_at} />
        </div>
      </div>
    );
  }
}

export default Post;