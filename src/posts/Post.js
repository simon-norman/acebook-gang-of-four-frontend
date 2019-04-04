import React, { Component } from 'react';
import UpdateButton from './UpdateButton'
class Post extends Component {

  constructor(props) {
    super(props);
    this.state = { post: this.props.post, date: new Date(this.props.post.created_at) }
    this.updateMessage = this.updateMessage.bind(this)
  }

  updateMessage(newMessage) {
    const state = this.state;
    console.log(newMessage)
    console.log(state)
    state.post.message = newMessage;
    this.setState({state});
  }

  render() {
    return (
      <div className="card" id={this.state.post.id}>
        <div className="card-header">
          <div>{this.state.post.user.email}</div>
          <div>{this.state.date.toString()}</div>
        </div>
        <div className="card-body">
          <div>{this.state.post.message}</div>
        </div>
        <div>
          <UpdateButton postid={this.state.post.id} updateMessage={this.updateMessage} email={this.state.post.user.email} created_at={this.state.post.created_at} />
        </div>
      </div>
    );
  }
}

export default Post;